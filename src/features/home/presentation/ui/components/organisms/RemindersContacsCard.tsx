import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { colors, spacing } from '@/shared/theme'; //Hoja de Estilos generales
import Entypo from '@expo/vector-icons/Entypo'; //Icono para las notas y el botón agregar notas
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; //Icono para Calendario con hora
import AntDesign from '@expo/vector-icons/AntDesign'; //Icono para ver más del contacto

export default function RemindersContacsCard () {
    return(
        <View style={styles.contacsCard}>
            <View style={styles.cardBody}>
                <View style={styles.imgContainer}>
                    <Image 
                        source={require('../../../../../../../assets/photo_prototype.png')}
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
    );
}

const styles = StyleSheet.create({
    //Tarjeta para recordatorios de contactos
    contacsCard:{
        backgroundColor: colors.surface,
        borderBottomLeftRadius: spacing.md,
        borderBottomRightRadius: spacing.md,
        paddingTop: spacing.sm,
        paddingBottom: spacing.sm,
        paddingLeft: spacing.none,
    },
    //Cuerpo de la tarjeta
    cardBody:{
        flexDirection:'row',
        paddingLeft:spacing.md,
        paddingBottom: spacing.sm,
    },
    imgContainer:{
        justifyContent:'center',
    },
    //Contenedor de la imagen del contacto
    contactImg:{
        resizeMode:'contain',
        width: 60,
        height: 60,
        borderRadius: 80,
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
})