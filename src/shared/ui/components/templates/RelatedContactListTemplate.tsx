import React from "react";
import { View } from "react-native";
import ModalHeader from "../organisms/ModalHeader";
import TitleRelationships from "../atoms/TitleRelationships";
import ContentEmpty from "../molecules/ContentEmpty";
import ButtonCancel from "../molecules/ButtonCancel"; //Llamamos a la molecula del botón cancelar

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export default function RelatedContactListTemplate({ children, onClose }: Props) {
    return (
        <View style={{ flex: 1 }}>
            <ModalHeader>
                <ButtonCancel onClose={onClose} visible/>
                <TitleRelationships/>
                <ContentEmpty />
            </ModalHeader>
            {/*Aqui se muestran los contactos relacionados del FlatList*/}
            {children}
        </View>
    );
}