import { Column, HasMany, Model, Table } from "sequelize-typescript";
import { tableConfig } from "../index";
import { MessageRequest } from "./MessageRequest";

interface IUserAttributes {
  tag: string;
  password: string;
}

@Table({ ...tableConfig, tableName: "users" })
export class User extends Model<IUserAttributes> {
  @Column
  tag: string;

  @Column
  password: string;

  @HasMany(() => MessageRequest, "senderId")
  sentMessageRequests: MessageRequest[];

  @HasMany(() => MessageRequest, "recipientId")
  receivedMessageRequests: MessageRequest[];
}
