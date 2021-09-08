import {Dispatch} from 'react';
import {ActionMain, ActionRandomize} from '../../types/MainActions';
import {RootState} from '../../types/MainState';
import { generateRandomArray } from '../../utils/Random';

export const generateRandom = () => {
  return (dispatch: Dispatch<ActionMain>, getState: () => RootState) => {

    const action: ActionRandomize = {
      type: 'RANDOMIZE',
      randoms: generateRandomArray(),
    };

    dispatch(action);
  };
};
