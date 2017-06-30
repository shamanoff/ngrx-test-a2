import {Action} from '@ngrx/store';
// import {StoreData} from '../store/store-data';


export const LOAD_MESSAGES_ACTION = 'LOAD_MESSAGES_ACTION';

export class LoadMessagesAction implements Action {

  readonly type = LOAD_MESSAGES_ACTION;
  constructor(public payload ) {}
}
