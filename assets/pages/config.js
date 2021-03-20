import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, TextInput, ScrollView, View, Button, Alert, Switch } from 'react-native';
import NavBar from 'react-native-nav'

export default function Config() {

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

<NavBar>
  
</NavBar>

        <Text style={styles.title}>Chácara Guarujá</Text>
        <Text style={styles.textoCenter}>Configurações</Text>
        <Text>{"\n"}</Text>
        <Text style={styles.titleEsq}> Conexão</Text>
        <Text></Text>
        <Text> IP: </Text>
        <TextInput
        style={styles.input}
        placeholder=" Ex.: 123.456.78.90"
        />
        <Text></Text>
        <Text> Porta: </Text>
        <TextInput
        style={styles.input}
        placeholder=" Ex.: 1234"
        />
        <Text></Text>
        <Text style={styles.titleEsq}> Sensores</Text>
        <Text></Text>
        <Text> Nível Mínimo: </Text>
        <TextInput
        style={styles.input}
        placeholder=" Ex.: 50"
        />
        <Text></Text>
        <Text style={styles.titleEsq}> Parâmetros</Text>
        <Text></Text>
        <Text> Parâmetro 1: </Text>
        <TextInput
        style={styles.input}
        placeholder=" Ex.: Z"
        />
        <Text> Parâmetro 2: </Text>
        <TextInput
        style={styles.input}
        placeholder=" Ex.: Z"
        />
        <Text></Text>
        <View style={styles.container}>
        <Text> Atualização Automática:</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    /></View>
                    <Text></Text>
        <View style={{ alignItems: "center" }}>
                    <Button
                        onPress={() => Alert.alert('Tem certeza?')}
                        title="Salvar"
                        color="#00FF7F"
                        width="10px"
                    />
                    </View>
                    <Text>{"\n"}{"\n"}{"\n"}</Text>
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

    title: {
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },

    textoCenter: {
        color: 'black',
        alignItems: 'center',
        textAlign: 'center'
    },

    titleEsq: {
        fontWeight: 'bold',
        color: 'black',
    }
});