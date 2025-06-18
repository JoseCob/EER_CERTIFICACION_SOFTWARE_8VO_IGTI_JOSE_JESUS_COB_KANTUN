import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign'; //Icono para ver más del contacto
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; //Icono para Calendario con hora
import Entypo from '@expo/vector-icons/Entypo'; //Icono para las notas y el botón agregar notas
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity  } from "react-native";
import { ScrollView } from 'react-native';
import SafeLayout from '../../../../../../shared/components/layouts/SafeLayout';
import { colors, spacing, typography } from '@/shared/theme' //Hoja de Estilos generales

const HomePage = () => {

    return (
        <SafeLayout>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
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

                    {/* -- Sección para las tarjetas de contactos o notas -- */}
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
                                        <AntDesign name="ellipsis1" size={24} color="black" />
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

                    {/* -- Sección para las tarjetas de contactos o notas -- */}
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
                                    <Text>*Fecha - Creación </Text>
                                </View>
                                <Text>*Nota</Text>
                            </View>
                        </View> 
                    </View>
                </View>
            </ScrollView>
            {/* -- Sección para agregar Notas -- */}
                <View style={styles.addNotes}>
                    <Pressable onPress={()=>console.log("Botón para agregar notas")}>
                        {({pressed}) => (
                            <View style={[styles.btnAddNote, pressed && styles.pressedAddNote]}>
                                <Entypo name="add-to-list" size={24} color="white" />
                                <Text style={styles.addNoteTitle}> ¿Algo que quieras anotar?</Text>
                            </View>
                        )}
                    </Pressable>
                </View>
        </SafeLayout>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingBottom: 100, //para que el contenido no se tape con el botón fijo
    },

    // -- Sección de bienvenida --
    containerMain:{
        justifyContent: 'flex-start',
        backgroundColor: 'tomato',
        alignItems: 'center',
        padding: 6,
    },
    titleWelcome:{
        color: colors.surface,
        fontWeight: typography.fontWeightBold,
        fontSize: typography.fontSizeXL,
        margin: 22,
    },

    // -- Sección para el contenido general --
    content:{
        justifyContent:'flex-start',
        marginTop: 28,
        marginLeft: spacing.lg,
        marginRight: spacing.lg,
    },
    contentHeader:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: spacing.lg,
    },
    contentTitle:{
        color: colors.titleText,
        fontWeight: 'bold',
        textTransform:'uppercase',
        fontSize: typography.fontSizeL,
    },
    //Color del texto por defecto en "Ver más.."
    btnView:{
        color: colors.surface,
        fontSize: typography.fontSizeM,
    },
    //color del texto al presionar el botón por Pressable
    pressedView:{
        color: 'gray',
    },

    // -- Sección para las tarjetas de contactos o notas --
    //Tarjetas para notas
    noteCard:{
        backgroundColor: colors.surface,
        borderRadius:spacing.md,
        paddingTop: spacing.md,
        paddingBottom: spacing.md,
        paddingLeft: 20,
    },
    //Tarjetas para contactos
    contacsCard:{
        backgroundColor: colors.surface,
        borderBottomLeftRadius: spacing.md,
        borderBottomRightRadius: spacing.md,
        paddingTop: spacing.md,
        paddingBottom: spacing.md,
        paddingLeft: spacing.md,
    },
    //Cuerpo de la tarjeta
    cardBody:{flexDirection:'row'},
    imgContainer:{
        justifyContent:'center',
    },
    //Encabezado de información para la tarjeta
    infoHeader:{
        justifyContent:'space-between',
        flexDirection:'row',
    },
    //Contenedor de la imagen del contacto
    contactImg:{
        resizeMode:'contain',
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    //Contenedor para la información del contacto
    contactInfo:{
        flex: 1,
        flexDirection:'column',
        margin: spacing.lg,
    },
    //Contenedor para el botón de "ver más"
    seeMorecontact:{
        justifyContent:'center',
        alignItems: 'flex-end',
        right: 45,
    },
    bntSeeMore:{
        padding: spacing.xs,
        borderRadius: spacing.lg,
        backgroundColor:'#f8f8f8',
    },

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
        padding: spacing.lg,
    },
    textButtonItem:{
        fontWeight:'bold',
        fontSize: typography.fontSizeM,
    },
    buttonItemLeft:{borderTopLeftRadius: spacing.md,}, buttonItemRight:{borderTopRightRadius: spacing.md,},

    // -- Sección para agregar notas --
    addNotes:{
        position: 'absolute',
        bottom: spacing.none,
        left: spacing.none,
        right: spacing.none,
        borderTopLeftRadius: spacing.md,
        borderTopRightRadius: spacing.md,
        backgroundColor: colors.backgroundApp, // mismo color de fondo si quieres cubrir bien
        alignItems: 'center',
        zIndex: 1,
    },
    btnAddNote:{
        padding: spacing.lg,
        paddingLeft: 26,
        flexDirection: 'row',
    },
    pressedAddNote:{ backgroundColor: 'rgba(185, 184, 184, 0.19)' },
    addNoteTitle:{
        width: '100%',
        justifyContent: 'center',
        color: colors.surface,
        marginLeft: spacing.xs,
        fontSize: typography.fontSizeL,
    },
})

export default HomePage;