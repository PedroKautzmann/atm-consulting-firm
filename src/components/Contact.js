import React from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const contactImage = require('../imgs/detalhe_contato.png');

export function navigationOptions({navigation}) {
  return {
    headerStyle: {backgroundColor: '#61BD8C'},
  };
}

const Contact = () => (
  <SafeAreaView>
    <StatusBar backgroundColor="#61BD8C" />
    <View style={styles.contactDetails}>
      <Image source={contactImage} />
      <Text style={styles.textContact}>Contatos</Text>
    </View>

    <View style={styles.information}>
      <Text style={styles.textInformation}>TEL: (11) 1234-1234</Text>
      <Text style={styles.textInformation}>CEL: (11) 91234-1234</Text>
      <Text style={styles.textInformation}>
        EMAIL: pedrokautzmann1@gmail.com
      </Text>
    </View>
  </SafeAreaView>
);

export default Contact;

const styles = StyleSheet.create({
  contactDetails: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContact: {
    color: '#61BD8C',
    fontSize: 32,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  information: {
    padding: 20,
  },
  textInformation: {
    color: 'red',
    fontSize: 18,
    marginTop: 5,
  },
});
