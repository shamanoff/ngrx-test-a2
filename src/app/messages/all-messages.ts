
import {Message} from "./message";

export interface AllMessages {

  messages: Message[];
}

export const INITIAL_ALLMESSAGES_STATE: AllMessages = {
  messages: []
};
