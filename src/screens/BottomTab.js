import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import BookOn from './BookOn';

const tab = createBottomTabNavigator();
const stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />
      <stack.Screen
        name="BookOn"
        options={{headerShown: false}}
        component={BookOn}
      />
    </stack.Navigator>
  );
};
const BottomTab = () => {
  return (
    <tab.Navigator>
      <tab.Screen
        name="DashBoard"
        component={HomeStack}
        options={{headerShown: false}}
      />
    </tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
