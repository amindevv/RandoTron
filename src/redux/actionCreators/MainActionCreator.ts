import {Dispatch} from 'react';
import {ActionMain, ActionRandomize} from '../../types/MainActions';
import {RootState} from '../../types/MainState';

export const generateRandom = () => {
  return (dispatch: Dispatch<ActionMain>, getState: () => RootState) => {
    const randoms = getState().main.randoms;

    const action: ActionRandomize = {
      type: 'RANDOMIZE',
      randoms: randoms.map(() => Math.floor(Math.random() * 100) + 1),
    };

    dispatch(action);
  };
};
