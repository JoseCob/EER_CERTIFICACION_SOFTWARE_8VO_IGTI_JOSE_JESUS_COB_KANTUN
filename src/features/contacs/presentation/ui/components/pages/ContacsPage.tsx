import { useCallback, useEffect, useRef, useState } from 'react';
import { View, ActivityIndicator, Alert, Linking, Platform, AppState, AppStateStatus } from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import ContacsTemplate from "../templates/ContacsTemplate";
import ContacsHeaderTemplate from "../templates/ContacsHeaderTemplate";
import ContacsListTemplate from "../templates/ContacsListTemplate";
import { UseContactsPermissionStore } from "../../../store/ContactsPermissionStore";
import { RootTabNavigation } from '@/shared/navigation/NavigatorTypes'; //Navegación tipada para acceder a cualquier vista desde componentes externos
import AddRelationshipModal from '../molecules/AddRelationshipModal';
import { ContactEntity } from "@/features/contacs/domain/entities/ContactEntity";
import RelationshipFormModal from '../organisms/RelationshipFormModal';


export default function ContacsPage () {
    const { contacts, loading, permissionDenied, fetchContacts   } = UseContactsPermissionStore();
    const navigation = useNavigation<RootTabNavigation>();
    const appState = useRef(AppState.currentState);
    const [AddRelationship, setAddRelationship] = useState(false);
    const [selectedContact, setSelectedContact] = useState<ContactEntity | null>(null);
    const [showFormModal, setShowFormModal] = useState(false);
    
    // Detecta si la app vuelve del background (ej: después de abrir Configuración)
    useEffect(() => {
        const subscription = AppState.addEventListener('change', async (nextAppState: AppStateStatus) => {
            if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
                await fetchContacts(); // Intenta de nuevo cargar contactos
            }
            appState.current = nextAppState;
        });
        
        return () => {
            subscription.remove();
        };
    }, []);

    // Mustrar un alerta si sigue negado los permisos a contactos
    useFocusEffect(
        useCallback(() => {
            const check = async () => {
                await fetchContacts(); // Espera a que se actualice el estado
                const latest = UseContactsPermissionStore.getState().permissionDenied;

                if (latest) {
                    Alert.alert(
                        "Permiso requerido",
                        "Debes habilitar manualmente el acceso a contactos desde Configuración.",
                        [
                            {
                                text: "Ir a Configuración",
                                onPress: () => {
                                    if(Platform.OS === "android") Linking.openSettings();
                                },
                            },
                            {
                                text: "Ir al inicio",
                                onPress: () => navigation.navigate("Inicio" as never),
                            },
                        ]
                    );
                }
            };
            check();
        }, [navigation])
    );

    // Si ya fue redirigido, no renderizar esta vista
    if (permissionDenied) return null;

    return (
        <View style={{ flex: 1 }}>
            <ContacsTemplate>
                <ContacsHeaderTemplate>
                    <View></View>
                </ContacsHeaderTemplate>

                {loading ? (
                    <ActivityIndicator size="large" color={"blue"} style={{ flex:1 }}/>
                ) : (
                  <ContacsListTemplate
                    contacts={contacts}
                    onSelectContact={(contact) => {
                        console.log("Contacto seleccionado:", contact.name)
                        setSelectedContact(contact); // Guarda el contacto seleccionado
                        setAddRelationship(true); // Muestra modal de crear relación
                    }}
                  />
                )}
            </ContacsTemplate>

            {/*Modal que se abre al seleccionar un contacto para indicarle si desea crear una relación */}
            <AddRelationshipModal 
                visible={AddRelationship} 
                onClose={() => setAddRelationship(false)} 
                contact={selectedContact} //Pasas el contacto seleccionado
                onCreateRelationship={() => {
                    setAddRelationship(false); // Cierra modal actual
                    setShowFormModal(true);    // Abre modal de formulario
                }}
            />

            {/*Modal del formulario que crea la relación del contacto */}
            <RelationshipFormModal
                visible={showFormModal} 
                contact={selectedContact} //Pasas el contacto seleccionado
                onClose={() => setShowFormModal(false)} 
            />
        </View>
    );
}