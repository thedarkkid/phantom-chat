import * as path from "path";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

const MESSAGE_PROTO_PATH = "messages.proto";
const AUTH_PROTO_PATH = "auth.proto";

const protoOptions: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [path.join(__dirname, "../../../", "proto")],
};

const _messagePackageDef = protoLoader.loadSync(
  MESSAGE_PROTO_PATH,
  protoOptions
);
const _authPackageDef = protoLoader.loadSync(AUTH_PROTO_PATH, protoOptions);

const _messageProtoDescriptor = grpc.loadPackageDefinition(_messagePackageDef);
const _authProtoDescriptor = grpc.loadPackageDefinition(_authPackageDef);

export const _messages = _messageProtoDescriptor._messages;
export const _auth = _authProtoDescriptor._auth;
