import { authenticateUser, getUser } from "../Auth";
import { ServiceFunctionObject } from "../../common/typing";

export const services: ServiceFunctionObject = {
  authenticateUser,
  getUser,
};
