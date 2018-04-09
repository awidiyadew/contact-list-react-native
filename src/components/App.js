/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from '../reducers';
import ContactList from './ContactsList';
import ContactForm from './ContactForm';
import ContactFilter from './ContactFilter';
import PropTypes from 'prop-types';

type Props = {};
const store = createStore(rootReducers);

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    //console.disableYellowBox = true;
    this.state = {
      contacts: this.props.contacts,
      filterKeyword: ''
    };
    this.onSaveContact = this.onSaveContact.bind(this);
    this.onFilterContact = this.onFilterContact.bind(this);
  }

  onSaveContact(name, email) {
    this.setState({
      contacts: [{name, email}, ...this.state.contacts]
    });
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
    console.log('store app', store);
    console.log('store app state', store.getState());
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ContactFilter onFilterContact={this.onFilterContact} />
          <ContactList/>
          <ContactForm onSaveContact={this.onSaveContact} />
        </View>
      </Provider>
    );
  }
}

const contact = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
});

App.propTypes = {
  contacts: PropTypes.arrayOf(contact)
};

// App.defaultProps = {
//   contacts: [
//     {name: 'Dhivya', email: 'raj.dhivya@gmail.com'},
//     {name: 'DP', email: 'hsdpal@gmail.com'},
//     {name: 'Neel', email: 'vascodagama1@gmail.com'},
//     {name: 'Cheetan', email: 'mail@chetankothari.in'},
//     {name: 'Dewa', email: 'awidiya.dewa@gmail.com'},
//     {name: 'Kim', email: 'mail@gmail.com'},
//     {name: 'Other Kim', email: 'mail@gmail.com'},
//     {name: 'Another Kim', email: 'mail@gmail.com'},
//     {name: 'Friend of Kim', email: 'mail@gmail.com'},
//     {name: 'Mother of Kim', email: 'mail@gmail.com'},
//     {name: 'Father of Kim', email: 'mail@gmail.com'}
//   ]
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#454353'
  }
});
