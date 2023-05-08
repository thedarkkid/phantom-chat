import Config from "../../common/Config";
import JWT from "jsonwebtoken";
import { ServerInterceptor } from "../../proto/interceptor";
import * as grpc from "@grpc/grpc-js";

const Auth: ServerInterceptor = (call, callback, next) => {
  try {
    const token = call.request.metadata.token;
    call.request.authorization = JWT.verify(token, Config.auth.secret);
    next();
  } catch (e) {
    callback({
      code: grpc.status.UNAUTHENTICATED,
      message: "Invalid Token",
    } as any);
  }
};

export default Auth;
