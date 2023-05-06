import { authenticateUser, getUser } from "../Auth";
import { ServiceFunctionObject } from "../../typing";

export const services: ServiceFunctionObject = {
  authenticateUser,
  getUser,
};
