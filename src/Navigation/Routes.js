import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../Screens/OnBoarding/OnBoarding';
import MainScreen from '../Screens/MainScreen/MainScreen';
import Login from '../Screens/Login/Login';
import NameEmail from '../Screens/Signup/NameEmail/NameEmail';
import Password from '../Screens/Signup/Password/Password';

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

        <Stack.Screen
          name="NameEmail"
          component={NameEmail}
          options={{headerShown:false}}
        />

        <Stack.Screen
          name="Password"
          component={Password}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
  );
};

export default Routes;