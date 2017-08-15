import { INCREMENT, DECREMENT, RESET } from '../constants/index';

export const funcIncrement = () => {
  return {
    type: INCREMENT
  }
};

export const funcDecrement = () => {
  return {
      type: DECREMENT
  }
};

export const funcReset = () => {
  return {
    type: RESET
  }
};
