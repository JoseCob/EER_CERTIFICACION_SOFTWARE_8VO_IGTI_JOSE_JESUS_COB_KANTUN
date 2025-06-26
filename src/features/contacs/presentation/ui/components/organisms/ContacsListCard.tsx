import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { colors, spacing, typography } from '@/shared/theme';
import { GetContactInitials } from "@/shared/utils/GetContactInitials";
import { ContactEntity } from '@/features/contacs/domain/entities/ContactEntity';

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
                    <View style={{width:'72%'}}>
                        <Text style={styles.texContact}>{contact.name}</Text>
                    </View>
                </View>
            )} 
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btnAddContact:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: spacing.xxl,
        paddingTop: spacing.md,
        paddingBottom: spacing.md,
    },
    pressedContact:{
        backgroundColor: colors.btnPressed,
    },
    contactIcon:{
        width: 60,
        height: 60,
        borderRadius: 80,
        marginRight: spacing.lg,
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
        fontSize: typography.fontSizeXL,
    },
})