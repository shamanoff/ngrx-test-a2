import {AllMessages, INITIAL_ALLMESSAGES_STATE} from "../messages/all-messages";


export interface ApplicationState {

  allMessages: AllMessages;
}

export const INITIAL_APP_STATE: ApplicationState = {
  allMessages: INITIAL_ALLMESSAGES_STATE
};
