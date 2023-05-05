import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./phantom-db.sqlite",
});
