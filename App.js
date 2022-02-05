import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Test from './src/Components/Test';

import Routes from './src/Navigation/Routes';

const App = () => {

  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
};

export default App;
