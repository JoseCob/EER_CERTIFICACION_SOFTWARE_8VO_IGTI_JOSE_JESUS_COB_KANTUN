import React from "react";
import { StyleSheet, View } from 'react-native';
import { spacing } from "@/shared/theme";
import { ContactEntity } from "@/features/contacs/domain/entities/ContactEntity"; //Obtenemos las entidades acerca del contactos

interface ModalAddRelationProps {
    contact: ContactEntity | null; //Entidades de los datos del contacto
    children: React.ReactNode;
}

const InfoContactTemplate:React.FC<ModalAddRelationProps> = ({contact, children}) => {
    return (
        <View style={{width:'100%'}}>
            {contact && (
                <View style={styles.modalInfoContent}>
                    <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                        {/*Aqui se mostraran los datos del contacto */}
                        {children}
                    </View>
                </View>
            )}
        </View>
    );
}
export default InfoContactTemplate;

const styles = StyleSheet.create ({
    modalInfoContent:{
        width:'100%',
        alignItems:'center',
        marginTop: spacing.lg,
    }
})