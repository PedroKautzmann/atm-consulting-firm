import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.navBar}>
        <Text style={styles.text}>ATM Consultoria</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
    paddingTop: 5,
  },
});
