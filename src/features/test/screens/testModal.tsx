import React, {useState} from "react";
import { StyleSheet, View, Text, Modal, Pressable, TextInput  } from 'react-native';
import { spacing, colors, typography } from '@/shared/theme';
import SafeLayout from "@/shared/ui/components/layouts/SafeLayout";
import Ionicons from '@expo/vector-icons/Ionicons'; //Icono para notas
import MaterialIcons from '@expo/vector-icons/MaterialIcons'; //Icono para interacciones
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; // Icono para calendario
import ContacsListCard from "@/features/contacs/presentation/ui/components/organisms/ContacsListCard";
import ModalScreen from "@/shared/ui/components/molecules/ModalScreen";

// interface Props {
//   visible: boolean;
//   onClose: () => void;
// }

export default function TestModal(){
    const [modalVisible, setModalVisible] = useState(false); //para mostrar el modal de añadir notas
    const [listVisible, setListVisible] = useState(false); //muestra el modal de la lista de contactos
    const [activeForm, setActiveForm] = useState<'note' | 'interaction' | 'reminder'>('note'); //Activa el estilo del botón seleccionado por su categoría

    return (
        <SafeLayout>
            {/*Boton de prueba*/}
            <Pressable onPress={()=> setModalVisible(true)}>
                <Text style={{margin:20}}>abrir modal</Text>
            </Pressable>
            {/* AddNoteModalTemplate.tsx -> Template*/}
            <Modal 
                transparent animationType="slide" 
                visible={modalVisible} 
                onRequestClose={() => setModalVisible(false)} // Botón de retroceder desde Android(botón fisico del celular)
            >
                {/*ModalBoxTemplate.tsx -> Template*/}
                <View style={styles.overlay}>
                    <View style={styles.modalBox}>
                        {/*ModalHeader.tsx -> molecules*/}
                        <View style={styles.modalHeader}>
                            <View style={styles.btnLeft}>
                                <Pressable onPress={()=>[setModalVisible(false), console.log("Clic cerrar modal")]}>
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
                            <View style={styles.containerAddContact}>
                                <Pressable onPress={()=> [setListVisible(true), console.log("Botón agregar contacto")]}>
                                    <Text style={styles.btnContactSelect}>Agregar contacto</Text>
                                </Pressable>
                            </View>
                            <TextInput 
                                style={styles.textArea}
                                multiline={true}
                                placeholder='Tu nota'
                            />
                        </View>
                        {/*ButtomGroupModal.tsx -> organisms*/}
                        <View style={styles.modalFooter}>
                            <View style={styles.btnIconLeft}>
                                <View style={[styles.btnIcon, activeForm === 'note' && styles.btnActive]}>
                                    <Pressable onPress={()=> [setActiveForm('note') ,console.log("botón nueva nota")]}>
                                        <Ionicons name="document-text" style={[styles.styleIcon, activeForm === 'note' && { color: 'white', fontSize:26 }]}/>
                                    </Pressable>
                                </View>
                                <View style={[styles.btnIcon, activeForm === 'interaction' && styles.btnActive]}>
                                    <Pressable onPress={()=> [setActiveForm('interaction'), console.log("botón nueva interacción")]}>
                                        <MaterialIcons name="wechat" style={[styles.styleIcon, activeForm === 'interaction' && { color: 'white', fontSize:26 }]} />
                                    </Pressable>
                                </View>
                                <View style={[styles.btnIcon, activeForm === 'reminder' && styles.btnActive]}>
                                    <Pressable onPress={()=>[setActiveForm('reminder'), console.log("botón nuevo recordatorio")]}>
                                        <FontAwesome5 name="calendar-alt" style={[styles.styleIcon, activeForm === 'reminder' && { color: 'white', fontSize:26 }]} />
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

            {/*ModalScreen.tsx-> molecules -> Modal de prueba*/}
            <ModalScreen visible={listVisible}>
                <ContacsListCard />
            </ModalScreen>
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
        paddingBottom: spacing.xl,
        alignItems:'center',
    },
    btnLeft:{ paddingLeft: spacing.xl },
    btnClose:{ fontSize: typography.fontSizeL },
    headerTitle:{
        fontSize: typography.fontSizeL,
        fontWeight: 'bold',
        letterSpacing: 1.5,
    },
    btnCenter:{
        flex: 1,
        alignItems: 'center',
        paddingRight: spacing.xl
    },
    modalContent:{
        width: '100%',
        alignItems: 'flex-start',
        paddingLeft: spacing.lg,
        paddingRight: spacing.lg,
        marginBottom: spacing.md,
    },
    containerAddContact:{
        width:'100%',
        marginBottom: 8,
    },
    btnContactSelect:{
        padding: 8,
        borderWidth:1,
        fontSize: typography.fontSizeM,
        borderLeftWidth: spacing.none,
        borderTopWidth: spacing.none,
        borderRightWidth: spacing.none,
        borderColor:'rgba(153, 149, 149, 0.53)',
        color: 'rgba(78, 76, 76, 0.78)',
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
    styleIcon: {
        fontSize: typography.fontSizeXL,
        color: colors.backgroundApp,
    },

    //<--Estilo al activarse el botón del footer-->
    btnActive:{ 
        backgroundColor: colors.backgroundApp, 
        borderRadius: spacing.xxl, 
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
    },
})