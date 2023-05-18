// package: _messages
// file: messages.proto

import * as jspb from "google-protobuf";
import * as auth_pb from "./auth_pb";

export class Message extends jspb.Message {
  hasSender(): boolean;
  clearSender(): void;
  getSender(): auth_pb.User | undefined;
  setSender(value?: auth_pb.User): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  getThreadid(): string;
  setThreadid(value: string): void;

  getBody(): string;
  setBody(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    sender?: auth_pb.User.AsObject,
    timestamp: number,
    threadid: string,
    body: string,
  }
}

export class MessageThread extends jspb.Message {
  hasSender(): boolean;
  clearSender(): void;
  getSender(): auth_pb.User | undefined;
  setSender(value?: auth_pb.User): void;

  hasRecipient(): boolean;
  clearRecipient(): void;
  getRecipient(): auth_pb.User | undefined;
  setRecipient(value?: auth_pb.User): void;

  getThreadid(): string;
  setThreadid(value: string): void;

  clearMessagesList(): void;
  getMessagesList(): Array<Message>;
  setMessagesList(value: Array<Message>): void;
  addMessages(value?: Message, index?: number): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageThread.AsObject;
  static toObject(includeInstance: boolean, msg: MessageThread): MessageThread.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageThread, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageThread;
  static deserializeBinaryFromReader(message: MessageThread, reader: jspb.BinaryReader): MessageThread;
}

export namespace MessageThread {
  export type AsObject = {
    sender?: auth_pb.User.AsObject,
    recipient?: auth_pb.User.AsObject,
    threadid: string,
    messagesList: Array<Message.AsObject>,
  }
}

export class ThreadRequest extends jspb.Message {
  getThreadid(): string;
  setThreadid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThreadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ThreadRequest): ThreadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ThreadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThreadRequest;
  static deserializeBinaryFromReader(message: ThreadRequest, reader: jspb.BinaryReader): ThreadRequest;
}

export namespace ThreadRequest {
  export type AsObject = {
    threadid: string,
  }
}

export class MessageRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MessageRequest): MessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageRequest;
  static deserializeBinaryFromReader(message: MessageRequest, reader: jspb.BinaryReader): MessageRequest;
}

export namespace MessageRequest {
  export type AsObject = {
    userid: string,
  }
}

export class MessagesResponse extends jspb.Message {
  clearMessagesList(): void;
  getMessagesList(): Array<Message>;
  setMessagesList(value: Array<Message>): void;
  addMessages(value?: Message, index?: number): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MessagesResponse): MessagesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessagesResponse;
  static deserializeBinaryFromReader(message: MessagesResponse, reader: jspb.BinaryReader): MessagesResponse;
}

export namespace MessagesResponse {
  export type AsObject = {
    messagesList: Array<Message.AsObject>,
  }
}

export class MessageTunnelRequest extends jspb.Message {
  getSenderid(): string;
  setSenderid(value: string): void;

  getRecipientid(): string;
  setRecipientid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageTunnelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MessageTunnelRequest): MessageTunnelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageTunnelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageTunnelRequest;
  static deserializeBinaryFromReader(message: MessageTunnelRequest, reader: jspb.BinaryReader): MessageTunnelRequest;
}

export namespace MessageTunnelRequest {
  export type AsObject = {
    senderid: string,
    recipientid: string,
  }
}

export class NewMessageRequest extends jspb.Message {
  getSenderid(): string;
  setSenderid(value: string): void;

  getRecipienttag(): string;
  setRecipienttag(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewMessageRequest): NewMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewMessageRequest;
  static deserializeBinaryFromReader(message: NewMessageRequest, reader: jspb.BinaryReader): NewMessageRequest;
}

export namespace NewMessageRequest {
  export type AsObject = {
    senderid: string,
    recipienttag: string,
    message: string,
  }
}

export class NewMessageRequestResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewMessageRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewMessageRequestResponse): NewMessageRequestResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewMessageRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewMessageRequestResponse;
  static deserializeBinaryFromReader(message: NewMessageRequestResponse, reader: jspb.BinaryReader): NewMessageRequestResponse;
}

export namespace NewMessageRequestResponse {
  export type AsObject = {
    status: string,
    message: string,
  }
}

