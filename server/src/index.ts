import * as grpc from "@grpc/grpc-js";
import { server } from "./proto/server";
import { sequelize } from "./db";

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
