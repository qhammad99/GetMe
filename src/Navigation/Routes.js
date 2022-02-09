import React from 'react';
import {View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../Screens/OnBoarding/OnBoarding';
import MainScreen from '../Screens/MainScreen/MainScreen';
import Login from '../Screens/Login/Login';

const Stack = createNativeStackNavigator();

const Routes = (props) => {

  return(
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown:false }}
        />

        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown:false}}
        />
        
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
  );
};

export default Routes;