import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, Alert, Switch, View, ImageBackgroud, ScrollView, SafeAreaView, Animated } from 'react-native';
import NavBar from 'react-native-nav';


export default function Home({ navigation }) {

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

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    


    return (

        <SafeAreaView style={styles.container}>

            <ScrollView>
                
                <StatusBar
                    barStyle="light-content"
                    hidden={false}
                    backgroundColor="#00FF7F"
                />
                <Text></Text>
                <Text style={styles.title}>Chácara Guarujá</Text>
                <Text style={styles.textoCenter}>Gerenciamento de Sensores</Text>
                <Text>{"\n"}</Text>
                <View style={styles.container}>
                    <Text style={styles.texto}> Atualização Automática:</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <Text>{"\n"}</Text>
                <Text style={styles.texto}> Sensor 1: [status]</Text>
                <Text style={styles.texto}> Local: [local]</Text>
                <Text style={styles.texto}> Nível: [nn%]</Text>
                <Text style={styles.texto}> Ult. Atualização: [dd/mm/aa - hh:mm]</Text>
                <View style={{ alignItems: "center", flexDirection: "row" }}>
                    <Button
                        onPress={() => Alert.alert('Tem certeza?')}
                        title="Editar"
                        color="#00FF7F"
                        width="10px"
                    />
                    <Button
                        onPress={() => navigation.openDrawer()}
                        title="Excluir"
                        color="#DC143C"
                        width="10px"
                    /></View>

                <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}
                    {"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                <View style={{ alignItems: "center" }}>
                    <Button
                        onPress={() => Alert.alert('Tem certeza?')}
                        title="Adicionar Sensor"
                        color="#00FF7F"
                        width="10px"
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

