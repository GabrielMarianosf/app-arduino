import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';


import Routes from './assets/routes';


const App = () => {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>

  );
}

export default App;
