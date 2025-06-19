import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors, typography, spacing, } from "@/shared/theme";

export default function AddContacsHeader () {
    return (
        <View style={styles.bodyContacs}>
            <Pressable onPress={() => console.log("Botón agregar nuevo contacto")}>
                {({pressed}) => (
                    <View style={[styles.btnAddContact, pressed && styles.pressedContact]}>
                        <Ionicons name="person-add-outline" style={styles.contactIcon} />
                        <Text style={styles.textAddContact}>Añadir Nuevo Contacto</Text>
                    </View>
                )} 
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    bodyContacs:{
        marginTop: spacing.md,
    },
    btnAddContact:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 40,
        paddingTop: spacing.md,
        paddingBottom: spacing.md,
    },
    pressedContact:{
        backgroundColor: colors.btnPressed,
    },
    contactIcon:{
        borderRadius: 26,
        padding: spacing.md,
        marginRight: spacing.md,
        fontSize: typography.fontSizeXL,
        color: colors.surface,
        backgroundColor: colors.backgroundApp,
    },
    textAddContact:{
        color: colors.backgroundApp,
        fontSize: typography.fontSizeL,
    },
})