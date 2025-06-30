import React from "react";
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { typography } from "@/shared/theme";
import { ModalBaseProps } from "@/shared/types/ui";
import { ContactEntity } from "@/features/contacs/domain/entities/ContactEntity";
import { useContactsWithRelationStore } from "../../../store/ContactsWithRelationStore";
import { useRelationshipStatsStore } from "@/features/dashboard/presentation/store/RelationshipStatsStore";
import { useRelationshipFormViewModel } from "../../../viewmodels/useRelationshipFormViewModel";
import { insertRelationship } from "@/core/database/migrations/tables/RelationshipDB";
// ---- Archivos de los componentes de la UI ---- //
import ModalFullScreenTemplate from "@/shared/ui/components/templates/ModalFullScreenTemplate";
import ModalHeader from "@/shared/ui/components/organisms/ModalHeader";
import ButtonCancel from "@/shared/ui/components/molecules/ButtonCancel";
import TextAdd from "@/shared/ui/components/atoms/TextAdd";
import RelationshipsFormTemplate from "../templates/RelationshipsFormTemplate";
import { InteractionDateField } from "../organisms/InteractionDateField";
import { TagSelectionField } from "../organisms/TagSelectionField";
import GeneralNoteField from "../organisms/GeneralNoteField";
import FamilyInfoField from "../organisms/FamilyInfoField";

interface FormModalProps extends ModalBaseProps {
  contact: ContactEntity | null;
  onCalendarModal: () => void;
  lastInteraction: string | null;
  setLastInteraction: React.Dispatch<React.SetStateAction<string | null>>;
  lastInteractionDate: Date | null;
  setLastInteractionDate: React.Dispatch<React.SetStateAction<Date | null>>;
  shouldPersistDateSelection: boolean;
  setShouldPersistDateSelection: React.Dispatch<React.SetStateAction<boolean>>;
}
const RelationshipFormModal:React.FC<FormModalProps> = ({ 
    visible, onClose, contact, onCalendarModal, lastInteraction,
    setLastInteraction, lastInteractionDate, setLastInteractionDate, shouldPersistDateSelection, setShouldPersistDateSelection
}) => {
    const { form, setForm, toggleTag, calculateDate, resetForm } = useRelationshipFormViewModel(visible)
    
    // Funcion que cierra el modal con el botón cancelar para este formulario
    const handleClose = () => {
        setLastInteraction(null);
        setLastInteractionDate(null);
        setShouldPersistDateSelection(false);
        resetForm();
        onClose();
    };

    return (
        <View style={{ flex: 1 }}>
            <ModalFullScreenTemplate visible={visible} onClose={onClose}>
                <ModalHeader>
                    <ButtonCancel onClose={handleClose} visible/>
                    <Text style={styles.titleText}>Nueva relación</Text>
                    <View style={{marginRight: 4, flex: 1, }}>
                        <Pressable onPress={async () => {
                            if (contact) {
                                try {
                                    await insertRelationship(
                                        contact.id,
                                        contact.name,
                                        form.interactionDate instanceof Date ? form.interactionDate.toISOString() : '', //La fecha puede ser vacia
                                        form.interactionType,
                                        form.someNote,
                                        form.tags,
                                        form.generalNote,
                                        form.familyInfo
                                    );
                                    useContactsWithRelationStore.getState().fetchRelatedContacts(); //Almacena en tiempo real con zustand
                                    useRelationshipStatsStore.getState().fetchCount(); //Muestra en tiempo real el contador del dashboard de relaciones
                                    console.log("Relación guardada por SQLite al usuario:", contact.name);
                                    onClose(); // Cierra el modal al guardar
                                } catch (error: any) {
                                    if (error.message.includes("UNIQUE constraint failed")){
                                        console.log("No se pudo guardar en SQLite porque ya existe");
                                    }
                                }
                            }
                        }}>
                            <TextAdd />
                        </Pressable>
                    </View>
                </ModalHeader>

                <RelationshipsFormTemplate contact={contact}>
                    <InteractionDateField
                        lastInteraction={lastInteraction}
                        onSelect={(label, date) => {
                            setLastInteraction(label);
                            setLastInteractionDate(date);
                            setForm((prev) => ({
                                ...prev,
                                interactionDate: date,
                            }));
                            setShouldPersistDateSelection(false); // Desactiva el estilo del botón ellipsis1
                        }}
                        onOpenCalendar={onCalendarModal}
                        isEllipsisSelected={!!shouldPersistDateSelection && lastInteraction === "ellipsis1"}
                        lastInteractionDate={lastInteractionDate}
                        interactionType={form.interactionType}
                        setInteractionType={(value) => setForm({ ...form, interactionType: value })}
                        someNote={form.someNote}
                        setSomeNote={(text) => setForm({ ...form, someNote: text })}
                        calculateDate={calculateDate}
                        setShouldPersistDateSelection={setShouldPersistDateSelection}
                    />
                    <TagSelectionField
                        selectedTags={form.tags}
                        onToggleTag={toggleTag}
                    />
                    <GeneralNoteField
                        generalNote={form.generalNote}
                        setGeneralNote={(text) => setForm({ ...form, generalNote: text })}
                    />

                    <FamilyInfoField
                        familyInfo={form.familyInfo}
                        setFamilyInfo={(text) => setForm({ ...form, familyInfo: text })}
                    />
                </RelationshipsFormTemplate>
            </ModalFullScreenTemplate>
        </View>
    );
}
export default RelationshipFormModal;

const styles = StyleSheet.create({
    titleText:{
        fontWeight: 'bold',
        letterSpacing: 1.5,
        fontSize: typography.fontSizeXL,
        textAlign:'center',
        flex: 3,
    },
})