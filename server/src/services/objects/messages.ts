import {
  getMessageThread,
  getUserMessagesList,
  getUserMessagesRequest,
} from "../Messages";
import { ServiceFunctionObject } from "../../typing";

export const services: ServiceFunctionObject = {
  getMessageThread,
  getUserMessagesList,
  getUserMessagesRequest,
};
