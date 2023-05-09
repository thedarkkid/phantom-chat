import Sanitizer from "sanitize-html";
import Config from "./Config";

export const randomHexString = (size: number): string =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

export const sanitize = (input: string, options = Config.sanitizer.options) =>
  Sanitizer(input, options).toString().trim();
