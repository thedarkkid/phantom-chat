import * as grpc from "@grpc/grpc-js";

export interface GenericObject {
  [key: string]: any;
}
export interface GenericReadonlyObject {
  readonly [key: string]: any;
}

export interface ServiceFunction<RequestType = any, ResponseType = any> {
  (
    call: grpc.ServerUnaryCall<RequestType, ResponseType>,
    callback: grpc.requestCallback<ResponseType>
  ): void;
}

export interface ServiceFunctionObject {
  [key: string]: ServiceFunction;
}
