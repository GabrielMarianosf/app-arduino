import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>

        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#F0FFF0"
          translucent={false}
        />
        <View style={styles.fundo}>
          <Text style={styles.texto}>Teste</Text>
        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFF0',
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
