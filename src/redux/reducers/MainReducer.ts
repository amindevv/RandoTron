import { ActionMain } from '../../types/MainActions';
import { MainState } from '../../types/MainState';
import { generateRandomArray } from '../../utils/Random';

const initialState: MainState = {
  randoms: generateRandomArray(),
};

const MainReducer = (
  state: MainState = initialState,
  action: ActionMain,
): MainState => {
  switch (action.type) {
    case 'RANDOMIZE':
      return {
        ...state,
        randoms: action.randoms,
      };
    default:
      return initialState;
  }
};

export default MainReducer;
