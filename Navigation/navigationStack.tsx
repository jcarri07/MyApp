import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

export default function navigationStack() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen  name="Login" component={Login} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
})