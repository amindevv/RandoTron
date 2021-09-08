import {ActionMain} from '../../types/MainActions';
import {MainState} from '../../types/MainState';

const initialState: MainState = {
  randoms: [0, 0, 0],
};

const MainReducer = (
  state: MainState = initialState,
  action: ActionMain,
): MainState => {
  switch (action.type) {
    case 'RANDOMIZE':
      return state;
    default:
      return state;
  }
};

export default MainReducer;
