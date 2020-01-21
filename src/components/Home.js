import React, {Component} from 'react';

import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Button,
} from 'react-native';

import NavBar from './NavBar';
import {TouchableHighlight} from 'react-native-gesture-handler';

const logo = require('../imgs/logo.png');
const customer = require('../imgs/menu_cliente.png');
const contact = require('../imgs/menu_contato.png');
const company = require('../imgs/menu_empresa.png');
const service = require('../imgs/menu_servico.png');

export default class Home extends Component {
  // static navigationOptions = {
  //   headerTitle: () => <NavBar />,
  // };

  render() {
    return (
      <>
        <StatusBar backgroundColor="#CCC" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          />

          <View style={styles.logo}>
            <Image source={logo} />
          </View>

          <View style={styles.menu}>
            <TouchableHighlight
              activeOpacity={0.9}
              onPress={() => {
                this.props.navigation.navigate('Customers');
              }}>
              <Image source={customer} />
            </TouchableHighlight>

            <TouchableHighlight
              activeOpacity={0.9}
              onPress={() => {
                this.props.navigation.navigate('Contact');
              }}>
              <Image source={contact} />
            </TouchableHighlight>
          </View>

          <View style={styles.menu}>
            <TouchableHighlight
              activeOpacity={0.9}
              onPress={() => {
                this.props.navigation.navigate('Company');
              }}>
              <Image source={company} />
            </TouchableHighlight>

            <TouchableHighlight
              activeOpacity={0.9}
              onPress={() => {
                this.props.navigation.navigate('Services');
              }}>
              <Image source={service} />
            </TouchableHighlight>
          </View>
        </SafeAreaView>
      </>
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
  logo: {
    alignItems: 'center',
    paddingTop: 30,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 40,
    marginTop: 30,
  },
});
