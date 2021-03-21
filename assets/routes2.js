import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './pages/home';
import Config from './pages/config';

const Routes2 = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Chácara Guarujá',
                    headerStyle: {
                        backgroundColor: '#00FF7F',
                    },
                    headerTintColor: 'red',
                }}

            />
            <Stack.Screen name="Config" component={Config} 
            options={{
                title: 'Configuração',
                headerStyle: {
                    backgroundColor: '#00FF7F',
                },
                headerTintColor: 'red',
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