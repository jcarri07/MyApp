import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import Settings from '../screens/Settings';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#0F85CD',
        headerShown: false,
        tabBarStyle: {
            height: '8%',
        },
        tabBarIcon: ({focused, color}) => {
          let iconName = 'Home';
          switch (route.name) {
            case 'Inicio':
              iconName = 'home-sharp';
              color = focused ? '#0F85CD' : '#B3B5B6';
              break;
            case 'Notificaciones':
              iconName = 'notifications';
              color = focused ? '#0F85CD' : '#B3B5B6';
              break;
            case 'Perfil':
              iconName = 'person-circle-outline';
              color = focused ? '#0F85CD' : '#B3B5B6';
              break;
            case 'Ajustes':
              iconName = 'settings';
              color = focused ? '#0F85CD' : '#B3B5B6';
              break;
          }
          return (<Icon name={iconName} size={25} color={color} /> );
        },
      })}
      >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="Notificaciones" component={NotificationScreen} />
      <Tab.Screen name="Ajustes" component={Settings} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({})