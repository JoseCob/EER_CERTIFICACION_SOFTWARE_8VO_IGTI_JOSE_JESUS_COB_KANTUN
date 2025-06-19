import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors, spacing, typography } from '@/shared/theme';

export default function ContacsListCard () {
    return (
        <Pressable onPress={() => console.log("clic al botón del contacto")}>
            {({pressed}) => (
                <View style={[styles.btnAddContact, pressed && styles.pressedContact]}>
                    {/* Aqui va el icono del contacto */}
                    <Ionicons name="person-add-outline" style={styles.contactIcon} />
                    <Text style={styles.texContact}>Contacto 1</Text>
                </View>
            )} 
        </Pressable>
    );
}

const styles = StyleSheet.create({
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
    texContact:{
        color: colors.defaultColor,
        fontSize: 18,
    },
})