import { IUser } from "../typing/Auth";
import { ServiceFunction } from "../typing";

export const authenticateUser = (req: any) => {
  console.info("FN:: authenticateUser");
  return { stat: "success", req };
};

export const getUser: ServiceFunction<{ token: string }, IUser> = async (
  req,
  callback
) => {
  callback(null, { id: 1, tag: req.request.token });
};
