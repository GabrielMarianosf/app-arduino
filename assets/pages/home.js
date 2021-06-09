import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { ActivityIndicator, FlatList, StyleSheet, Text, Modal, Button, Alert, Switch, View, TextInput, Image, ScrollView, SafeAreaView, Animated } from 'react-native';

import agua from '../android/drawable-xxxhdpi/agua.gif'
import { database } from './config_firebase'
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';


export default function Home({ navigation }) {

    const [loading, setLoading] = useState(true);
    const [sensores, setSensores] = useState([]);

    // variaveis states para editar um sensor
    const [modalVisible, setModalVisible] = useState(false); // bollean
    const [array_editar, setArray_editar] = useState([{}]); // objeto
    const [val_sensor, setValsensor] = useState(''); // string
    const [val_local, setVallocal] = useState(''); // string

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
            setLoading(false)
        });
    }, [])


    function Modal_Editar_Sensor(obj) {

        setModalVisible(!modalVisible)
        setArray_editar(obj);

    }

    function Editar_Sensor(obj) {

        if (val_sensor === '' && val_local === '') {
            let result = database.collection('arduino').doc(obj.id).update({
                sensor: obj.sensor,
                local: obj.local
            });
            Alert.alert('Dados Salvos com Sucesso!');
        }
        else if (val_sensor === '') {
            let result = database.collection('arduino').doc(obj.id).update({
                sensor: obj.sensor,
                local: val_local
            });
            Alert.alert('Dados Salvos com Sucesso!');
        }
        else if (val_local === '') {
            let result = database.collection('arduino').doc(obj.id).update({
                sensor: val_sensor,
                local: obj.local
            });
            Alert.alert('Dados Salvos com Sucesso!');
        }
        else {
            let result = database.collection('arduino').doc(obj.id).update({
                sensor: val_sensor,
                local: val_local
            });
            Alert.alert('Dados Salvos com Sucesso!');
        }

    }

    function Excluir_Sensor(obj) {
        Alert.alert(
            "Excluir Sensor ?",
            "Tem certeza que deseja excluir o sensor selecionado?",
            [
                {
                    text: "Não",
                    onPress: () => console.log('excluir, cancelado'),
                    style: "cancel"
                },
                {
                    text: "Sim", onPress: () => {

                        let result = database.collection('arduino').doc(obj.id).delete();

                        if (result) {
                            Alert.alert('AVISO !', 'Sensor Deletado com Sucesso ! ✔️')
                        } else {
                            Alert.alert('AVISO !', 'Falha ao Deletar o Sensor, Verifique se está conectado a internet ( 📶 )')
                        }

                    }
                }
            ]
        );

    }

    function Sensores(obj) {

        console.log(obj.obj.nivel)

        var nivel = obj.obj.nivel

        if (nivel <= 1023) {

            return (
                <ScrollView>
                    <View>
                        <Text>Sensor: {obj.obj.sensor}</Text>
                        <Text>Local: {obj.obj.local}</Text>
                        <Text>Nivel: {obj.obj.nivel}</Text>
                        <Text>Última Atualização: {obj.obj.ultima_data}</Text>
                        <View style={ { width: 90, height: 90, top: -80, left: 260   }  }> 
                            {/* <FlatList
                                data={obj}
                                renderItem={ (item) => <Water obj={item.item} />  }
                            /> */}
                            {/* <Water objeto={obj.obj}/> */}

                            <Image source={agua} style={{ width: 87, height: 90  }} /> 
                            
                        </View>
                        
                        {/* position: 'absolute', top: -10, left: 260 */}
                        <View style={{ alignItems: "center", flexDirection: "row", top: -75 }}>
                            <View style={styles.space} />
                            <Button
                                onPress={() => {
                                    Modal_Editar_Sensor(obj.obj)
                                }}
                                title="Editar"
                                color="#00FF7F"
                                width="10px"
                            />
    
                            <View style={styles.space} />
                            <Button
                                onPress={() => {
                                    Excluir_Sensor(obj.obj)
                                }}
                                title="Excluir"
                                color="#DC143C"
                                width="10px"
                            /></View>
                    </View>
                </ScrollView>
            )
            
        } else {
            return (
                <ScrollView>
                    <View>
                        <Text>Sensor: {obj.obj.sensor}</Text>
                        <Text>Local: {obj.obj.local}</Text>
                        <Text>Nivel: {obj.obj.nivel}</Text>
                        <Text>Última Atualização: {obj.obj.ultima_data}</Text>
                        <View style={ {  width: 90, height: 90, top: -80, left: 260   }  }> 
                            {/* <FlatList
                                data={obj}
                                renderItem={ (item) => <Water obj={item.item} />  }
                            /> */}
                            {/* <Water objeto={obj.obj}/> */}
                            {/* <Image source={agua} style={{ width: 87, height: 90, top: -80, left: 260, padding: 0 }} />  */}
                        </View>
                        
                        <View style={{ alignItems: "center", flexDirection: "row", top: -75 }}>
                            <View style={styles.space} />
                            <Button
                                onPress={() => {
                                    Modal_Editar_Sensor(obj.obj)
                                }}
                                title="Editar"
                                color="#00FF7F"
                                width="10px"
                            />
    
                            <View style={styles.space} />
                            <Button
                                onPress={() => {
                                    Excluir_Sensor(obj.obj)
                                }}
                                title="Excluir"
                                color="#DC143C"
                                width="10px"
                            /></View>
                    </View>
                </ScrollView>
            )
        }
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

    if (loading) {
        return (
            <View style={styles.container}>
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="green" style={{ left: 150 }} />
                    <Text style={{ textAlign: 'center', paddingTop: 20 }}>Se estiver demorando muito, verifique se está conectado na internet. ( 📶 )</Text>
                </View>
            </View>
        );
    }

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
                        renderItem={ (item) => <Sensores obj={item.item} />  }
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
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    key={array_editar}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text>Editando Sensor: {array_editar.sensor} </Text>
                            <Text></Text>
                            <Text> * Numero: </Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={text => (setValsensor(text))}
                                placeholder={'Valor Atual: ' + array_editar.sensor}
                                autoFocus={true}
                                maxLength={50}
                                textAlign={'left'}
                            />
                            <Text></Text>
                            <Text> * Local: </Text>
                            <TextInput
                                style={styles.input}
                                placeholder={'Valor atual: ' + array_editar.local}
                                onChangeText={text => (setVallocal(text))}

                            />
                            <Text></Text>
                            <Button
                                onPress={() => {
                                    Editar_Sensor(array_editar);
                                    setModalVisible(!modalVisible);
                                }}
                                title="Salvar"
                                color="#00FF7F"
                                width="5px"
                            />
                            <View style={styles.space} />
                            <Button
                                onPress={() => {
                                    setArray_editar({});
                                    setValsensor('');
                                    setVallocal('');
                                    setModalVisible(!modalVisible);
                                }}
                                title="Cancelar"
                                color="#DC143C"
                                width="5px"
                            />
                        </View></View>
                </Modal>

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
    loader: {
        top: 200,
        alignItems: 'center',
        textAlign: 'center',
        left: 10,
        width: 340,
        height: 100,
        alignItems: 'flex-start',
        backgroundColor: 'white',

    },
    viewsensor: {
        backgroundColor: 'yellow'
        
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

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.00,
        elevation: 5,
    },
});