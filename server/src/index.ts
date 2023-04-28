import * as grpc from "@grpc/grpc-js";
import { server } from "./proto/server";

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (error, port) => {
	server.start();
	if (error) console.log(error, "PORT::", port);
	console.info("server started");
});