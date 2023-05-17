// package: _messages
// file: messages.proto

import * as messages_pb from "./messages_pb";
import {grpc} from "@improbable-eng/grpc-web";

type MessageServiceCreateMessageTunnel = {
  readonly methodName: string;
  readonly service: typeof MessageService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof messages_pb.MessageTunnelRequest;
  readonly responseType: typeof messages_pb.MessageThread;
};

type MessageServiceGetMessageThread = {
  readonly methodName: string;
  readonly service: typeof MessageService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.ThreadRequest;
  readonly responseType: typeof messages_pb.MessageThread;
};

type MessageServiceGetUserMessagesList = {
  readonly methodName: string;
  readonly service: typeof MessageService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.MessageRequest;
  readonly responseType: typeof messages_pb.MessagesResponse;
};

type MessageServiceGetUserMessagesRequests = {
  readonly methodName: string;
  readonly service: typeof MessageService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof messages_pb.MessageRequest;
  readonly responseType: typeof messages_pb.MessagesResponse;
};

export class MessageService {
  static readonly serviceName: string;
  static readonly CreateMessageTunnel: MessageServiceCreateMessageTunnel;
  static readonly GetMessageThread: MessageServiceGetMessageThread;
  static readonly GetUserMessagesList: MessageServiceGetUserMessagesList;
  static readonly GetUserMessagesRequests: MessageServiceGetUserMessagesRequests;
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

export class MessageServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createMessageTunnel(requestMessage: messages_pb.MessageTunnelRequest, metadata?: grpc.Metadata): ResponseStream<messages_pb.MessageThread>;
  getMessageThread(
    requestMessage: messages_pb.ThreadRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_pb.MessageThread|null) => void
  ): UnaryResponse;
  getMessageThread(
    requestMessage: messages_pb.ThreadRequest,
    callback: (error: ServiceError|null, responseMessage: messages_pb.MessageThread|null) => void
  ): UnaryResponse;
  getUserMessagesList(
    requestMessage: messages_pb.MessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_pb.MessagesResponse|null) => void
  ): UnaryResponse;
  getUserMessagesList(
    requestMessage: messages_pb.MessageRequest,
    callback: (error: ServiceError|null, responseMessage: messages_pb.MessagesResponse|null) => void
  ): UnaryResponse;
  getUserMessagesRequests(
    requestMessage: messages_pb.MessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: messages_pb.MessagesResponse|null) => void
  ): UnaryResponse;
  getUserMessagesRequests(
    requestMessage: messages_pb.MessageRequest,
    callback: (error: ServiceError|null, responseMessage: messages_pb.MessagesResponse|null) => void
  ): UnaryResponse;
}

