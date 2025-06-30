import React from "react";
import { Modal } from "react-native";
import { ModalBaseProps } from "@/shared/types/ui"; //Props base para Modales

interface ModalFullScreenProps extends ModalBaseProps {
    children: React.ReactNode;
}

//Función para llamar a un modal de pantalla completa
const ModalFullScreenTemplate: React.FC<ModalFullScreenProps> = ({visible, onClose, children}) => {
    return (
        <Modal
            animationType="slide" //Animación del modal
            visible={visible} //Visibilidad del modal con props
            onRequestClose={onClose} //Acción del botón de retroceder desde Android(botón fisico del celular) con props
        >
            {/*Aqui se muestra el contenedor del header del modal */}
            {children}
        </Modal>
    );
}
export default ModalFullScreenTemplate;