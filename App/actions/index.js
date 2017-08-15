// Action Creators

import { ASYNC_INCREMENT, INCREMENT, DECREMENT, RESET } from '../constants/index';

export const funcAsyncIncrement = () => {
  return {
    type: ASYNC_INCREMENT
  }
};

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
