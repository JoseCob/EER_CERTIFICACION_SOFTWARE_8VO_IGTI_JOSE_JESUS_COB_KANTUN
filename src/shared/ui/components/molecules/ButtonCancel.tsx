import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { spacing } from "@/shared/theme";
import { ModalBaseProps } from "@/shared/types/ui"; //Props base para Modales
import TextCancel from "../atoms/TextCancel"; //LLamamos al atomo del texto Cancelar

const ButtonCancel:React.FC<ModalBaseProps> = ({onClose}) => {
    return (
        <View style={styles.containerCancel}>
            <Pressable onPress={()=> {
                onClose(); //Prop para cerrar el modal de ModalBaseProps
                console.log("Botón cancelar modal");
            }}>
                <TextCancel />
            </Pressable>
        </View>
    );
}
export default ButtonCancel;

const styles = StyleSheet.create({
    containerCancel:{
        marginLeft: spacing.xs,
        flex: 1,
    }
})