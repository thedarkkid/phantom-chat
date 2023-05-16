import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { tableConfig } from "../index";
import { User } from "./User";

export enum MessageRequestStatus {
  pending = 0,
  rejected = -1,
  accepted = 1,
}

interface IMessageRequestAttributes {
  senderId: number;
  recipientId: number;
  threadId: string;
  persist: boolean;
  status: MessageRequestStatus;
}

@Table({ ...tableConfig, tableName: "message_requests" })
export class MessageRequest extends Model<IMessageRequestAttributes> {
  @ForeignKey(() => User)
  @Column
  senderId: number;

  @ForeignKey(() => User)
  @Column
  recipientId: number;

  @BelongsTo(() => User, "senderId")
  sender: number;

  @BelongsTo(() => User, "recipientId")
  recipient: number;

  @AllowNull
  @Column
  threadId: string;

  @Column
  persist: boolean;

  @Column
  status: number;

  get isPendingRequest() {
    return (
      !this.getDataValue("threadId") &&
      this.getDataValue("status") === MessageRequestStatus.pending
    );
  }
  get isRejectedRequest() {
    return (
      !this.getDataValue("threadId") &&
      this.getDataValue("status") === MessageRequestStatus.rejected
    );
  }
  get isAcceptedRequest() {
    return this.getDataValue("status") === MessageRequestStatus.accepted;
  }
}
