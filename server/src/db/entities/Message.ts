import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { tableConfig } from "../index";
import { User } from "./User";

interface IMessageAttributes {
  senderId: number;
  recipientId: number;
  threadId: string;
  persist: boolean;
}

@Table(tableConfig)
export class Message extends Model<IMessageAttributes> {
  @ForeignKey(() => User)
  @Column
  senderId: number;

  @ForeignKey(() => User)
  @Column
  recipientId: number;

  @Column
  threadId: string;

  @Column
  persist: boolean;
}
