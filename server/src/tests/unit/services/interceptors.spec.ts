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

    action.mockReset();
  });

  test("server interceptor modifies call in-order", () => {
    const interceptor1: ServerInterceptor = (call, callback, next) => {
      call.request.info.push({ me: true });
      next();
    };

    const interceptor2: ServerInterceptor = (call, callback, next) => {
      call.request.info.push({ you: false });
      call.request.info[0] = { her: "Yes" };
      next();
    };

    const call = { request: { info: [{ her: true }] } };

    const serverFn = AddInterceptorsToService(
      [interceptor1, interceptor2],
      makeTestServerFunction("modifiesCallFN")
    );

    const callBackFn = jest.fn();
    serverFn(call as any, callBackFn);

    expect(call.request.info.length).toBe(3); // Tests that call was modified successfully
    expect(call.request.info[1]).toStrictEqual({ me: true }); // Tests that it was modified in-order;
    expect(call.request.info[2]).toStrictEqual({ you: false });
    expect(call.request.info[0]).toStrictEqual({ her: "Yes" });
    expect(callBackFn).toBeCalledWith(null, {
      status: "OK",
      type: "server_function",
      message: "modifiesCallFN",
    });

    action.mockReset();
  });
});
