import React from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const companyImage = require('../imgs/detalhe_empresa.png');

export function navigationOptionsCompany({navigation}) {
  return {
    headerStyle: {backgroundColor: '#EC7148'},
  };
}

const Company = () => (
  <SafeAreaView>
    <StatusBar backgroundColor="#EC7148" />
    <View style={styles.companyDetails}>
      <Image source={companyImage} />
      <Text style={styles.textCompany}>A Empresa</Text>
    </View>

    <View style={styles.information}>
      <Text style={styles.textInformation}>
        Lorem ipsum dolorem sit amet, dolorem sit amet ipsum dolorem sit
      </Text>
    </View>
  </SafeAreaView>
);

export default Company;

const styles = StyleSheet.create({
  companyDetails: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCompany: {
    color: '#EC7148',
    fontSize: 32,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  information: {
    padding: 20,
  },
  textInformation: {
    color: '#EC7148',
    fontSize: 18,
    marginTop: 5,
  },
});
