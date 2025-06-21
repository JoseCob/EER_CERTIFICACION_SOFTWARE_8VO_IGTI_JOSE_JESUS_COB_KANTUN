import React from "react";
import { StyleSheet, View, Text, Modal, Pressable, TextInput  } from 'react-native';
import { spacing, colors, typography } from '@/shared/theme';
import SafeLayout from "@/shared/ui/components/layouts/SafeLayout";
import Ionicons from '@expo/vector-icons/Ionicons'; //Icono para notas
import MaterialIcons from '@expo/vector-icons/MaterialIcons'; //Icono para interacciones
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; // Icono para calendario

// interface Props {
//   visible: boolean;
//   onClose: () => void;
// }

export default function TestModal(){
    return (
        <SafeLayout>
            {/* AddNoteModalTemplate.tsx -> Template*/}
            <Modal transparent animationType="slide">
                {/*ModalBoxTemplate.tsx -> Template*/}
                <View style={styles.overlay}>
                    <View style={styles.modalBox}>
                        {/*ModalHeader.tsx -> molecules*/}
                        <View style={styles.modalHeader}>
                            <View style={styles.btnLeft}>
                                <Pressable onPress={()=>console.log("Clic cerrar modal")}>
                                    <Text style={styles.btnClose }>X</Text>
                                </Pressable>
                            </View>
                            {/*AddNoteTitle.tsx -> Atoms*/}
                            <View style={styles.btnCenter}>
                                <Text style={styles.headerTitle}>Nueva Nota</Text>
                            </View>
                        </View>
                        {/*AddNoteForm.tsx -> organisms*/}
                        <View style={styles.modalContent}>
                            <Text>Agregar Contacto</Text>
                            <TextInput 
                                style={styles.textArea}
                                multiline={true}
                                placeholder='Tu nota'
                            />
                        </View>
                        {/*ButtomGroupModal.tsx -> organisms*/}
                        <View style={styles.modalFooter}>
                            <View style={styles.btnIconLeft}>
                                <View style={[styles.btnIcon, styles.btnActive]}>
                                    <Pressable onPress={()=>console.log("botón nueva nota")}>
                                        <Ionicons name="document-text" style={styles.styleIcon} />
                                    </Pressable>
                                </View>
                                <View style={styles.btnIcon}>
                                    <Pressable onPress={()=>console.log("botón nueva interacción")}>
                                        <MaterialIcons name="wechat" size={26} color="tomato" />
                                    </Pressable>
                                </View>
                                <View style={styles.btnIcon}>
                                    <Pressable onPress={()=>console.log("botón nuevo recordatorio")}>
                                        <FontAwesome5 name="calendar-alt" size={26} color="tomato" />
                                    </Pressable>
                                </View>
                            </View>
                            <View style={styles.btnRight}>
                                <Pressable onPress={()=>console.log("Clic guardar nota")}>
                                    <Text style={styles.saveText}>Guardar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeLayout>
    )
}

const styles = StyleSheet.create({
    overlay:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.44)',
    },
    modalBox:{
        width: '95%',
        alignItems: 'center',
        marginTop: spacing.lg,
        borderRadius: spacing.lg,
        paddingTop: spacing.md,
        paddingBottom: spacing.md,
        backgroundColor: colors.surface,
    },
    modalHeader:{
        width: '100%',
        flexDirection: 'row',
        paddingBottom: spacing.lg,
        alignItems:'center',
    },
    btnLeft:{ paddingLeft: spacing.lg },
    btnClose:{ fontSize: typography.fontSizeL },
    headerTitle:{
        fontSize: typography.fontSizeXL,
        fontWeight: 'bold',
        letterSpacing: 1.5,
    },
    btnCenter:{
        flex: 1,
        alignItems: 'center',
    },
    modalContent:{
        width: '100%',
        alignItems: 'flex-start',
        paddingLeft: spacing.lg,
        paddingRight: spacing.lg,
        marginBottom: spacing.md,
    },
    textArea:{
        width: '100%',
        textAlignVertical: 'top',
        height: 125,
        fontSize: 18,
    },
    //Botones del footer
    modalFooter:{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        borderRightWidth: 0,
        borderColor: 'rgba(153, 149, 149, 0.53)',
    },
    btnIconLeft:{
        flexDirection:'row',
        backgroundColor: colors.surface,
        borderRadius: spacing.xl,
        marginLeft: spacing.lg,
        borderWidth: 1,
        marginTop: spacing.md,
        borderColor:'rgba(153, 149, 149, 0.53)',
    },
    btnIcon:{
        margin:-2,
        paddingLeft: spacing.lg,
        paddingTop: spacing.md,
        paddingRight: spacing.lg,
        paddingBottom: spacing.md,
    },

    //<--Estilo al activarse el botón-->
    btnActive:{ 
        backgroundColor: colors.backgroundApp, 
        borderRadius: spacing.xxl, 
    },
    styleIcon: {
        fontSize: typography.fontSizeXL,
        color: colors.surface,
    },
    //<----------------------------->

    btnRight:{
        flex: 1,
        paddingRight: spacing.lg,
        marginTop: spacing.md,
        alignItems: 'flex-end',
    },
    saveText:{
        fontSize: typography.fontSizeM,
        color: 'rgba(78, 76, 76, 0.78)',
    }
})