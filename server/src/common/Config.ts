import { GenericReadonlyObject } from "./typing";

export const Config: GenericReadonlyObject = {
  auth: {
    secret: process.env.JWT_SECRET ?? "phantom-jwt-scete120",
    saltRounds: process.env.BCRYPT_SALT_ROUNDS ?? 10,
    expiration: process.env.JWT_EXPIRATION ?? "7d",
  },
};

export default Config;
