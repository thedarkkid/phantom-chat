import { IUser } from "../typing/Auth";
import { RPCFunction } from "../typing";

export const authenticateUser = (req: any) => {
  console.info("FN:: authenticateUser");
  return { stat: "success", req };
};

export const getUser: RPCFunction<{ token: string }, IUser> = (
  req,
  callback
) => {
  callback(null, { id: 1, tag: req.request.token });
};
