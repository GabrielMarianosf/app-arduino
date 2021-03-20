import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, Alert, View, ImageBackgroud, ScrollView, SafeAreaView, Animated } from 'react-native';  

import Routes from './assets/routes';

export default function App() {

  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
      
    
  );
}

const createTwoButtonAlert = () =>
Alert.alert(
  "Excluir Sensor",
  "Tem certeza que deseja excluir o sensor selecionado?",
  [
    {
      text: "Não",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "Sim", onPress: () => console.log("OK Pressed") }
  ]
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  fundo: {
    marginHorizontal: 20,
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#7FFF00',
    borderRadius: 3
  },

  texto: {
    color: 'black',
    alignItems: 'center'
  },

  textoCenter: {
    color: 'black',
    alignItems: 'center',
    textAlign: 'center'
  },

  title: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  }
});
