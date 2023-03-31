import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './Login';
import BottomTab from './BottomTab';

const stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <stack.Screen
          name="BottomTab"
          options={{headerShown: false}}
          component={BottomTab}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
