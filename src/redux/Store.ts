import {applyMiddleware} from '@reduxjs/toolkit';
import {createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import MainReducer from './reducers/MainReducer';

const combinedReducers = combineReducers({
  main: MainReducer,
});

export const configureStore = createStore(
  combinedReducers,
  applyMiddleware(thunk),
);
