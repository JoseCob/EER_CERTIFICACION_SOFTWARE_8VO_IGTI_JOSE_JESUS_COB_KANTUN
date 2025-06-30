import React from "react";
import { StyleSheet, View } from "react-native";
import { spacing } from "@/shared/theme";

//Interface para pasar Hijos a partir de este componente
interface ModalHeaderProps {
    children: React.ReactNode;
}

const ModalHeader:React.FC<ModalHeaderProps> = ({children }) => {    
    return (
        <View style={styles.modalHeader}>
            {/*Se muestra todo el contenido del header del modal */}
            {children}
        </View>
    );
}
export default ModalHeader;

const styles = StyleSheet.create({
    modalHeader:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        padding: spacing.xs,
        marginTop: spacing.sm,
        gap: spacing.lg,
    }
})