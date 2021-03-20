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
      <Text style={styles.textoCenter}>[descrição da tela]</Text>
      <Text style={styles.texto}> Sensor 1: [status]</Text>
      <Text style={styles.texto}> Local: [local]</Text>
      <Text style={styles.texto}> Nível: [nn%]</Text>
      <Text style={styles.texto}> Ult. Atualização: [dd/mm/aa - hh:mm]</Text>
      <View style={{alignItems:"center", flexDirection:"row"}}>
      <Button
      onPress={() => Alert.alert('Tem certeza?')}
      title="Editar"
      color="#00FF7F"
      width="10px"
      />
      <Button
      onPress={createTwoButtonAlert}
      title="Excluir"
      color="#DC143C"
      width="10px"
      />
      </View>
      </ScrollView>
      
    </SafeAreaView>
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
