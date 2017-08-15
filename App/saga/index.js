import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';

import { ASYNC_INCREMENT, INCREMENT } from '../constants/index';

function* helloSaga() {
  console.log('Hello, Redux Saga');
}

function* asyncIncrement() {
  yield delay(1000);
  console.log('exec increment');
  yield put({
    type: INCREMENT
  })
}

function* watchAsyncIncrement() {
  console.log('watching async increment');
  yield takeEvery(ASYNC_INCREMENT, asyncIncrement);
}

const rootSaga = function* rootSaga() {
  console.log('exec rootSaga');
  yield all([
    helloSaga(),
    watchAsyncIncrement()
  ]);
}

export default rootSaga;
