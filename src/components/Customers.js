import React, {Component} from 'react';

import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  Button,
} from 'react-native';

import NavBar from './NavBar';

const customerImage = require('../imgs/detalhe_cliente.png');
const customer1 = require('../imgs/cliente1.png');
const customer2 = require('../imgs/cliente2.png');

export default class Customers extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#B9C941',
    },
  };

  render() {
    return (
      <>
        <StatusBar backgroundColor="#B9C941" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          />

          {/* <NavBar /> */}

          <View style={styles.customerDetails}>
            <Image source={customerImage} />
            <Text style={styles.textCustomer}>Nossos Clientes</Text>
          </View>

          <View style={styles.customer}>
            <Image source={customer1} />
            <Text style={{paddingLeft: 20}}>Lorem ipsum dolorem</Text>
            <Image style={{marginTop: 50}} source={customer2} />
            <Text style={{paddingLeft: 20}}>Lorem ipsum dolorem</Text>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  customerDetails: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCustomer: {
    color: '#B9C941',
    fontSize: 32,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  customer: {
    padding: 20,
  },
});
