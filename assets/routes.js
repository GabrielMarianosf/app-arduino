import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import NavBar from 'react-native-nav';
import {ScrollView} from 'react-native';

const Drawer = createDrawerNavigator();

import Home from './pages/home';
import Config from './pages/config';
import { View } from 'react-native';
import { Text } from 'react-native';

export default function Routes() {
    return (
      
      <Drawer.Navigator drawerType={'slide'} 
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {  },
        drawerIcon: { }

      }}
      drawerStyle={{

      }}>
        
        <Drawer.Screen name="Página Inicial" component={Home} />
        <Drawer.Screen name="Configurações" component={Config} />
        
        
        
        
      </Drawer.Navigator>
      
    );
}