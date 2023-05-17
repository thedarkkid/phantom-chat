import * as grpc from "@grpc/grpc-js";
import { ServiceFunction, ServiceFunctionObject } from "../common/typing";

export type InterceptorNext = () => void;

export interface ServerInterceptor<RequestType = any, ResponseType = any> {
  (
    call: grpc.ServerUnaryCall<RequestType, ResponseType>,
    callback: grpc.requestCallback<ResponseType>,
    next: InterceptorNext
  ): void;
}

/**
 * Adds interceptors to service. The order of interceptors matter,
 * as the request goes through them in their array order.
 * @param interceptors
 * @param serviceFunction
 * @constructor
 */
export const AddInterceptorsToService = <ReqType = any, ResType = any>(
  interceptors: ServerInterceptor<ReqType, ResType>[],
  serviceFunction: ServiceFunction<ReqType, ResType>
): ServiceFunction<ReqType, ResType> => {
  const interceptorQueue = [...interceptors];
  const getFunction = ():
    | ServerInterceptor<ReqType, ResType>
    | ServiceFunction<ReqType, ResType> => {
    return interceptorQueue.length > 0
      ? interceptorQueue.shift()
      : serviceFunction;
  };
  const interceptedServiceFunction: ServiceFunction<ReqType, ResType> = (
    call,
    callback
  ): void => {
    const current = getFunction();
    const next = () => interceptedServiceFunction(call, callback);
    current(call, callback, next);
  };

  return interceptedServiceFunction;
};

export const InterceptorGroup = (
  interceptors: ServerInterceptor[],
  serviceFnObject: ServiceFunctionObject
): ServiceFunctionObject => {
  const newServiceFnObject: ServiceFunctionObject = {};
  for (const key in serviceFnObject)
    newServiceFnObject[key] = AddInterceptorsToService(
      interceptors,
      serviceFnObject[key]
    );

  return newServiceFnObject;
};
