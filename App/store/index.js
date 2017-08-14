import { createStore } from 'redux';
import reducers from '../reducers/index';

export default function configureStore() {
  let store = createStore(reducers);
  return store;
}
