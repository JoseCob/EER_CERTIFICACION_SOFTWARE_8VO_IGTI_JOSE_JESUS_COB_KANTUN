import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { typography, spacing } from '@/shared/theme'; //Hoja de Estilos generales

export default function ReminderButtonGroup () {
    return (
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
    );
}

const styles = StyleSheet.create({
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
})