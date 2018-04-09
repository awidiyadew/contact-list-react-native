import React from 'react';
import { FlatList } from 'react-native';
import ContactItem from './ContactsItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Showing list of contacts
 */
const ContactsList = ({ contacts }) => {
  return (
    <FlatList
      data={contacts}
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

const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(ContactsList);
