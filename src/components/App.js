/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
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

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ContactFilter />
        <ContactList />
        <ContactForm />
      </View>
    </Provider>
  );
}
