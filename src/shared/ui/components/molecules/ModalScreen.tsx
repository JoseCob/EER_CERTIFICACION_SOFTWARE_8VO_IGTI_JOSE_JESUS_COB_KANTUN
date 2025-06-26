//Modal que muestra una lista de contactos con relaciones creadas 
import React from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { spacing, typography } from "@/shared/theme";

//props para el modal
interface ModalScreenProps {
    /** Controla la visibilidad del modal */
    visible: boolean;
    /** Contenido que irá dentro del modal */
    children?: React.ReactNode;
    onClose: () => void; // para cerrar el modal
}

const ModalScreen:React.FC<ModalScreenProps> = ({ visible, children, onClose }) => {
    return (
        <Modal
            animationType="slide"
            visible={visible}
            onRequestClose={onClose} // Botón de retroceder desde Android(botón fisico del celular)
        >
            <View style={styles.modalHeader}>
                <View style={styles.containerCancel}>
                    <Pressable onPress={()=> {
                        onClose(); 
                        console.log("Botón cancelar modal");
                    }}>
                        <Text style={styles.textCancel}>Cancelar</Text>
                    </Pressable>
                </View>
            </View>
            <Text style={styles.titleText}>Relaciones</Text>
            {children}
        </Modal>
    );
}
export default ModalScreen;

const styles = StyleSheet.create({
    modalHeader:{
        flexDirection:'row',
        width:'100%',
        marginTop: spacing.xs,
        alignItems:'center',
    },
    titleText:{
        fontWeight:'bold',
        letterSpacing: 1.5,
        fontSize: typography.fontSizeXL,
        textAlign: 'center',
        marginBottom: 18,
    },
    //Estilos para el segundo modal
    containerCancel:{
        marginLeft: spacing.sm,
        padding: 8,
    },
    textCancel:{
        color: 'rgba(78, 76, 76, 0.78)',
        fontSize: 16,
        fontWeight:'500',
    },
})