//Modal que contiene botones para ir al formulario de crear relaciones para ese contacto
import React from "react";
import {StyleSheet, View, Modal, Text, TouchableOpacity} from 'react-native';
import { typography, colors, spacing } from "@/shared/theme";
import { ContactEntity } from "@/features/contacs/domain/entities/ContactEntity";


//props para el modal
interface ModalAddRelationProps {
    /** Controla la visibilidad del modal */
    visible: boolean;
    /** Contenido que irá dentro del modal */
    onClose: () => void; // para cerrar el modal
    contact: ContactEntity | null;
}

const AddRelationshipModal: React.FC<ModalAddRelationProps> = ({visible, onClose, contact}) => {
    return(
        <Modal
            transparent animationType="fade"
            visible={visible}
            onRequestClose={onClose} // Botón de retroceder desde Android(botón fisico del celular)
        >
            <View style={styles.overlay}>
                <View style={styles.modalBox}>
                    <Text style={styles.modalTitle}>Relacionar Contacto</Text>
                    {/*Aqui va el nombre del contacto seleccionado */}
                    <Text style={styles.modalUser}>{contact?.name}</Text>
                    <View style={styles.modalcontent}>
                        <TouchableOpacity 
                            style={styles.btnModal} 
                            onPress={() => console.log("Clic crear relación con", contact?.name)}>
                            <Text>Crear relación</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btnModal}
                            onPress={() => {
                                console.log("Clic cerrar crear relación");
                                onClose();
                            }}
                        >
                            <Text>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.smallText}>Añade como relación para gestionar este contacto</Text>
                </View>
            </View>
        </Modal>
    )
}
export default AddRelationshipModal;

const styles = StyleSheet.create ({
    overlay:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.44)',
    },
     modalBox:{
        width: '75%',
        alignItems: 'center',
        marginTop: spacing.lg,
        borderRadius: spacing.lg,
        paddingTop: spacing.md,
        paddingBottom: spacing.md,
        backgroundColor: colors.surface,
    },
    modalTitle:{
        textAlign: 'center',
        fontSize: typography.fontSizeL,
    },
    modalUser:{
        textAlign: 'center',
        fontSize: typography.fontSizeM,
    },
    modalcontent:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnModal:{
        padding: 12,
        width: '80%',
        margin: 12,
        borderRadius: 16,
        color: colors.surface,
        fontSize: typography.fontSizeL,
    },
    smallText:{
        fontSize: 14,
        color: 'rgba(68, 67, 67, 0.82)',
    },
})