import {Action} from '@ngrx/store';
import {AllMessages} from '../messages/all-messages';


export const LOAD_MESSAGES_ACTION = 'LOAD_MESSAGES_ACTION';

export class LoadMessages implements Action {
  readonly type = LOAD_MESSAGES_ACTION;
  constructor(public payload?: AllMessages) {}
}
