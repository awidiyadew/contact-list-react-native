import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Button from './Button';

export default class ContactFilter extends Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        <TextInput
          style={styles.filterInput}
          placeholder='Search here'
        />
        <Button
          onPress={() => {}}
          value={'Search'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#dddddd50'
  },
  filterInput: {
    flex: 1,
    height: 35,
    borderRadius: 5,
    backgroundColor: 'white',
    marginLeft: 3,
    marginRight: 3,
    paddingLeft: 5,
    paddingRight: 5
  }
});