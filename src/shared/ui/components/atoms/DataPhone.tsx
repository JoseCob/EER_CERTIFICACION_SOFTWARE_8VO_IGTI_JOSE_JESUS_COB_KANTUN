import React from "react";
import { StyleSheet, Text} from 'react-native';
import { typography, spacing } from "@/shared/theme";
import { ContactEntity } from "@/features/contacs/domain/entities/ContactEntity";

//props para el modal
interface ModalAddRelationProps {
    contact: ContactEntity; //Entidades de los datos del contacto
}

const DataPhone:React.FC<ModalAddRelationProps> = ({contact}) => {
    return (
        <Text style={styles.modalphone}>{contact.phone}</Text>
    );
}
export default DataPhone;

const styles = StyleSheet.create({
    modalphone:{
        fontSize: typography.fontSizeM,
        marginTop: spacing.sm,
        color: 'gray',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})