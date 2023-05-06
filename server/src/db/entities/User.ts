import { Column, Model, Table } from "sequelize-typescript";
import { tableConfig } from "../index";

interface IUserAttributes {
  tag: string;
  password: string;
}

@Table(tableConfig)
export class User extends Model<IUserAttributes> {
  @Column
  tag: string;

  @Column
  password: string;
}
