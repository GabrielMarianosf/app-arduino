import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import CircularProgress from 'react-native-circular-progress-indicator';
import { ActivityIndicator, FlatList, StyleSheet, Text, Modal, Button, Alert, 
            View, TextInput, Image, SafeAreaView } from 'react-native';

// Conexão com o banco firebase
import { database } from './config_firebase'
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';

// Imagens/status dos Sensores
import agua from '../android/drawable-xxxhdpi/agua.gif'
import sol from '../android/drawable-xxxhdpi/sol.gif'
import molhando from '../android/drawable-xxxhdpi/molhando.gif'

export default function Home({ navigation }) {

    // useState inicio loading
    const [loading, setLoading] = useState(true);
    // useState recebe lista dos sensores
    const [sensores, setSensores] = useState([]);

    // useState modal de edição dos sensores
    const [modalVisible, setModalVisible] = useState(false); // bollean
    // useState variavel geral para salvar os novos valores inseridos no editar sensor
    const [array_editar, setArray_editar] = useState([{}]); // objeto
    // useState 
    const [val_sensor, setValsensor] = useState(''); // string
    // 
    const [val_local, setVallocal] = useState(''); // string

    useEffect(() => {
        database.collection("arduino").orderBy('sensor', 'asc').onSnapshot((querySnapshot) => {
            const sensores = [];
            querySnapshot.docs.forEach((doc) => {
                const { local, nivel, sensor, ultima_data, ligado } = doc.data();
                sensores.push({
                    id: doc.id,
                    local,
                    nivel,
                    sensor,
                    ultima_data,
                    ligado,
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

        var nivel = parseInt(obj.obj.nivel)
        var ligado = obj.obj.ligado
        var max = 100

        if (ligado === '1') {
            return (
                <View style={{paddingBottom: 5}}>
                        <View style={styles.viewsensor}>
                            <Text style={{padding: 3, top: -5}}> Sensor: {obj.obj.sensor}</Text>
                            <Text style={{padding: 3, top: -5}}> Local: {obj.obj.local}</Text>
                            <Text style={{padding: 3, top: -5}}> Nivel: {obj.obj.nivel}%</Text>
                            <Text style={{padding: 3, top: -5}}> Última Atualização: {obj.obj.ultima_data}</Text>
                            <View style={{
                                width: 50, height: 10, top: -105, left: 260,
                            }}>
                                <CircularProgress
                                    value={nivel}
                                    radius={30}
                                    inActiveStrokeColor={'#000000'}
                                    inActiveStrokeOpacity={0.1}
                                    textStyle={{ left: 12 }}
                                    textColor={'black'}
                                    valueSuffix={'%'}
                                    maxValue={max}
                                    strokeLinecap={'butt'}
                                    activeStrokeColor={'#00FF7F'}
                                    inActiveStrokeColor={'rgba(50,120,155,0.3)'}
                                    activeStrokeWidth={4}
                                    duration={1500}
                                    fontSize={13}
                                    showProgressValue={false}
                                />
                                <Image source={molhando} style={{
                                    width: 40, height: 40, position: 'absolute',
                                    top: 8, left: 10
                                }} />
                                <Text style={{left: 17, top: -8}}>{nivel}%</Text>
                            </View>
                            <View style={{ alignItems: "center", flexDirection: "row", top: -23, paddingBottom: 15, paddingTop: 10 }}>
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
                    </View>
            )
        } else {

            if (nivel >= 50) {
                return (
                    <View style={{paddingBottom: 5}}>
                        <View style={styles.viewsensor}>
                            <Text style={{padding: 3, top: -5}}> Sensor: {obj.obj.sensor}</Text>
                            <Text style={{padding: 3, top: -5}}> Local: {obj.obj.local}</Text>
                            <Text style={{padding: 3, top: -5}}> Nivel: {obj.obj.nivel}%</Text>
                            <Text style={{padding: 3, top: -5}}> Última Atualização: {obj.obj.ultima_data}</Text>
                            <View style={{
                                width: 50, height: 10, top: -105, left: 260,
                            }}>
                                <CircularProgress
                                    value={nivel}
                                    radius={30}
                                    inActiveStrokeColor={'#000000'}
                                    inActiveStrokeOpacity={0.1}
                                    textStyle={{ left: 12 }}
                                    textColor={'black'}
                                    valueSuffix={'%'}
                                    maxValue={max}
                                    strokeLinecap={'butt'}
                                    activeStrokeColor={'#00FF7F'}
                                    inActiveStrokeColor={'rgba(50,120,155,0.3)'}
                                    activeStrokeWidth={4}
                                    duration={1500}
                                    fontSize={13}
                                    showProgressValue={false}
                                />
                                <Image source={agua} style={{
                                    width: 40, height: 40, position: 'absolute',
                                    top: 11, left: 10
                                }} />
                                <Text style={{left: 17, top: -8}}>{nivel}%</Text>
                            </View>
                            <View style={{ alignItems: "center", flexDirection: "row", top: -23, paddingBottom: 15, paddingTop: 10 }}>
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
                    </View>
                )
            } else {
                return (
                    <View style={{paddingBottom: 5}}>
                        <View style={styles.viewsensor}>
                            <Text style={{padding: 3, top: -5}}> Sensor: {obj.obj.sensor}</Text>
                            <Text style={{padding: 3, top: -5}}> Local: {obj.obj.local}</Text>
                            <Text style={{padding: 3, top: -5}}> Nivel: {obj.obj.nivel}%</Text>
                            <Text style={{padding: 3, top: -5}}> Última Atualização: {obj.obj.ultima_data}</Text>
                            <View style={{
                                width: 50, height: 10, top: -105, left: 260,
                            }}>
                                <CircularProgress
                                    value={nivel}
                                    radius={30}
                                    inActiveStrokeColor={'#000000'}
                                    inActiveStrokeOpacity={0.1}
                                    textStyle={{ left: 12 }}
                                    textColor={'black'}
                                    valueSuffix={'%'}
                                    maxValue={max}
                                    strokeLinecap={'butt'}
                                    activeStrokeColor={'#00FF7F'}
                                    inActiveStrokeColor={'rgba(50,120,155,0.3)'}
                                    activeStrokeWidth={4}
                                    duration={1500}
                                    fontSize={13}
                                    showProgressValue={false}
                                />
                                <Image source={sol} style={{
                                    width: 40, height: 40, position: 'absolute',
                                    top: 11, left: 10
                                }} />
                                <Text style={{left: 17, top: -7}}>{nivel}%</Text>
                            </View>
                            <View style={{ alignItems: "center", flexDirection: "row", top: -23, paddingBottom: 15, paddingTop: 10 }}>
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
                    </View>
                )
            }
        }
    }

    function Cadsensor() {
        const res = database.collection('arduino').add({
            ligado: '0',
            local: '-',
            nivel: '0',
            sensor: '999',
            ultima_data: '-'
        });
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
        <SafeAreaView>
            <StatusBar
                translucent={true}
                barStyle="light-content"
                hidden={false}
                backgroundColor="#00FF7F"
            />
            <Text style={{ color: 'black', left: '30%', paddingTop: 10, paddingBottom: 5 }}> 
            Lista de Sensores
            </Text>
            <FlatList
                data={sensores}
                renderItem={(item) => <Sensores obj={item.item} />}
            />
            <Button
                onPress={() => Cadsensor()}
                title="Adicionar Sensor"
                color="#00FF7F"
                width="10px"
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                key={array_editar}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Editando Sensor: {array_editar.sensor} </Text>
                        <Text> * Sensor: </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={text => (setValsensor(text))}
                            placeholder={'Valor Atual: ' + array_editar.sensor}
                            autoFocus={true}
                            maxLength={50}
                            textAlign={'left'}
                        />
                        <Text> * Local: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder={'Valor atual: ' + array_editar.local}
                            onChangeText={text => (setVallocal(text))}
                        />
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
                        </View>
                    </View>
            </Modal>
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
        backgroundColor: 'white',
        borderWidth: 0.5,
        elevation: 3,
        left: 5,
        borderRadius: 20,
        padding: 10,
        width: 350,
        height: 150,
    },
    spaco: {
        backgroundColor: 'black',
        width: 100,
        height: 100,
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
        shadowRadius: 0.00,
        elevation: 5,
    },
});