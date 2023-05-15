import { authenticateUser, createUser, getUser } from "../Auth";
import { ServiceFunctionObject } from "../../common/typing";
import { InterceptorGroup } from "../../proto/interceptor";
import Sanitizer from "../interceptors/Sanitizer";

const sanitized: ServiceFunctionObject = InterceptorGroup([Sanitizer], {
  authenticateUser,
  getUser,
  createUser,
});

export const services: ServiceFunctionObject = { ...sanitized };
