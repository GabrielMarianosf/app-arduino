import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';

const Drawer = createDrawerNavigator();

import Home from './pages/home';
import Config from './pages/config';

export default function Routes() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Página Inicial" component={Home} />
        <Drawer.Screen name="Configurações" component={Config} />
      </Drawer.Navigator>
    );
}