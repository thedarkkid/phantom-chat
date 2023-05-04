// package: _auth
// file: auth.proto

import * as auth_pb from "./auth_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthServiceAuthenticateUser = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.AuthenticateUserRequest;
  readonly responseType: typeof auth_pb.User;
};

type AuthServiceGetUser = {
  readonly methodName: string;
  readonly service: typeof AuthService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.GetUserRequest;
  readonly responseType: typeof auth_pb.User;
};

export class AuthService {
  static readonly serviceName: string;
  static readonly AuthenticateUser: AuthServiceAuthenticateUser;
  static readonly GetUser: AuthServiceGetUser;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AuthServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  authenticateUser(
    requestMessage: auth_pb.AuthenticateUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_pb.User|null) => void
  ): UnaryResponse;
  authenticateUser(
    requestMessage: auth_pb.AuthenticateUserRequest,
    callback: (error: ServiceError|null, responseMessage: auth_pb.User|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: auth_pb.GetUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_pb.User|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: auth_pb.GetUserRequest,
    callback: (error: ServiceError|null, responseMessage: auth_pb.User|null) => void
  ): UnaryResponse;
}

