import React from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { spacing } from "@/shared/theme";

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
            <View style={styles.containerCancel}>
                <Pressable onPress={()=> {
                    onClose(); 
                    console.log("Botón cancelar modal");
                }}>
                    <Text style={styles.textCancel}>Cancelar</Text>
                </Pressable>
            </View>
            <View>{children}</View>
        </Modal>
    );
}
export default ModalScreen;

const styles = StyleSheet.create({
    //Estilos para el segundo modal
    containerCancel:{
        marginLeft: spacing.xs,
        marginTop: 16,
        marginBottom: spacing.md,
        width:'100%',
        maxWidth:'20%',
        padding: 4,
        alignItems:'center',
    },
    textCancel:{
        color: 'rgba(78, 76, 76, 0.78)',
    },
})