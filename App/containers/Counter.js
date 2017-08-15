import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterView from './CounterView';
import { funcIncrement, funcDecrement, funcReset } from '../actions/index';

const mapStateToProps = state => ({
  count: state.counter
});

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(funcIncrement())
  },
  decrement: () => {
    dispatch(funcDecrement())
  },
  reset: () => {
    dispatch(funcReset())
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterView);
