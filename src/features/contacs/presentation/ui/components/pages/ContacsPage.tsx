import { useCallback, useEffect, useRef, useState } from 'react';
import { View, ActivityIndicator, Alert, Linking, Platform, AppState, AppStateStatus } from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import ContacsTemplate from "../templates/ContacsTemplate";
import ContacsHeaderTemplate from "../templates/ContacsHeaderTemplate";
import ContacsListTemplate from "../templates/ContacsListTemplate";
import { UseContactsPermissionStore } from "../../../store/ContactsPermissionStore";
import { RootTabNavigation } from '@/shared/navigation/NavigatorTypes'; //Navegación tipada para acceder a cualquier vista desde componentes externos
import ConfirmRelMondal from '@/shared/ui/components/pages/ConfirmRelModal';
import { ContactEntity } from "@/features/contacs/domain/entities/ContactEntity";
import RelationshipFormModal  from '@/features/contacs/presentation/ui/components/pages/RelationshipFormModal'; // Modal para añadir relaciones
import CalendarModal from '@/shared/ui/components/organisms/CalendarModal';
import { useContactsWithRelationStore } from '../../../store/ContactsWithRelationStore';

export default function ContacsPage () {
    const { loading, permissionDenied, fetchContacts } = UseContactsPermissionStore(); //Estado global
    const navigation = useNavigation<RootTabNavigation>();
    const appState = useRef(AppState.currentState);
    const [AddRelationship, setAddRelationship] = useState(false);
    const [selectedContact, setSelectedContact] = useState<ContactEntity | null>(null);
    const [showFormModal, setShowFormModal] = useState(false);
    const [lastInteraction, setLastInteraction] = useState<string | null>(null);
    const [showCalendarModal, setShowCalendarModal] = useState(false);
    const [lastInteractionDate, setLastInteractionDate] = useState<Date | null>(null); //Selección de la fecha en el modal del calendario
    const [shouldPersistDateSelection, setShouldPersistDateSelection] = useState(false); //Mantiene la fecha seleccionada por el modal del calendario
    const { relatedContacts, fetchRelatedContacts } = useContactsWithRelationStore(); //Esto indica contactos ya creados como relación con zustand

    //Ordena los contactos en relacionados y no relacionados. Le pasamos la constante "contactsWithRelation" que contiene los contactos con relación y los deshabilita
    const sortedContacts = [...relatedContacts].sort((a, b) => {
        const aRelated = a.isRelated ? 1 : 0;
        const bRelated = b.isRelated ? 1 : 0;
        return aRelated - bRelated; // No relacionados primero
    });

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

    //Me indica cuales son los contactos creados con una relación
    useEffect(() => {
        fetchRelatedContacts();
    }, []);

    return (
        <View style={{ flex: 1, marginBottom:-25}}>
            <ContacsTemplate>
                <ContacsHeaderTemplate>
                    <View></View>
                </ContacsHeaderTemplate>

                {loading ? (
                    <ActivityIndicator size="large" color={"blue"} style={{ flex:1 }}/>
                ) : (
                    <ContacsListTemplate
                        contacts={sortedContacts}
                        onSelectContact={(contact) => {
                            if (contact.isRelated) return; // Desactiva si ya está relacionado
                            console.log("Contacto seleccionado:", contact.name)
                            setSelectedContact(contact); // Guarda el contacto seleccionado
                            setAddRelationship(true); // Muestra modal de crear relación
                        }}
                    />
                )}
                
                {/*Modal que se abre al seleccionar un contacto para indicarle si desea crear una relación */}
                <ConfirmRelMondal 
                    visible={AddRelationship} 
                    onClose={() => setAddRelationship(false)} 
                    contact={selectedContact} //Pasas el contacto seleccionado
                    onCreateRelationship={() => {
                        setAddRelationship(false); // Cierra modal actual
                        setShowFormModal(true); // Abre modal de formulario
                    }}
                />

                {/*Modal del formulario que crea la relación del contacto */}
                <RelationshipFormModal
                    visible={showFormModal} 
                    contact={selectedContact} //Pasas el contacto seleccionado
                    onClose={() => setShowFormModal(false)}
                    onCalendarModal={() => {
                        setShowCalendarModal(true); // Abre modal de calendario
                    }} 
                    lastInteraction={lastInteraction}
                    setLastInteraction={setLastInteraction}
                    lastInteractionDate={lastInteractionDate}
                    setLastInteractionDate={setLastInteractionDate}
                    shouldPersistDateSelection={shouldPersistDateSelection}
                    setShouldPersistDateSelection={setShouldPersistDateSelection}
                />

                {/*Modal del calendario del formulario*/}
                <CalendarModal 
                    visible={showCalendarModal} 
                    onClose={() => {
                        setShowCalendarModal(false);
                        //Si la última selección fue "ellipsis1", limpia el estado
                        if (lastInteraction === "ellipsis1" && !shouldPersistDateSelection) {
                          setLastInteraction(null);
                        }
                    }}
                    onConfirm={(selectedDate) => {
                        setLastInteractionDate(selectedDate); //Actualiza la fecha
                        setShowCalendarModal(false);
                    }}
                    defaultDate={lastInteractionDate || new Date()}
                    shouldPersistDateSelection={shouldPersistDateSelection}
                    setShouldPersistDateSelection={setShouldPersistDateSelection}
                />
            </ContacsTemplate>
        </View>
    );
}