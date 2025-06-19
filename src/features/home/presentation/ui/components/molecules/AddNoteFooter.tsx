import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors, typography, spacing } from '@/shared/theme'; //Hoja de Estilos generales
import Entypo from '@expo/vector-icons/Entypo'; //Icono para el botón agregar notas

export default function AddNoteFooter () {
    return (
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
    );
}

const styles = StyleSheet.create({
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