import { ServerInterceptor } from "../../proto/interceptor";
import { sanitize } from "../../common/String";

const Sanitizer: ServerInterceptor = (call, callback, next) => {
  for (const key in call.request) {
    call.request[key] =
      key === "pass" ? call.request[key].trim() : sanitize(call.request[key]);
  }
  next();
};

export default Sanitizer;
