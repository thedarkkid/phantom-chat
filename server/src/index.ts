import * as grpc from "@grpc/grpc-js";
import { sequelize } from "./db";
import { auth, messages } from "./proto/loader";
import { services as messageServiceFunctions } from "./services/objects/messages";
import { services as authServiceFunctions } from "./services/objects/auth";

const server = new grpc.Server();
server.addService(messages.MessageService.service, messageServiceFunctions);
server.addService(auth.AuthService.service, authServiceFunctions);

server.bindAsync(
  "0.0.0.0:9090",
  grpc.ServerCredentials.createInsecure(),
  async (error, port) => {
    if (error) console.log(error, "PORT::", port);

    server.start();
    console.info(`grpc server started on port ${port}`);

    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (e) {
      console.error("Unable to connect to the database:", e);
    }
  }
);
