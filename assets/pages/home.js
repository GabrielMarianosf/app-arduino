import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, Button, Alert, Switch, View, ImageBackgroud, ScrollView, SafeAreaView, Animated } from 'react-native';
import { ListItem } from "react-native-elements";

import config from './config';
import { database } from './config_firebase'
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';
import { render } from 'react-dom';


export default function Home({ navigation }) {

   

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [sensores, setSensores] = useState([]);
    const [loading, setLoading] = useState([true]);
    useEffect(() => {
        database.collection("arduino").orderBy('sensor', 'asc').onSnapshot((querySnapshot) => {
            const sensores = [];
            querySnapshot.docs.forEach((doc) => {
                const { local, nivel, sensor, ultima_data } = doc.data();
                sensores.push({
                    id: doc.id,
                    local,
                    nivel,
                    sensor,
                    ultima_data,
                });
            });
            setSensores(sensores); 
        });

        
        // const query = database.collection("arduino").orderBy('sensor').get();

        // console.log(query.doc)
        
    }, [])
    

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

    function Sensores(obj) {
            return (
                <View>
                    <Text>Sensor: {obj.obj.sensor}</Text>
                    <Text>Local: {obj.obj.local}</Text>
                    <Text>Nivel: {obj.obj.nivel}</Text>
                    <Text>Ultima Atualização: {obj.obj.ultima_data}</Text>
                    <View style={{ alignItems: "center", flexDirection: "row" }}>
                        <View style={styles.space} />
                        <Button

                            title="Editar"
                            color="#00FF7F"
                            width="10px"
                        />
                        <View style={styles.space} />
                        <Button
                            onPress={() => navigation.navigate(config)}
                            title="Excluir"
                            color="#DC143C"
                            width="10px"
                        /></View>
                </View>
            )
               
    }

    function Cadsensor() {
        const data = {
            local: ' ---',
            nivel: ' ----- ',
            sensor: ' ----- ',
            ultima_data: ' ----- '
          };
          
          
          const res = database.collection('arduino').add({
            local: '-',
            nivel: '-',
            sensor: '999',
            ultima_data: '-'
          });
          console.log(res);    
}

    // function Progress() {

    //     if (this.state.loading) {
    //         <ActivityIndicator
    //             size="large"
    //             color="green"

    //         />
    //     } else {
    //         return (
    //             <View>
    //                 <Text>terminou de carregar</Text>
    //             </View>
    //         )
    //     }

    // }



    return (
        <SafeAreaView style={styles.container}>

            <ScrollView>

                <StatusBar
                    translucent={true}
                    barStyle="light-content"
                    hidden={false}
                    backgroundColor="#00FF7F"
                />

                
                <View style={styles.container}>
                    <Text style={styles.texto}> Lista / Gerenciamento de Sensores</Text>
                </View>
                <View value="sensor" style={styles.viewsensor}>
                    <FlatList
                        data={sensores}
                        renderItem={ (item) => <Sensores obj={item.item} /> }
                    />
                
                </View>

                <View style={{ alignItems: "center" }}>
                    <Button
                        onPress={() => Cadsensor()}
                        title="Adicionar Sensor"
                        color="#00FF7F"
                        width="10px"
                    />
                </View>
                
            </ScrollView>

        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
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
    },

    space: {
        width: 5,
        height: 20,
    },

    viewsensor: {
        backgroundColor: 'yellow',


    },
    textsensor: {
        top: -38,
        left: 50,
    },
    textlocal: {
        top: -38,
        left: 40

    },
    textnivel: {
        top: -38,
        left: 40
    },
    textdata: {
        top: -38,
        left: 40
    },
});