import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

const Drawer = createDrawerNavigator();

import Config from './pages/config';
import { Routes2, Routes3 } from './routes2';

const Routes = () => {
  return (

    <Drawer.Navigator drawerType={'slide'}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {},
        drawerIcon: {}

      }}
      drawerStyle={{

      }}>
      <Drawer.Screen name="Página Inicial" component={Routes2} />
      <Drawer.Screen name="Configurações" component={Routes3} />
    </Drawer.Navigator>

  );
}

export default Routes;