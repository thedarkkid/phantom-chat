import { Model, TableOptions, Sequelize } from "sequelize-typescript";
import { User } from "./entities/User";
import { MessageRequest } from "./entities/MessageRequest";

export const MODELS = [User, MessageRequest];
export const tableConfig: TableOptions<Model> = {
  timestamps: true,
  underscored: true,
};
export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./phantom-db.sqlite",
  models: MODELS,
});
