// import {StoreData, INITIAL_STOREDATA_STATE} from './store-data';
import {Message} from '../model/message';


export interface ApplicationState {

  messages: Message[];
}

export const INITIAL_APP_STATE: ApplicationState = {
  messages: []
  // storeData: INITIAL_STOREDATA_STATE
};
