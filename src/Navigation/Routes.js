import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../Screens/OnBoarding/OnBoarding';
import MainScreen from '../Screens/MainScreen/MainScreen';
import Login from '../Screens/Login/Login';
import NameEmail from '../Screens/Signup/NameEmail/NameEmail';
import Password from '../Screens/Signup/Password/Password';
import Landing from '../Screens/UserScreens/Landing/Landing';
import Verification from '../Screens/Signup/Verification/Verification';
import ChangeEmail from '../Screens/Signup/ChangeEmail/ChangeEmail';

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

        <Stack.Screen
          name="Verification"
          component={Verification}
        />

        <Stack.Screen
          name="ChangeEmail"
          component={ChangeEmail}
          options={{title:"Change Email"}}
        />

        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
  );
};

export default Routes;