import React from "react";
import { StyleSheet, Text} from 'react-native';
import { typography } from "@/shared/theme";
import { ContactEntity } from "@/features/contacs/domain/entities/ContactEntity";

//props para el modal
interface ModalAddRelationProps {
    contact: ContactEntity; //Entidades de los datos del contacto
}

const ContactName:React.FC<ModalAddRelationProps> = ({contact}) => {
    return (
        <Text style={styles.modalUser}>
            {contact.name === contact.phone ? 'Nombre desconocido' : contact.name}
        </Text>
    );
}
export default ContactName;

const styles = StyleSheet.create({
    modalUser:{
        textAlign: 'center',
        fontSize: typography.fontSizeL,
    },
})