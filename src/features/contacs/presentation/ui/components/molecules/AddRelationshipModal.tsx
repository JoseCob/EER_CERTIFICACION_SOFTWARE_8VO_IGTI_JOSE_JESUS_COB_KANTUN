//Modal que contiene botones para ir al formulario de crear relaciones para ese contacto
import React from "react";
import {StyleSheet, View, Modal, Text, Image, TouchableOpacity} from 'react-native';
import { typography, colors, spacing } from "@/shared/theme";
import { ContactEntity } from "@/features/contacs/domain/entities/ContactEntity";
import { GetContactInitials } from "@/shared/utils/GetContactInitials";

//props para el modal
interface ModalAddRelationProps {
    /** Controla la visibilidad del modal */
    visible: boolean;
    /** Contenido que irá dentro del modal */
    onClose: () => void; // para cerrar el modal
    contact: ContactEntity | null; //Entidades de los datos del contacto
    onCreateRelationship: () => void; //para abrir el segundo modal
}

const AddRelationshipModal: React.FC<ModalAddRelationProps> = ({visible, onClose, contact, onCreateRelationship}) => {
    return(
        <Modal
            transparent={true} 
            animationType="slide"
            visible={visible}
            onRequestClose={onClose} // Botón de retroceder desde Android(botón fisico del celular)
        >
            <View style={styles.overlay}>
                <View style={styles.modalBox}>
                    <Text style={styles.modalTitle}>Relacionar contacto</Text>
                    {contact && (
                        <View style={styles.modalInfoContent}>
                            {/*Imagen del contacto*/}
                            {contact.image ? (
                                <Image
                                    source={{ uri: contact.image }}
                                    style={styles.contacImage}
                                />
                            ) : (
                                //Muestra las iniciales del contacto
                                <View style={styles.contactIcon}>
                                    <Text style={styles.initials}>{GetContactInitials(contact.name)}</Text>
                                </View>
                            )}
                            <View style={{marginBottom: spacing.lg}}> 
                                {/*Nombre del contacto*/}
                                <Text style={styles.modalUser}>
                                    {contact.name === contact.phone ? 'Nombre desconocido' : contact.name}
                                </Text>
                                {/*Numero del contacto*/}
                                <Text style={styles.modalphone}>{contact.phone}</Text>
                            </View>
                        
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
                        </View>
                    )}
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
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.44)',
    },
    modalBox:{
        width: '100%',
        alignItems: 'center',
        borderTopLeftRadius: spacing.lg,
        borderTopRightRadius: spacing.lg,
        paddingTop: spacing.md,
        paddingBottom: spacing.xxl,
        backgroundColor: colors.surface,
    },
    modalTitle:{
        textAlign: 'center',
        fontSize: typography.fontSizeXL,
        fontWeight:'bold',
        letterSpacing: 1.2,
    },
    modalInfoContent:{
        width:'100%',
        alignItems:'center',
        marginTop: spacing.xl,
        marginBottom: spacing.xl,
    },
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
    },
    modalUser:{
        textAlign: 'center',
        fontSize: typography.fontSizeL,
    },
    modalphone:{
        fontSize: typography.fontSizeM,
        marginTop: spacing.sm,
        color: 'gray',
        textAlign: 'center',
        fontWeight: 'bold',

    },
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
    smallText:{
        fontSize: typography.fontSizeM,
        color: 'rgba(68, 67, 67, 0.82)',
        textAlign:'center',
    },
})