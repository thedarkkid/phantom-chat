import { _messages, _auth } from "./loader";
import * as grpc from "@grpc/grpc-js";
import { getMessageThread, getUserMessagesList, getUserMessagesRequest } from "../services/Messages";
import { authenticateUser, getUser } from "../services/Auth";


let grpcServer = new grpc.Server()
grpcServer.addService((_messages as any).MessageService.service, {
	getMessageThread,
	getUserMessagesList,
	getUserMessagesRequest
});
grpcServer.addService((_auth as any).AuthService.service, { authenticateUser, getUser });

export const server: grpc.Server = grpcServer;