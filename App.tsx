import { View, StyleSheet, Text, Dimensions } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './Navigation/navigationStack';

const widthScreen = Dimensions.get('window').width

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    width: widthScreen,
  },
});