/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ContactList from './ContactsList';
import ContactForm from './ContactForm';
import ContactFilter from './ContactFilter';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      contacts: [
        { name: 'DP1', email: 'dp@mail.com' },
        { name: 'DP2', email: 'dp@mail.com' },
        { name: 'DP3', email: 'dp@mail.com' },
        { name: 'DP4', email: 'dp@mail.com' },
        { name: 'DP5', email: 'dp@mail.com' },
        { name: 'DP6', email: 'dp@mail.com' },
        { name: 'DP6', email: 'dp@mail.com' },
        { name: 'DP6', email: 'dp@mail.com' },
        { name: 'DP6', email: 'dp@mail.com' },
        { name: 'DP6', email: 'dp@mail.com' },
        { name: 'DP6', email: 'dp@mail.com' },
        { name: 'DP7', email: 'dp@mail.com' }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ContactFilter/>
        <ContactList contacts={this.state.contacts}/>
        <ContactForm/>
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
