import { IUser } from "../common/typing/Auth";
import { ServiceFunction } from "../common/typing";
import { randomHexString } from "../common/String";
import { Config } from "../common/Config";
import * as bcrypt from "bcryptjs";
import * as JWT from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import { User } from "../db/entities/User";
import { Model } from "sequelize-typescript";
import * as grpc from "@grpc/grpc-js";

export const authenticateUser: ServiceFunction<
  { userTag: string; pass: string },
  IUser
> = async (call, callback) => {
  const { userTag, pass } = call.request;
  const user: Model = await User.findOne({
    include: { all: true },
    where: { tag: userTag },
  });

  if (!user)
    return callback({
      code: grpc.status.UNAUTHENTICATED,
      message: "usertag or pass incorrect!",
    } as any);

  const isValidPass: boolean = await bcrypt.compare(
    pass,
    user.get("pass") as string
  );

  if (!isValidPass)
    return callback({
      code: grpc.status.UNAUTHENTICATED,
      message: "usertag or pass incorrect!",
    } as any);

  const token: string = signJWT(user.id, userTag);
  return callback(null, { ...user.toJSON(), token });
};

/**
 * Checks and returns a valid user, else, it creates a guest.
 * @param call
 * @param callback
 */
export const getUser: ServiceFunction<{ token: string }, IUser> = async (
  call,
  callback
) => {
  let { token } = call.request;

  const guest = async () => callback(null, await makeGuestUser());

  if (token == "guest") return await guest();
  try {
    const payload: JwtPayload = JWT.verify(
      token,
      Config.auth.secret
    ) as JwtPayload;

    const user: Model = await User.findByPk(payload._id, {
      include: { all: true },
    });

    if (!user) return await guest();
    unSignJWT(payload);

    token = signJWT(user.id, user.get("tag") as string);
    return callback(null, { ...user.toJSON(), token });
  } catch (e) {
    return await guest();
  }
};

export const createUser: ServiceFunction<
  { userTag: string; pass: string },
  IUser
> = async (call, callback) => {
  const { userTag, pass } = call.request;
  const userExists: Model = await User.findOne({
    include: { all: true },
    where: { tag: userTag },
  });

  if (userExists)
    return callback({
      code: grpc.status.ALREADY_EXISTS,
      message: "user already exists",
    } as any);

  const user: IUser = await makeUser(userTag, pass);
  const token: string = signJWT(user.id, userTag);
  return callback(null, { ...user, token });
};

const makeUser = async (tag: string, pass: string): Promise<IUser> => {
  const salt: string = await bcrypt.genSalt(
    parseInt(Config.auth.saltRounds, 10)
  );
  const password: string = await bcrypt.hash(pass, salt);

  const user: Model = await User.create({ tag, password });
  const token: string = signJWT(user.id, tag);

  return { ...user.toJSON(), token };
};

const makeGuestUser = async (): Promise<IUser> => {
  const userTag = "guest-" + randomHexString(10);
  const userPass = randomHexString(22) as string;
  return makeUser(userTag, userPass);
};

const signJWT = (id: string | number, tag: string): string => {
  return JWT.sign({ _id: id, tag }, Config.auth.secret, {
    expiresIn: Config.auth.expiration,
  });
};

const unSignJWT = (payload: JwtPayload): void => {
  delete payload.iat;
  delete payload.exp;
  delete payload.nbf;
  delete payload.jti;
};
