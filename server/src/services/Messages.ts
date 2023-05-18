import { ServiceFunction } from "../common/typing";
import { User } from "../db/entities/User";
import * as grpc from "@grpc/grpc-js";
import { ServiceError } from "@grpc/grpc-js";
import {
  MessageRequest,
  MessageRequestStatus,
} from "../db/entities/MessageRequest";
import { Op } from "sequelize";
import { Chat, ChatMessage, createThread } from "../common/Chat";

export const getMessageThread = (req: any) => {
  console.log("FN:: getMessageThread");
  return { stat: "success", req };
};

export const getUserMessagesList = (req: any) => {
  console.log("FN:: getUserMessagesList");
  return { stat: "success", req };
};

export const getUserMessagesRequest = (req: any) => {
  console.log("FN:: getUserMessagesRequest");
  return { stat: "success", req };
};

/**
 * Make sure there is only one existing request.
 * @param call
 * @param callback
 */
export const createNewMessageRequest: ServiceFunction<{
  senderId: number;
  recipientTag: string;
  message: string;
}> = async (call, callback) => {
  const { senderId, recipientTag, message } = call.request;

  const recipient = await User.findOne({ where: { tag: recipientTag } });
  if (!recipient)
    return callback({
      code: grpc.status.UNAVAILABLE,
      message: `unfortunately, we can't find ${recipientTag}!`,
    } as ServiceError);

  const existingMessageRequest = await MessageRequest.findOne({
    where: {
      [Op.or]: [
        { senderId: senderId, recipientId: recipient.id },
        { senderId: recipient.id, recipientId: senderId },
      ],
    },
    order: [["createdAt", "DESC"]],
  });

  const success = {
    status: "success",
    message: `A message request has been sent to ${recipientTag}`,
  };

  if (!existingMessageRequest) {
    const newMessageRequest = await MessageRequest.create({
      senderId: senderId,
      recipientId: recipient.id,
      status: MessageRequestStatus.pending,
      threadId: createThread(new ChatMessage(senderId, recipient.id, message)),
    });
    if (!newMessageRequest)
      return callback({
        code: grpc.status.UNKNOWN,
        message: `unknown error occurred while sending message request.`,
      } as ServiceError);

    return callback(null, success);
  }

  if (existingMessageRequest.isAcceptedRequest) {
    new Chat(existingMessageRequest.threadId).sendMessage(
      new ChatMessage(senderId, recipient.id, message)
    );
    return callback(null, success);
  }

  return callback({
    code: grpc.status.UNAVAILABLE,
    message: `unfortunately, ${recipientTag} does not let you message them`,
  } as ServiceError);
};
