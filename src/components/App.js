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
import PropTypes from 'prop-types';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = {
      contacts: this.props.contacts,
      filterKeyword: ''
    };
    this.onSaveContact = this.onSaveContact.bind(this);
    this.onFilterContact = this.onFilterContact.bind(this);
  }

  onSaveContact(name, email) {
    this.setState({
      contacts: [{ name, email }, ...this.state.contacts]
    });
  }

  onFilterContact(keyword) {
    this.setState({ filterKeyword: keyword });
  }

  filteredContact() {
    const { contacts, filterKeyword } = this.state;
    const keywordLowerCase = filterKeyword.toLowerCase();
    return contacts.filter((contact) => {
      const contactNameLowerCase = contact.name.toLowerCase();
      return contactNameLowerCase.includes(keywordLowerCase);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ContactFilter onFilterContact={this.onFilterContact}/>
        <ContactList contacts={this.filteredContact()}/>
        <ContactForm onSaveContact={this.onSaveContact}/>
      </View>
    );
  }
}

const contact = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
});

App.propTypes = {
 contacts: PropTypes.arrayOf(contact)
};

App.defaultProps = {
  contacts: [
    { name: 'DP1', email: 'dp@mail.com' },
    { name: 'DP2', email: 'dp@mail.com' },
    { name: 'DP3', email: 'dp@mail.com' },
    { name: 'DP4', email: 'dp@mail.com' },
    { name: 'DP5', email: 'dp@mail.com' },
    { name: 'DP6', email: 'dp@mail.com' },
    { name: 'DP7', email: 'dp@mail.com' },
    { name: 'DP8', email: 'dp@mail.com' },
    { name: 'DP9', email: 'dp@mail.com' },
    { name: 'DP10', email: 'dp@mail.com' }
  ]
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'column'
  }
});
