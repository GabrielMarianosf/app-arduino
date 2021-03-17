import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.fundo}>
        <StatusBar 
          barStyle= "light-content"
          hidden={false}
          backgroundColor="yellow"
          translucent={false}
        />
        <Text style={styles.title}>Titulo</Text>
        <Text style={styles.texto}>Que dahora !!!!</Text>
      </View>

      <View style={styles.fundo}>
        <Text style={styles.title}>Titulo</Text>
        <Text style={styles.texto}>Que dahora !!!!</Text>
      </View>

      <View style={styles.fundo}>
        <Text style={styles.title}>Titulo</Text>
        <Text style={styles.texto}>Que dahora !!!!</Text>
      </View>

      <View style={styles.fundo}>
        <Text style={styles.title}>Titulo</Text>
        <Text style={styles.texto}>Que dahora !!!!</Text>
      </View>
      <View style={styles.fundo}>
        <Text style={styles.title}>Titulo</Text>
        <Text style={styles.texto}>Que dahora !!!!</Text>
      </View>
      <View style={styles.fundo}>
        <Text style={styles.title}>Titulo</Text>
        <Text style={styles.texto}>Que dahora !!!!</Text>
      </View>
      <View style={styles.fundo}>
        <Text style={styles.title}>Titulo</Text>
        <Text style={styles.texto}>Que dahora !!!!</Text>
      </View>
      <View style={styles.fundo}>
        <Text style={styles.title}>Titulo</Text>
        <Text style={styles.texto}>Que dahora !!!!</Text>
      </View>
      <View style={styles.fundo}>
        <Text style={styles.title}>Titulo</Text>
        <Text style={styles.texto}>Que dahora !!!!</Text>
      </View>
      <View style={styles.fundo}>
        <Text style={styles.title}>Titulo</Text>
        <Text style={styles.texto}>Que dahora !!!!</Text>
      </View>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  fundo: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 20,
    marginVertical: 10,
    backgroundColor: 'red',
    borderRadius: 3


  },
  texto: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
    color: 'white'



  }
});
