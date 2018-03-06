import React, { Component } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import ContactItem from './ContactsItem';

/**
 * Showing list of contacts
 */
export default class ContactsList extends Component {
  _generateTransactionItem({item}) {
    return <ContactItem {...item}/>
  }

  _divider = () => <View style={{ height: 1, backgroundColor: 'lightgrey' }}/>;

  render() {
    const { contacts } = this.props;
    return (
      <FlatList
        data={contacts}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={this._divider}
        renderItem={this._generateTransactionItem}
      />
    );
  }
}