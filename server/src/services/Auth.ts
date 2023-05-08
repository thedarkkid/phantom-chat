import { IUser } from "../common/typing/Auth";
import { ServiceFunction } from "../common/typing";
import { randomHexString } from "../common/String";
export const authenticateUser = (req: any) => {
  console.info("FN:: authenticateUser");
  return { stat: "success", req };
};

export const createGuestUser = () => {
  const userTag = randomHexString(10);
}

export const getUser: ServiceFunction<{ token: string }, IUser> = async (
  req,
  callback
) => {

  callback(null, { id: 1, tag: req.request.token });
};
