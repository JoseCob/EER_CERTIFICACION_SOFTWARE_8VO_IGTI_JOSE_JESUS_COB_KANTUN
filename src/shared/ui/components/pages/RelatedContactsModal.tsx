import React from "react";
import ModalFullScreenTemplate from "../templates/ModalFullScreenTemplate";
import RelatedContactListTemplate from "../templates/RelatedContactListTemplate";
import { View } from 'react-native';
import { ModalBaseProps } from "@/shared/types/ui";

interface props extends ModalBaseProps {
    children: React.ReactNode;
}

//Modal para mostrar solo contactos relacionados
const RelatedContactsModal:React.FC<props> = ({visible, onClose, children }) => {
    return (
        <View style={{ flex: 1 }}>
            <ModalFullScreenTemplate
                visible={visible}
                onClose={onClose}
            >
                {/*Le hacemos llegar onClose al botón cancelar al encabezado del modal */}
                <RelatedContactListTemplate onClose={onClose}>
                    {/*Aqui se muestra todo el contenido del modal */}
                    {children}
                </RelatedContactListTemplate>
            </ModalFullScreenTemplate>
        </View>
    );
}
export default RelatedContactsModal;