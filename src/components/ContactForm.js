import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import Button from './Button';

export default class ContactForm extends Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        <TextInput
          style={styles.input}
          placeholder='Name'
          autoCorrection={false}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCorrection={false}
        />
        <Button
          onPress={() => {}}
          value='Save'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    backgroundColor: '#dddddd50',
  },
  input: {
    flex: 2,
    height: 35,
    borderRadius: 5,
    backgroundColor: 'white',
    marginLeft: 3,
    paddingLeft: 5,
    paddingRight: 5,
    marginRight: 3,
  }
});