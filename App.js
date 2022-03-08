/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import MainContainer from './src/components/main_container';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MainContainer />
    </SafeAreaView>
  );
};

export default App;
