import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors, spacing } from '@/shared/theme'; //Hoja de Estilos generales

export default function RecentNotesCard () {
    return (
        <View style={styles.noteCard}>
            <View style={styles.cardBody}>
                <View style={styles.imgContainer}>
                    <Image 
                        source={require('../../../../../../../assets/photo_prototype.png')}
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
    );
}

const styles = StyleSheet.create({
    //Tarjeta para notas recientes
    noteCard:{
        backgroundColor: colors.surface,
        borderRadius:spacing.md,
        paddingTop: spacing.md,
        paddingBottom: spacing.md,
        paddingLeft: 20,
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
})