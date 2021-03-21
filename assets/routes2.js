import React from 'react';
import { createStackNavigator,  } from '@react-navigation/stack';
import { Image, TouchableHighlight } from 'react-native';

const Stack = createStackNavigator();

import Home from './pages/home';
import Config from './pages/config';

const Routes2 = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title:'Chácara Guarujá',
                    headerStyle: {
                        backgroundColor: '#00FF7F',
                    },
                    headerTintColor: '#DC143C',
                    headerLeft: () => (
                        <TouchableHighlight onPress={() => navigation.openDrawer()}>
                        <Image
                        source={require('../assets/android/drawable-xxxhdpi/hamburguer.png')}
                        />
                        </TouchableHighlight>
                      ),
                }}
            />
            <Stack.Screen name="Config" component={Config} 
            options={{
                title: 'Configuração',
                headerStyle: {
                    backgroundColor: '#00FF7F',
                },
                headerTintColor: '#DC143C',
            }} />
        </Stack.Navigator>
    );
}

const Routes3 = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Config"
                component={Config}
                options={{
                    title: 'Configurações',
                    headerStyle: {
                        backgroundColor: '#00FF7F',
                    },
                    headerTintColor: 'red',
                }}
            />
        </Stack.Navigator>
    );
}

export { Routes2, Routes3 };