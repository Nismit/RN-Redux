// Containers - divid states and actions

import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterView from './CounterView';
import { funcAsyncIncrement, funcIncrement, funcDecrement, funcReset } from '../actions/index';

const mapStateToProps = state => ({
  count: state.counter
});

const mapDispatchToProps = dispatch => ({
  asyncIncrement: () => {
    dispatch(funcAsyncIncrement())
  },
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
