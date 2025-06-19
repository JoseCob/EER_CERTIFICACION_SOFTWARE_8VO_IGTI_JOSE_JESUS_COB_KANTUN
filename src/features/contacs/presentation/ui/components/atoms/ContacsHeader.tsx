import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, typography } from '@/shared/theme'; //Hoja de Estilos generales

export default function ContacsHeader () {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agrega Relaciones</Text>
            <View style={styles.separator} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 60,
    },
    title:{
        color: colors.titleText,
        fontWeight: 'bold',
        textTransform:'uppercase',
        fontSize: typography.fontSizeL,
    },
    separator:{
        height: 1, // Altura de la línea
        borderWidth: 1,
        width: '80%',
        borderColor: colors.backgroundApp, // Color de la línea
        marginVertical: 10, // Espacio vertical
    },
});