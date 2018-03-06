import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Button from './Button';
import PropTypes from 'prop-types';

export default class ContactFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
    this._onChangeKeyword = this._onChangeKeyword.bind(this);
    this._onFilterContact = this._onFilterContact.bind(this);
  }

  _onChangeKeyword(keyword) {
    this.setState({ keyword });
  }

  _onFilterContact() {
    const { onFilterContact } = this.props;
    onFilterContact(this.state.keyword);
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <TextInput
          style={styles.filterInput}
          value={this.state.keyword}
          placeholder='Search here'
          onChangeText={this._onChangeKeyword}
          onSubmitEditing={this._onFilterContact}
        />
        <Button
          onPress={this._onFilterContact}
          value={'Search'}
        />
      </View>
    );
  }
}

ContactFilter.propTypes = {
  onFilterContact: PropTypes.func.isRequired
};

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