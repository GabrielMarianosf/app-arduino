import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, TextInput, ScrollView, View, Button, Alert, Switch } from 'react-native';
// import NavBar, {NavButtonText, NavButton, NavTitle} from 'react-native-nav'

export default function Config({navigation}) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        
        <SafeAreaView style={styles.container}>
        
            <ScrollView>
            {/* <NavBar style={styles.barra}>
            <NavButton onPress={() => navigation.openDrawer()}>
            <NavButtonText>
            {"Menu"}
            </NavButtonText>
            </NavButton>
            <NavTitle>
            {"Configurações  "}
            </NavTitle>
            </NavBar> */}
                {/* <StatusBar
                    barStyle="light-content"
                    hidden={false}
                    backgroundColor="#00FF7F"
                /> */}
        <Text></Text>
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
                    <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 0.3,
      },

    titleEsq: {
        fontWeight: 'bold',
        color: 'black',
    },

    barra: {
        backgroundColor: 'blue'
    }
});