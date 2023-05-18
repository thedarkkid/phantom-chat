import { randomHexString } from "./String";
import { JSONStorage } from "node-localstorage";
import Config from "./Config";

// Careful of storage cuz, files might delete depending on container.
const CHAT_STORE = new JSONStorage(`${Config.storage.chat}`);
export class ChatMessage {
  constructor(
    senderId: number,
    recipientId: number,
    message = "",
    timestamp = Date.now()
  ) {
    this.senderId = senderId;
    this.recipientId = recipientId;
    this.message = message;
    this.timestamp = timestamp;
    this.id = this.timestamp + "_" + randomHexString(5);
  }

  id: string;
  senderId: number;
  recipientId: number;
  message: string;
  timestamp: number;
}

export class Chat {
  constructor(threadId) {
    this.threadId = threadId;
  }
  threadId: string;

  sendMessage(message: ChatMessage) {
    return this.sendSilentMessage(message);
  }

  sendSilentMessage(message: ChatMessage): boolean {
    if (!CHAT_STORE.getItem(this.threadId)) {
      CHAT_STORE.setItem(this.threadId, [message]);
      return true;
    }
    const chats: ChatMessage[] = CHAT_STORE.getItem(this.threadId);
    chats.push(message);
    CHAT_STORE.setItem(this.threadId, chats);
    return true;
  }
}

export const createThread = (message: ChatMessage): string => {
  const threadId = `${randomHexString(5)}-${message.timestamp}-${
    message.senderId
  }_${message.recipientId}`;
  const chat = new Chat(threadId);
  chat.sendSilentMessage(message);
  return threadId;
};
