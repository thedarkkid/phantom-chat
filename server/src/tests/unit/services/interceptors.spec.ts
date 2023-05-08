import {
  AddInterceptorsToService,
  ServerInterceptor,
} from "../../../proto/interceptor";
import { ServiceFunction } from "../../../common/typing";

const action = jest.fn();
const makeTestInterceptor =
  (message: string): ServerInterceptor =>
  (call, callback, next) => {
    action(`[Interceptor]: ${message}`);
    next();
  };

const makeTestServerFunction =
  (message: string): ServiceFunction =>
  (call, callback) => {
    action(`[ServerFunction]: ${message}`);
    callback(null, { status: "OK", type: "server_function", message });
  };

describe("Test service interceptors", () => {
  test("interceptors intercepts service function", () => {
    const testInterceptor1: ServerInterceptor =
      makeTestInterceptor("interceptor 1 ran");
    const testInterceptor2: ServerInterceptor =
      makeTestInterceptor("interceptor 2 ran");

    const serverFn = AddInterceptorsToService(
      [testInterceptor1, testInterceptor2],
      makeTestServerFunction("sampleServiceFunction")
    );

    const callBackFn = jest.fn();
    serverFn({} as any, callBackFn);

    expect(action).toBeCalled();
    expect(action).toBeCalledTimes(3);
    expect(action).toHaveBeenNthCalledWith(
      1,
      "[Interceptor]: interceptor 1 ran"
    );
    expect(action).toHaveBeenNthCalledWith(
      2,
      "[Interceptor]: interceptor 2 ran"
    );
    expect(action).toHaveBeenNthCalledWith(
      3,
      "[ServerFunction]: sampleServiceFunction"
    );
    expect(callBackFn).toBeCalledWith(null, {
      status: "OK",
      type: "server_function",
      message: "sampleServiceFunction",
    });
  });
});
