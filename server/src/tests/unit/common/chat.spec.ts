import { randomHexString } from "../../../common/String";
import { Chat, ChatMessage } from "../../../common/Chat";

describe("Test chat", () => {
  const thread_id = `test_${randomHexString(16)}`;
  test("chat can send message", () => {
    for (let i = 0; i <= 5; i++) {
      new Chat(thread_id).sendMessage(
        new ChatMessage(123 as number, 456, randomHexString(25))
      );
    }
  });
  //TODO:pull file from path and search it for messages;
});
