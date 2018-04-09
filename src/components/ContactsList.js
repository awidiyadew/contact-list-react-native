import React from 'react';
import { FlatList } from 'react-native';
import ContactItem from './ContactsItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Showing list of contacts
 */
const ContactsList = ({ visibleContact }) => {
  return (
    <FlatList
      data={visibleContact}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (<ContactItem {...item}/>)}
    />
  );
};

const contact = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
});

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(contact)
};

const filterContact = (contacts, filterKeyword) => {
  const keywordLowerCase = filterKeyword.toLowerCase();
  return contacts.filter((contact) => {
    const contactNameLowerCase = contact.name.toLowerCase();
    return contactNameLowerCase.includes(keywordLowerCase);
  });
};

const mapStateToProps = state => ({
  visibleContact: filterContact(state.contacts, state.filterKeyword),
});

export default connect(mapStateToProps)(ContactsList);
