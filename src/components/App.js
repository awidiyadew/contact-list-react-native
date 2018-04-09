/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from '../reducers';
import ContactList from './ContactsList';
import ContactForm from './ContactForm';
import ContactFilter from './ContactFilter';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#454353'
  }
});

const store = createStore(rootReducers);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: this.props.contacts,
      filterKeyword: ''
    };
    this.onFilterContact = this.onFilterContact.bind(this);
  }

  onFilterContact(keyword) {
    this.setState({filterKeyword: keyword});
  }

  filteredContact() {
    const {contacts, filterKeyword} = this.state;
    const keywordLowerCase = filterKeyword.toLowerCase();
    return contacts.filter((contact) => {
      const contactNameLowerCase = contact.name.toLowerCase();
      return contactNameLowerCase.includes(keywordLowerCase);
    });
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ContactFilter onFilterContact={this.onFilterContact} />
          <ContactList />
          <ContactForm />
        </View>
      </Provider>
    );
  }
}
