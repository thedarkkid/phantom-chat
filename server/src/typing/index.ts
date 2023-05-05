import * as grpc from "@grpc/grpc-js";

export type RPCFunction<RequestType, ResponseType> = (
  call: grpc.ServerUnaryCall<RequestType, ResponseType>,
  callback: grpc.requestCallback<ResponseType>
) => void;
