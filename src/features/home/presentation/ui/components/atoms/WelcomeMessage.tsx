import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, typography } from '@/shared/theme'; //Hoja de Estilos generales

export default function WelcomeMessage () {
    return (
        <View style={styles.containerMain}>
            <Text style={styles.titleWelcome}>¡Bienvenido a la app CRM 😊!</Text>
        </View>     
    );
}

const styles = StyleSheet.create({
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
});