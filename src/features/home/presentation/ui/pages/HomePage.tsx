import React from "react";
import { StyleSheet, Text, View, Button, Image, Pressable } from "react-native";
import SafeLayout from '../../../../../shared/components/layouts/SafeLayout';

const HomePage = () => {

    return (
        <SafeLayout>
            {/*Sección de bienvenida*/}
            <View style={styles.containerMain}>
                <Text style={styles.titleWelcome}>¡Bienvenido a la app CRM 😊!</Text>
            </View>

            {/*Sección de recordatorios*/}
            <View style={styles.remindersContainer}>
                <View style={styles.remindersHeader}>
                    <Text style={styles.remindersTitle}>Recordatorios</Text>
                    <Pressable onPress={() => console.log("Botón ver más Recordatorios")}>
                        {({pressed}) => (
                            <Text style={[styles.btnView, pressed && styles.pressedView]}>Ver más...</Text>                            
                        )} 
                    </Pressable>
                </View>
                <View>
                    <Button title="Omitido" onPress={() => console.log("Botón omitido")}/>
                    <Button title="Esta semana" onPress={() => console.log("Botón esta semana")}/>
                    <Button title="proximo" onPress={() => console.log("Botón proximo")}/>
                </View>
                <View>
                    <View>
                        <Image />
                        <Text>*Nombre</Text>
                        <Text>*Calendario</Text>
                        <Text>*Nota</Text>
                    </View>
                    <View>
                        <Button title='moreView' onPress={() => console.log("Botón ver más del contacto")}/>
                    </View>
                </View>
            </View>
        </SafeLayout>
    );
};

const styles = StyleSheet.create({

    //Sección de bienvenida
    containerMain:{
        justifyContent: 'flex-start',
        backgroundColor: 'tomato',
        alignItems: 'center',
        padding: 10,
    },
    titleWelcome:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        margin: 22,
    },

    //Sección de recordatorios
    remindersContainer:{
        justifyContent:'flex-start',
        marginTop: 26,
        marginLeft: 16,
        marginRight: 16,
    },
    remindersHeader:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 8,
    },
    remindersTitle:{
        color: '#0089e8',
        fontWeight: 'bold',
        textTransform:'uppercase',
        fontSize: 20,
    },
    //Estilo al presionar el botón por Pressable
    pressedView:{
        color: 'gray',
    },
    //Color del texto por defecto
    btnView:{
        color: 'tomato',
        fontSize: 16,
    },
})

export default HomePage;