import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default class CounterView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="INCREMENT"
          onPress={this.props.increment}/>
        <Text
          style={styles.counter}
          onPress={this.props.reset}>
          {this.props.count}
        </Text>
        <Button
          title="DECREMENT"
          onPress={this.props.decrement}/>
      </View>
    );
  }
}
