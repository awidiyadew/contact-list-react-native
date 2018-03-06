import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import Button from './Button';
import PropType from 'prop-types';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      emailL: ''
    };
    this._saveContact = this._saveContact.bind(this);
    this._onChangeName = this._onChangeName.bind(this);
    this._onChangeEmail = this._onChangeEmail.bind(this);
  }

  _onChangeEmail(e) {
    const { value } = e.target;
    this.setState({ email: value });
  }

  _onChangeName(e) {
    const { value } = e.target;
    this.setState({ name: value });
  }

  _saveContact() {
    const { onSaveContact } = this.props;
    const { name, email } = this.state;
    onSaveContact(name, email);
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <TextInput
          style={styles.input}
          placeholder='Name'
          autoCorrection={false}
          onChange={this._onChangeName}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCorrection={false}
          onChange={this._onChangeEmail}
        />
        <Button
          onPress={this._saveContact}
          value='Save'
        />
      </View>
    );
  }
}

ContactForm.propType = {
  onSaveContact: PropType.func.isRequired
};

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
