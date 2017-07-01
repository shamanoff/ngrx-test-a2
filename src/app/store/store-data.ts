
import {Message} from '../model/message';

export interface StoreData {

  messages: Message[];
}

export const INITIAL_STOREDATA_STATE: StoreData = {
  messages: []
};
