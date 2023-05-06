import {
  getMessageThread,
  getUserMessagesList,
  getUserMessagesRequest,
} from "../Messages";
import { ServiceFunctionObject } from "../../common/typing";

export const services: ServiceFunctionObject = {
  getMessageThread,
  getUserMessagesList,
  getUserMessagesRequest,
};
