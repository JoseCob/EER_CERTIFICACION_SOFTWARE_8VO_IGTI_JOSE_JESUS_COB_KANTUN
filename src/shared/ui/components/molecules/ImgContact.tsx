import React from "react";
import {StyleSheet, View, Text, Image} from 'react-native';
import { colors, spacing } from "@/shared/theme";
import { ContactEntity } from "@/features/contacs/domain/entities/ContactEntity"; //Obtenemos las entidades acerca del contactos
import { GetContactInitials } from "@/shared/utils/GetContactInitials";

interface ModalAddRelationProps {
    contact: ContactEntity; //Entidades de los datos del contacto
}

const ImgContact:React.FC<ModalAddRelationProps> = ({contact}) => {
    return (
        //Imagen/perfil acerca del contacto
        <View>
            {contact.image ? (
                <Image
                    source={{ uri: contact.image }}
                    style={styles.contacImage}
                />
            ) : (
                //Muestra las iniciales del contacto como imagen/perfil
                <View style={styles.contactIcon}>
                    <Text style={styles.initials}>{GetContactInitials(contact.name)}</Text>
                </View>
            )}
        </View>
    );
}
export default ImgContact;

const styles = StyleSheet.create({
    contacImage:{
        width: 140,
        height: 140,
        borderWidth: 4,
        borderColor: colors.titleText,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: spacing.lg,
    },
    contactIcon:{
        width: 125,
        height: 125,
        borderWidth: 4,
        borderColor: colors.titleText,
        borderRadius: 80,
        backgroundColor: "#fc7e56",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: spacing.lg,
    },
    initials: {
        color: colors.surface,
        fontWeight: 'bold',
        fontSize: 56,
    }
})