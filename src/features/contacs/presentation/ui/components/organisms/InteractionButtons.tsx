import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { typography, spacing, colors } from "@/shared/theme";
import { ContactEntity } from "@/features/contacs/domain/entities/ContactEntity";

//props para el modal
interface ModalAddRelationProps {
    contact: ContactEntity; //Entidades de los datos del contacto
    onCreateRelationship: () => void;
    onClose: () => void;
}

const InteractionButtons:React.FC<ModalAddRelationProps> = ({contact, onCreateRelationship, onClose}) => {
    return (
        <View style={styles.modalBtnContent}>
            <TouchableOpacity
                style={styles.btnModal}
                onPress={() => {
                    console.log("Clic crear relación con", contact.name);
                    onCreateRelationship();
                }}
            >
                <Text style={styles.btnText}>Crear relación</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnModal}
                onPress={() => {
                    console.log("Clic cerrar crear relación");
                    onClose();
                }}
            >
                <Text style={styles.btnText}>Cerrar</Text>
            </TouchableOpacity>
        </View>
    );
}
export default InteractionButtons;

const styles = StyleSheet.create({
    modalBtnContent:{
        width: '100%',
        alignItems: 'center',
    },
    btnModal:{
        padding: spacing.sm,
        width: '65%',
        margin: spacing.md,
        borderRadius: 18,
        backgroundColor: colors.titleText,
    },
    btnText:{
        textAlign:'center',
        color: colors.surface,
        fontSize: typography.fontSizeL,
    },
})