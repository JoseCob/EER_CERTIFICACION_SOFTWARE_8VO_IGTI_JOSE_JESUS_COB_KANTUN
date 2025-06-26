//Formulario para crear relaciones de los contactos
import React from "react";
import { StyleSheet, View, Text, Modal, Pressable, ScrollView, Image, TouchableOpacity } from "react-native";
import { spacing, typography, colors } from "@/shared/theme";
import { ContactEntity } from "@/features/contacs/domain/entities/ContactEntity";
import { GetContactInitials } from "@/shared/utils/GetContactInitials";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'; //Icono para interacciones y Tiempo
import AntDesign from '@expo/vector-icons/AntDesign'; //Icono para ver más del contenido
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; //Icono para calendario

//props para el modal
interface FormModalProps {
    /* Controla la visibilidad del modal */
    visible: boolean;
    /* Contenido que irá dentro del modal */
    onClose: () => void; // para cerrar/abrir el modal
    contact: ContactEntity | null; //Entidades de los datos del contacto
}

const RelationshipFormModal:React.FC<FormModalProps> = ({ visible, onClose, contact }) => {
    return (
        <Modal
            animationType="slide"
            visible={visible}
            onRequestClose={onClose} // Botón de retroceder desde Android(botón fisico del celular)
        >
            <View style={styles.modalHeader}>
                <Pressable onPress={()=> {
                    onClose(); 
                    console.log("Botón cancelar modal");
                }}>
                    <Text style={styles.textCancel}>Cancelar</Text>
                </Pressable>
                <Text style={styles.titleText}>Nueva relación</Text>
                <Pressable onPress={()=> {
                    console.log("Botón añadir relación");
                }}>
                    <Text style={styles.textAdd}>Añadir</Text>
                </Pressable>
            </View>
            <ScrollView>
                {contact && (
                    <View style={styles.contactInfo}>
                        {/*Imagen del contacto*/}
                        {contact.image ? (
                            <Image
                                source={{ uri: contact.image }}
                                style={styles.contacImage}
                            />
                        ) : (
                            //Muestra las iniciales del contacto
                            <View style={styles.contactIcon}>
                                <Text style={styles.initials}>{GetContactInitials(contact.name)}</Text>
                            </View>
                        )}
                        <View style={{marginBottom: spacing.lg}}> 
                            {/*Nombre del contacto*/}
                            <Text style={styles.modalUser}>
                                {contact.name}
                            </Text>
                        </View>
                    </View>
                )}
                <View style={styles.formBox}>
                    <View style={styles.textContainer}>
                        <MaterialIcons name="wechat" style={styles.styleIcon} />
                        <Text style={{fontSize: 17}}>¿Cuando fue la ultima vez que hablaron?</Text>
                    </View>
                    <ScrollView 
                      horizontal 
                      showsHorizontalScrollIndicator={false} 
                      contentContainerStyle={styles.btnContainer}
                    >
                        <TouchableOpacity style={styles.resultBtn}>
                            <Text style={styles.resultText}>Hoy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.resultBtn}>
                            <Text style={styles.resultText}>Ayer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.resultBtn}>
                            <Text style={styles.resultText}>Hace una semana</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.resultBtn}>
                            <Text style={styles.resultText}>Hace un mes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.resultBtn}
                            onPress={()=> console.log("Botón, abrir calendario")}
                        >
                            <AntDesign name="ellipsis1" style={styles.resultText} />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.formSeparator}></View>
                <View style={styles.formBox}>
                    <View style={styles.textContainer}>
                        <FontAwesome5 name="calendar-alt" style={styles.styleIcon} />
                        <Text style={{fontSize: 17}}>Recordatorio para este contacto</Text>
                    </View>
                    <ScrollView 
                      horizontal 
                      showsHorizontalScrollIndicator={false} 
                      contentContainerStyle={styles.btnContainer}
                    >
                        <TouchableOpacity style={styles.resultBtn}>
                            <Text style={styles.resultText}>Esta semana</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.resultBtn}>
                            <Text style={styles.resultText}>cada mes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.resultBtn}>
                            <Text style={styles.resultText}>Cada 3 meses</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.resultBtn}>
                            <Text style={styles.resultText}>No recordar</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.formSeparator}></View>
            </ScrollView>
        </Modal>
    );
}
export default RelationshipFormModal;

const styles = StyleSheet.create({
    modalHeader:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        padding: spacing.md,
        marginTop: spacing.xs,
    },
    textCancel:{
        color: 'rgba(78, 76, 76, 0.78)',
        fontSize: typography.fontSizeM,
        fontWeight:'500',
    },
    titleText:{
        fontWeight:'bold',
        letterSpacing: 1.5,
        fontSize: typography.fontSizeXL,
    },
    textAdd:{
        color: colors.backgroundApp,
        fontSize: typography.fontSizeM,
        fontWeight:'500',
    },

    //Estilos para el formulario de agregar relación
    contactInfo:{
        width:'100%',
        alignItems:'center',
        marginTop: spacing.xl,
        marginBottom: spacing.xl,
    },
    contacImage:{
        width: 140,
        height: 140,
        borderWidth: spacing.xs,
        borderColor: colors.titleText,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: spacing.lg,
    },
    contactIcon:{
        width: 125,
        height: 125,
        borderWidth: spacing.xs,
        borderColor: colors.titleText,
        borderRadius: 80,
        backgroundColor: "#fc7e56",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: spacing.lg,
    },
    initials: {
        color: colors.surface,
        fontWeight: 'bold',
        fontSize: 56,
    },
    modalUser:{
        textAlign: 'center',
        fontSize: typography.fontSizeL,
        color: colors.backgroundApp,
    },
    formBox:{
        paddingLeft: spacing.md,
        paddingTop: spacing.xl,
        paddingRight: spacing.md,
        paddingBottom: spacing.xl,
    },
    textContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        paddingRight: 28,
    },
    styleIcon:{
        fontSize: typography.fontSizeXL,
        color:colors.backgroundApp,
    },
    btnContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        marginTop: 16,
        overflow: 'hidden',
    },
    resultBtn:{
        borderWidth: 2,
        borderRadius: 80,
        padding: 8,
        marginLeft: 16,
        borderColor:'rgba(153, 149, 149, 0.53)',
    },
    resultText:{
        fontSize: typography.fontSizeM,
        color: 'rgba(68, 67, 67, 0.82)',
        fontWeight: '400',
    },
    formSeparator:{
        height: spacing.lg,
        backgroundColor: '#d8d7d7',
    },
})