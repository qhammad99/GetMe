import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';

import Routes from './src/Navigation/Routes';

const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
};

export default App;
