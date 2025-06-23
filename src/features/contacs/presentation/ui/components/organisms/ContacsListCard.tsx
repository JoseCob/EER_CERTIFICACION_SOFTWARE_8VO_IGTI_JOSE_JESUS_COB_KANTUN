import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { colors, spacing } from '@/shared/theme';
import { GetContactInitials } from "@/shared/utils/GetContactInitials";
import { ContactEntity } from '@/features/contacs/domain/entities/ContactEntity'; // o la ruta correcta


interface Props {
    contact: ContactEntity;
    onPress: () => void;
}

export default function ContacsListCard ({ contact, onPress  }: Props) {
    return (
        //Maqueta del diseño para la lista de contactos
        <Pressable onPress={() => {onPress()}}>
            {({ pressed }) => (
                <View style={[styles.btnAddContact, pressed && styles.pressedContact]}>
                    {/* Aqui va el icono/imagen del contacto */}
                    {contact.image && contact.image ? (
                        <Image
                            source={{ uri: contact.image }}
                            style={styles.contactIcon}
                        />
                    ) : (
                        //Muestra las iniciales del contacto si no tiene imagen de perfil desde contactos del celular
                        <View style={styles.contactIcon}>
                            <Text style={styles.initials}>{GetContactInitials(contact.name)}</Text>
                        </View>
                    )}
                    {/* Aqui va el Primer y segundo Nombre del contacto */}
                    <Text style={styles.texContact}>{contact.name}</Text>
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
        width: 48,
        height: 48,
        borderRadius: 26,
        marginRight: spacing.md,
        backgroundColor: "#fc7e56",
        justifyContent: 'center',
        alignItems: 'center',
    },
    texContact:{
        color: colors.defaultColor,
        fontSize: 18,
    },
    initials: {
        color: colors.surface,
        fontWeight: 'bold',
        fontSize: 18,
    },
})