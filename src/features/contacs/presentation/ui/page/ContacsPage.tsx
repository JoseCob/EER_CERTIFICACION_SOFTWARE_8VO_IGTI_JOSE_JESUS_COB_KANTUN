import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons'; //Icono para agregar contactos
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import SafeLayout from '../../../../../shared/components/layouts/SafeLayout';
import { colors, spacing, typography } from '@/shared/theme' //Hoja de Estilos generales

const ContacsPage = () => {

    return (
        <SafeLayout>
            <View style={styles.headerContent}>
                <View style={styles.container}>
                    <Text style={styles.title}>Agrega Relaciones</Text>
                    <View style={styles.separator} />
                </View>
                <View style={styles.bodyContacs}>
                    <Pressable onPress={() => console.log("Botón agregar nuevo contacto")}>
                        {({pressed}) => (
                            <View style={[styles.btnAddContact, pressed && styles.pressedContact]}>
                                <Ionicons name="person-add-outline" style={styles.contactIcon} />
                                <Text style={styles.textAddContact}>Añadir Nuevo Contacto</Text>
                            </View>
                        )} 
                    </Pressable>
                </View>
                <View style={styles.lineContact}>
                    <View style={styles.separatorSecond} />
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <Pressable onPress={() => console.log("clic al botón del contacto")}>
                    {({pressed}) => (
                        <View style={[styles.btnAddContact, pressed && styles.pressedContact]}>
                            {/* Aqui va el icono del contacto */}
                            <Ionicons name="person-add-outline" style={styles.contactIcon} />
                            <Text style={styles.texContact}>Contacto 1</Text>
                        </View>
                    )} 
                </Pressable>
            </ScrollView>
        </SafeLayout>
    );
};

const styles = StyleSheet.create({
    scrollContainer:{
        paddingTop: 150,
    },
    headerContent:{
        position: 'absolute',
        top: spacing.none,
        left: spacing.none,
        right: spacing.none,
        zIndex: 1,
        backgroundColor: colors.background,
    },
    container:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 60,
    },
    title:{
        color: colors.titleText,
        fontWeight: 'bold',
        textTransform:'uppercase',
        fontSize: typography.fontSizeL,
    },
    separator:{
        height: 1, // Altura de la línea
        borderWidth: 1,
        width: '80%',
        borderColor: colors.backgroundApp, // Color de la línea
        marginVertical: 10, // Espacio vertical
    },
    bodyContacs:{
        marginTop: spacing.md,
    },
    btnAddContact:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 40,
        paddingTop: spacing.md,
        paddingBottom: spacing.md,
    },
    pressedContact:{
        backgroundColor: '#e3e3e3',
    },
    contactIcon:{
        borderRadius: 26,
        padding: spacing.md,
        marginRight: spacing.md,
        fontSize: typography.fontSizeXL,
        color: colors.surface,
        backgroundColor: colors.backgroundApp,
    },
    textAddContact:{
        color: colors.backgroundApp,
        fontSize: typography.fontSizeL,
    },
    texContact:{
        color: colors.defaultColor,
        fontSize: 18,
    },
    lineContact:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    separatorSecond:{
        height: 1, // Altura de la línea
        borderWidth: 1,
        width: '88%',
        borderColor: 'rgba(185, 184, 184, 0.24)', // Color de la línea
        marginVertical: 2, // Espacio vertical
    },
})

export default ContacsPage;