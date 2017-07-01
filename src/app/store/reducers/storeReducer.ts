import {Action} from '@ngrx/store';
import {ApplicationState, INITIAL_APP_STATE} from '../application-state';
import {LOAD_MESSAGES_ACTION, LoadMessagesAction} from '../../actions/actions';
// import {StoreData} from '../store-data';
// import * as _ from 'lodash';


export function storeReducer(state: ApplicationState = INITIAL_APP_STATE,
                             action: Action): ApplicationState {
  switch (action.type) {
    case LOAD_MESSAGES_ACTION:
      return handleLoadMessagesAction(state, <any>action);
    default:
      return state;
  }
}

function handleLoadMessagesAction ( state: ApplicationState, action: LoadMessagesAction): ApplicationState {

  const newState: ApplicationState = Object.assign({}, state);
 const dataM = action.payload;
// console.log('JSON ' + JSON.stringify(dataM));
 newState.storeData = dataM;
 return newState;
}
