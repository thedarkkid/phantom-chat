import { ServiceFunction } from "../common/typing";

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

export const createNewMessageRequest: ServiceFunction<{
  senderId: number;
  recipientId: number;
  message: string;
}> = async (call, callback) => {
  const { senderId, recipientId, message } = call.request;
  callback(null, { senderId, message, status: "success" });
};
