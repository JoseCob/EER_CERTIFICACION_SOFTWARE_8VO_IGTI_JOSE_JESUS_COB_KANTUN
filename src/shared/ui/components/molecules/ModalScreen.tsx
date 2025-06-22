import React, {useState} from "react";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { spacing } from "@/shared/theme";

//props para el modal
interface ModalScreenProps {
    /** Controla la visibilidad del modal */
    visible: boolean;
    /** Contenido que irá dentro del modal */
    children?: React.ReactNode;
}

const ModalScreen:React.FC<ModalScreenProps> = ({ visible, children }) => {
    const [listVisible, setListVisible] = useState(false); //muestra el modal de la lista de contactos

    return (
        <Modal
            animationType="slide"
            visible={visible}
            onRequestClose={() => (false)} // Botón de retroceder desde Android(botón fisico del celular)
        >
            <View style={styles.containerCancel}>
                <Pressable onPress={()=> [setListVisible(false), console.log("Botón cancelar Modal")]}>
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