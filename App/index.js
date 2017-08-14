import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/index';
import Counter from './containers/Counter';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
