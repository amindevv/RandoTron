import {createStore, combineReducers} from 'redux';
import MainReducer from './reducers/MainReducer';

const combinedReducers = combineReducers({
  main: MainReducer,
});

export const configureStore = createStore(combinedReducers);
