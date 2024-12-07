/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import ApiCall from './src/screens/ApiCall';

function App(): React.JSX.Element {
  return (
    <>
      <ApiCall />
    </>
  );
}

const styles = StyleSheet.create({});

export default App;
