import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, Alert, View, ImageBackgroud, ScrollView, SafeAreaView, Animated } from 'react-native';



export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      
      <ScrollView>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#00FF7F"
        />
      <Text style={styles.title}>Chácara Guarujá</Text>
      <Text style={styles.textoCenter}>Algum texto em baixo</Text>
      <View style={{ width: 100, flexDirection:"row", alignItems:"center"}}>
      <Button
      onPress={() => Alert.alert('Você apertou o botão.')}
      title="Salvar"
      color="#00FF7F"
      />
      <Button
      onPress={() => Alert.alert('Você apertou outro botão.')}
      title="Cancelar"
      color="#DC143C"
      /></View>
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
