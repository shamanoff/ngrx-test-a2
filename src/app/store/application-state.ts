import {StoreData, INITIAL_STOREDATA_STATE} from './store-data';


export interface ApplicationState {

  storeData: StoreData;
}

export const INITIAL_APP_STATE: ApplicationState = {

  storeData: INITIAL_STOREDATA_STATE
};
