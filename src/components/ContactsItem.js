import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

/**
 * Showing contact item
 */
export default class ContactItem extends Component {
  render() {
    const {name, email} = this.props;
    return (
      <TouchableOpacity
        style={styles.containerRoot}>
        <View style={styles.containerImage}>
          <Image source={require('./icon.png')}
                 style={styles.contactImage} />
        </View>
        <View style={styles.containerContact}>
          <Text style={styles.contactName}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerRoot: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 60,
  },
  containerContact: {
    flex: 4,
    padding: 8,
    flexDirection: 'column',
  },
  containerImage: {
    width: 80,
    height: 80,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingRight: 8,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  contactImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
  }
});