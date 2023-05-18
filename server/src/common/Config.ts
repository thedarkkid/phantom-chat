import { GenericReadonlyObject } from "./typing";
import * as path from "path";

export const Config: GenericReadonlyObject = {
  auth: {
    secret: process.env.JWT_SECRET ?? "phantom-jwt-scete120",
    saltRounds: process.env.BCRYPT_SALT_ROUNDS ?? 10,
    expiration: process.env.JWT_EXPIRATION ?? "7d",
  },
  sanitizer: {
    options: {
      allowedTags: [],
      allowedAttributes: {},
      disallowedTagsMode: "recursiveEscape",
    },
  },
  storage: {
    chat: path.join(__dirname, "../../", "chat"),
  },
};

export default Config;
