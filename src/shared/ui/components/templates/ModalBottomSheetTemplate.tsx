import React from "react";
import {StyleSheet, View, Modal, Text} from 'react-native';
import { typography, colors, spacing } from "@/shared/theme";
import { ModalBaseProps } from "@/shared/types/ui";
import ModalHeader from '@/shared/ui/components/organisms/ModalHeader' //Importamos el header para modales

//props para el modal
interface ModalAddRelationProps extends ModalBaseProps {
    children: React.ReactNode;
}

const ModalBottomSheetTemplate:React.FC<ModalAddRelationProps> = ({children, visible, onClose}) => {
    return (
        <Modal
            transparent={true} 
            animationType="slide"
            visible={visible}
            onRequestClose={onClose} // Botón de retroceder desde Android(botón fisico del celular)
        >
            <View style={styles.overlay}>
                <View style={styles.modalBox}>
                    <ModalHeader>
                        <Text style={styles.titleText}>Relacionar contacto</Text>
                    </ModalHeader>
                    {/* Aqui va el resto del contenido para este modal */}
                    {children}
                    <Text style={styles.smallText}>Añade como relación para gestionar este contacto</Text>
                </View>
            </View>
        </Modal>
    );
}
export default ModalBottomSheetTemplate;

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
    titleText:{
        fontWeight: 'bold',
        letterSpacing: 1.5,
        fontSize: typography.fontSizeXL,
        textAlign:'center',
        flex: 3,
    },
    smallText:{
        fontSize: typography.fontSizeM,
        color: 'rgba(68, 67, 67, 0.82)',
        textAlign:'center',
    },
})