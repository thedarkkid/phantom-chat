import * as grpc from "@grpc/grpc-js";

export interface ServiceFunction<RequestType, ResponseType> {
  (
    call: grpc.ServerUnaryCall<RequestType, ResponseType>,
    callback: grpc.requestCallback<ResponseType>
  ): void;
}

export interface ServiceFunctionObject {
  [key: string]: ServiceFunction<any, any>;
}
