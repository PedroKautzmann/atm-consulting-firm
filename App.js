import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Routes from './src/index';

const App: () => React$Node = () => {
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
