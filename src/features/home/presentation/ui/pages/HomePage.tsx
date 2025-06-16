import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign'; //Icono para ver más del contacto
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; //Icono para Calendario con hora
import Entypo from '@expo/vector-icons/Entypo'; //Icono para las notas
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity  } from "react-native";
import SafeLayout from '../../../../../shared/components/layouts/SafeLayout';


const HomePage = () => {

    return (
        <SafeLayout>
            {/* -- Sección de bienvenida -- */}
            <View style={styles.containerMain}>
                <Text style={styles.titleWelcome}>¡Bienvenido a la app CRM 😊!</Text>
            </View>

            {/* -- Sección de recordatorios -- */}
            {/* -- Sección para el contenido general -- */}
            <View style={styles.content}>
                <View style={styles.contentHeader}>
                    <Text style={styles.contentTitle}>Recordatorios</Text>
                    <Pressable onPress={() => console.log("Botón ver más Recordatorios")}>
                        {({pressed}) => (
                            <Text style={[styles.btnView, pressed && styles.pressedView]}>Ver más...</Text>                            
                        )} 
                    </Pressable>
                </View>

                {/*Contenedor para los botones*/}
                <View style={styles.reminderButtons}>
                    <TouchableOpacity 
                        style={[styles.buttonItem, styles.buttonItemLeft]} 
                        onPress={() => console.log("Botón omitido")}>
                        <Text style={styles.textButtonItem}>Omitido</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonItem} onPress={() => console.log("Botón esta semana")}>
                        <Text style={styles.textButtonItem}>Esta semana</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.buttonItem, styles.buttonItemRight]} 
                        onPress={() => console.log("Botón proximo")}>
                        <Text style={styles.textButtonItem}>Proximo</Text>
                    </TouchableOpacity>
                </View>

                {/*Contenedor para los contactos*/}
                {/* -- Sección para la tarjeta de contactos -- */}
                <View style={styles.contacsCard}>
                    <View style={styles.cardBody}>
                        <View style={styles.imgContainer}>
                            <Image 
                                source={require('../../../../../../assets/photo_prototype.png')}
                                style={styles.contactImg}
                            />
                        </View>
                        <View style={styles.contactInfo}>
                            <Text>*Nombre</Text>
                            <Text>
                                <MaterialCommunityIcons name="calendar-clock" size={24} color="black" /> *Calendario
                            </Text>
                            <Text>
                                <Entypo name="message" size={24} color="black" /> *Nota
                            </Text>
                        </View>
                        <View style={styles.seeMorecontact}>
                            <TouchableOpacity 
                                style={styles.bntSeeMore}
                                onPress={() => console.log("Botón ver más del contacto")}>
                                <View>
                                    <AntDesign name="ellipsis1" size={24} color="black"/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            {/* -- Sección de notas recientes -- */}
            {/* -- Sección para el contenido general -- */}
            <View style={styles.content}>
                <View style={styles.contentHeader}>
                    <Text style={styles.contentTitle}>Notas Recientes</Text>
                    <Pressable onPress={() => console.log("Botón ver más Notas")}>
                        {({pressed}) => (
                            <Text style={[styles.btnView, pressed && styles.pressedView]}>Ver más...</Text>                            
                        )} 
                    </Pressable>
                </View>

                {/* -- Sección para la tarjeta de contactos -- */}
                <View style={styles.noteCard}>
                    <View style={styles.cardBody}>
                        <View style={styles.imgContainer}>
                            <Image 
                                source={require('../../../../../../assets/photo_prototype.png')}
                                style={styles.contactImg}
                            />
                        </View>
                        <View style={styles.contactInfo}>
                            <View style={styles.infoHeader}>
                                <Text>*Nombre</Text>
                                <Text>*Calendario </Text>
                            </View>
                            <Text>*Nota</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Sección de agregar Notas */}
            <View style={styles.addNotes}>
                <Pressable
                    onPress={()=>console.log("Botón para agregar notas")}
                >
                    <Text>Este sera botón de agregar notas</Text>
                </Pressable>
            </View>
        </SafeLayout>
    );
};

const styles = StyleSheet.create({

    // -- Sección de bienvenida --
    containerMain:{
        justifyContent: 'flex-start',
        backgroundColor: 'tomato',
        alignItems: 'center',
        padding: 12,
    },
    titleWelcome:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        margin: 22,
    },

    // -- Sección para el contenido general --
    content:{
        justifyContent:'flex-start',
        marginTop: 28,
        marginLeft: 16,
        marginRight: 16,
    },
    contentHeader:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 16,
    },
    contentTitle:{
        color: '#0089e8',
        fontWeight: 'bold',
        textTransform:'uppercase',
        fontSize: 20,
    },
    //Color del texto por defecto en "Ver más.."
    btnView:{
        color: 'tomato',
        fontSize: 16,
    },
    //color del texto al presionar el botón por Pressable
    pressedView:{
        color: 'gray',
    },

    // -- Sección para la tarjeta de contactos --
    contacsCard:{
        backgroundColor: 'white',
        borderBottomLeftRadius:12,
        borderBottomRightRadius:12,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
    },
    cardBody:{flexDirection:'row'},

    // -- Sección de recordatorios --
    //Contenedor para los botones
    reminderButtons:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 2,
    },
    buttonItem:{
        width:'33.5%',
        alignItems:'center',
        backgroundColor: 'white',
        padding:16,
    },
    textButtonItem:{
        fontWeight:'bold',
        fontSize: 16,
    },
    buttonItemLeft:{borderTopLeftRadius: 12,}, buttonItemRight:{borderTopRightRadius: 12,},

    //Contenedor para los contactos
    imgContainer:{
        justifyContent:'center',
    },
    contactImg:{
        resizeMode:'contain',
        width: 75,
        height: 75,
        borderRadius: 50,
    },
    contactInfo:{
        flex: 1,
        flexDirection:'column',
        margin:16,
    },
    seeMorecontact:{
        justifyContent:'center',
        alignItems: 'flex-end',
        right: 45,
    },
    bntSeeMore:{
        padding: 4,
        borderRadius:16,
        backgroundColor:'#f8f8f8',
    },

    // -- Sección de notas recientes --
    noteCard:{
        backgroundColor: 'white',
        borderRadius:12,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
    },
    infoHeader:{
        justifyContent:'space-between',
        flexDirection:'row',
    },

    // -- Sección para agregar notas --
    addNotes:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
})

export default HomePage;