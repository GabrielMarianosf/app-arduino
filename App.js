import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Animated } from 'react-native';



export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="yellow"
        />


        
      </ScrollView>
    </SafeAreaView>
  );
}

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

  title: {
    fontWeight: 'bold',
    color: 'black'
  }
});
