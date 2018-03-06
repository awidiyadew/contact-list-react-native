/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ContactList from './src/components/ContactsList';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {name: 'DP1', email: 'dp@mail.com'},
        {name: 'DP2', email:'dp@mail.com'},
        {name: 'DP3', email:'dp@mail.com'}
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ContactList contacts={this.state.contacts}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'column'
  }
});
