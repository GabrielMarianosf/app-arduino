import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, Alert, View, ImageBackgroud, ScrollView, SafeAreaView, Animated } from 'react-native';

import Routes from './assets/routes';

export default function App() {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}




