import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text} from 'react-native';

export default function Config() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Chácara Guarujá</Text>
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