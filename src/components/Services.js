import React from 'react';

import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const servicesImage = require('../imgs/detalhe_servico.png');

export function navigationOptionsServices({navigation}) {
  return {
    headerStyle: {backgroundColor: '#19D1C8'},
  };
}

const Services = () => (
  <SafeAreaView>
    <StatusBar backgroundColor="#19D1C8" />
    <View style={styles.servicesDetails}>
      <Image source={servicesImage} />
      <Text style={styles.textServices}>Nossos Serviços</Text>
    </View>

    <View style={styles.information}>
      <Text style={styles.textInformation}>- Consultoria</Text>
      <Text style={styles.textInformation}>- Processos</Text>
      <Text style={styles.textInformation}>- Acompanhamento de Projetos</Text>
    </View>
  </SafeAreaView>
);

export default Services;

const styles = StyleSheet.create({
  servicesDetails: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textServices: {
    color: '#19D1C8',
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
