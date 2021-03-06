import {storeReducer} from './store/reducers/storeReducer';
import {combineReducers} from '@ngrx/store';
// import {storeFreeze} from 'ngrx-store-freeze';
import {compose} from '@ngrx/core/compose';
export const reducer = compose(combineReducers)({ storeReducer});
