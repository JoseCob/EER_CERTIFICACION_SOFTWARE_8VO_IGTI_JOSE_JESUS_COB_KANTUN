import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors, typography, spacing } from '@/shared/theme'; //Hoja de Estilos generales

export default function RecentNotesHeader () {
    return (
        <View style={styles.contentHeader}>
            <Text style={styles.contentTitle}>Notas Recientes</Text>
            <Pressable onPress={() => console.log("Botón ver más Notas")}>
                {({pressed}) => (
                    <Text style={[styles.btnView, pressed && styles.pressedView]}>Ver más...</Text>                            
                )} 
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
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
        color: colors.backgroundApp,
        fontSize: typography.fontSizeM,
    },
    //color del texto al presionar el botón por Pressable
    pressedView:{
        color: 'gray',
    },
})