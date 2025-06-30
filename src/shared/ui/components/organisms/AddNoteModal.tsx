import React, { useState, useEffect } from "react";
import { Modal, View, Pressable, Text, TextInput, FlatList, StyleSheet, ScrollView } from "react-native";
import { spacing, colors, typography } from "@/shared/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import ContacsListCard from "@/features/contacs/presentation/ui/components/organisms/ContacsListCard";
import RelatedContactsModal from "@/shared/ui/components/pages/RelatedContactsModal";
import { useOnlyRelatedContactsStore } from "@/features/contacs/presentation/store/ContactsWithRelationStore";
import { ContactEntity } from "@/features/contacs/domain/entities/ContactEntity";
import { InteractionSection } from "@/features/home/presentation/ui/components/organisms/InteractionSection";
import { useRelationshipFormViewModel } from "@/features/contacs/presentation/viewmodels/useRelationshipFormViewModel";

interface Props {
  visible: boolean;
  onClose: () => void;
  onCalendarModal: () => void;
  lastInteractionDate: Date | null;
  setLastInteractionDate: React.Dispatch<React.SetStateAction<Date | null>>;
  selectedInteractionDate: string | null;
  setSelectedInteractionDate: React.Dispatch<React.SetStateAction<string | null>>;
}

const AddNoteModal: React.FC<Props> = ({ visible, onClose, onCalendarModal, lastInteractionDate, setLastInteractionDate, selectedInteractionDate, setSelectedInteractionDate}) => {
  const [listVisible, setListVisible] = useState(false);
  const [activeForm, setActiveForm] = useState<"note" | "interaction" | "reminder">("note");
  const formTitles = { note: "Nueva nota", interaction: "Nueva interacción", reminder: "Nuevo recordatorio"}; //Para hacer titulos dinamicos de acuerdo a la opción activa
  const { onlyRelatedContacts, fetchOnlyRelatedContacts } = useOnlyRelatedContactsStore();
  const [selectedInteractionType, setSelectedInteractionType] = useState<string | null>(null);

  const [noteText, setNoteText] = useState(""); //Para agregarle valor al campo de Tu nota
  
  const hasInteractionSelection = selectedInteractionType !== null && selectedInteractionDate !== null;
  const hasAnySelection = hasInteractionSelection;

  const [selectedContact, setSelectedContact] = useState<ContactEntity | null>(null);
  
  //Validaciones para el botón guardar 
  const isInteractionForm = activeForm === "interaction";
  const isNoteForm = activeForm === "note";
  const isReminderForm = activeForm === "reminder";

  // Condiciones mínimas para activar "Guardar"
  const isSaveEnabled = selectedContact !== null && (
    (isInteractionForm && hasAnySelection) || isNoteForm || isReminderForm
  );

  const { calculateDate } = useRelationshipFormViewModel(visible);

  //Carga los contactos solo relacionados
  useEffect(() => {
    if (listVisible) {
      fetchOnlyRelatedContacts();
    }
  }, [listVisible]);

  //Limpia los campos relacionados con interacción cuando cambiamos de formulario
  useEffect(() => {
    setSelectedInteractionType(null);
    setSelectedInteractionDate(null);
  }, [activeForm]);

  // Resetea todo al abrir el modal de nuevo
  useEffect(() => {
    if (visible) {
      setActiveForm("note"); //Establece el modal en Nueva nota
      setNoteText(""); //Limpia el TextInput de las notas
      setSelectedContact(null); //Limpia la selección del contacto
      setSelectedInteractionType(null); //Desmarca las opciones del tipo de interacción
      setSelectedInteractionDate(null); //Desmarca las fechas del tipo de interacción
    }
  }, [visible]);

  return (
    <View>
      {/* Modal principal */}
      <Modal transparent animationType="slide" visible={visible} onRequestClose={onClose}>
        <View style={styles.overlay}>
          <View style={styles.modalBox}>
            <View style={styles.modalHeader}>
              <View style={styles.btnLeft}>
                <Pressable onPress={onClose}>
                  <Text style={styles.btnClose}>X</Text>
                </Pressable>
              </View>
              <View style={styles.btnCenter}>
                <Text style={styles.headerTitle}>{formTitles[activeForm]}</Text>
              </View>
            </View>

            <View style={styles.modalContent}>
              <View style={styles.containerAddContact}>
                <Pressable onPress={() => setListVisible(true)}>
                  <Text style={[
                    styles.btnContactSelect,
                    selectedContact && { color: colors.backgroundApp, fontSize: typography.fontSizeL }
                  ]}>
                    {selectedContact ? selectedContact.name : "Agregar contacto"}
                  </Text>
                </Pressable>
              </View>
              <TextInput
                style={styles.textArea}
                multiline
                placeholder="Tu nota"
                value={noteText}
                onChangeText={setNoteText}

              />
              {activeForm === "interaction" && (
                <InteractionSection
                  selectedInteractionType={selectedInteractionType}
                  setSelectedInteractionType={setSelectedInteractionType}
                  selectedInteractionDate={selectedInteractionDate}
                  setSelectedInteractionDate={setSelectedInteractionDate}
                  lastInteractionDate={lastInteractionDate}
                  setLastInteractionDate={setLastInteractionDate}
                  onCalendarModal={onCalendarModal}
                  calculateDate={calculateDate}
                />
              )}
            </View>
            <View style={styles.modalFooter}>
              <View style={styles.btnIconLeft}>
                {["note", "interaction", "reminder"].map((type) => {
                  const isActive = activeForm === type;
                  const Icon =
                    type === "note"
                      ? Ionicons
                      : type === "interaction"
                      ? MaterialIcons
                      : FontAwesome5;
                  const iconName =
                    type === "note"
                      ? "document-text"
                      : type === "interaction"
                      ? "wechat"
                      : "calendar-alt";
                  const isDisabled = hasAnySelection && !isActive;
                  return (
                    <View key={type} style={[styles.btnIcon, isActive && styles.btnActive, isDisabled && { opacity: 0.3 }]}>
                      <Pressable onPress={() => setActiveForm(type as any)}
                        disabled={isDisabled}
                      >
                        <Icon name={iconName} style={[styles.styleIcon, (isActive || isDisabled) && { color: isActive ? "white" : "#ccc", fontSize: 26 }]} />                      
                      </Pressable>
                    </View>
                  );
                })}
              </View>
              <View style={styles.btnRight}>
                <Pressable onPress={() => 
                {
                  if (isSaveEnabled) {
                    console.log("Guardar nota");
                  }
                }}>
                  <Text style={[styles.saveText, { color: isSaveEnabled ? colors.backgroundApp : '#aaa' }]}>Guardar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal para seleccionar contacto relacionado */}
      <RelatedContactsModal visible={listVisible} onClose={() => setListVisible(false)}>
        <FlatList
          data={onlyRelatedContacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ContacsListCard
              contact={item}
              allowPressOnRelated
              onPress={() => {
                setSelectedContact(item);
                console.log("Contacto seleccionado:", item.name);
                setListVisible(false);
              }}
            />
          )}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ textAlign: "center", fontSize: typography.fontSizeL, color: "#666", marginHorizontal: spacing.lg }}>
                No se encontraron contactos relacionados, agrega relaciones para empezar a crear conexiones importantes
              </Text>
            </View>
          }
        />
      </RelatedContactsModal>
    </View>
  );
}
export default AddNoteModal;

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: "flex-start", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.44)" },
  modalBox: { width: "100%", alignItems: "center", marginTop: spacing.md, borderRadius: spacing.lg, paddingVertical: spacing.md, backgroundColor: colors.surface },
  modalHeader: { width: "100%", flexDirection: "row", padding: spacing.md, alignItems: "center" },
  btnLeft: { paddingLeft: spacing.lg },
  btnClose: { fontSize: typography.fontSizeL },
  headerTitle: { fontSize: typography.fontSizeL, fontWeight: "bold", letterSpacing: 1.5 },
  btnCenter: { flex: 1, alignItems: "center", paddingRight: spacing.lg },
  modalContent: { width: "100%", alignItems: "flex-start", paddingHorizontal: spacing.lg, marginBottom: spacing.md },
  containerAddContact: { width: "100%", marginBottom: 8 },
  btnContactSelect: { padding: 8, borderWidth: 1, fontSize: typography.fontSizeM, borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderColor: "rgba(153, 149, 149, 0.53)", color: "rgba(78, 76, 76, 0.78)" },
  textArea: { width: "100%", textAlignVertical: "top", height: 80, fontSize: 18 },
  modalFooter: { width: "100%", flexDirection: "row", alignItems: "center", borderTopWidth: 2, borderColor: "rgba(153, 149, 149, 0.53)" },
  btnIconLeft: { flexDirection: "row", backgroundColor: colors.surface, borderRadius: spacing.xl, marginLeft: spacing.lg, borderWidth: 1, marginTop: spacing.md, borderColor: "rgba(153, 149, 149, 0.53)" },
  btnIcon: { margin: -2, paddingHorizontal: spacing.lg, paddingVertical: spacing.md },
  styleIcon: { fontSize: typography.fontSizeXL, color: colors.backgroundApp },
  btnActive: { backgroundColor: colors.backgroundApp, borderRadius: spacing.xxl },
  btnRight: { flex: 1, paddingRight: spacing.lg, marginTop: spacing.md, alignItems: "flex-end" },
  saveText: { fontSize: typography.fontSizeM, color: "rgba(78, 76, 76, 0.78)" },
  //Estilos para los scrollView
  btnContainer: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginTop: spacing.md, overflow: 'hidden',},
  resultBtn:{borderWidth: 2, borderRadius: 80, padding: spacing.sm, marginLeft: spacing.lg, marginBottom: spacing.md, borderColor:'rgba(153, 149, 149, 0.53)',},
  //Estilo Activo
  resultBtnActive: { borderColor: colors.backgroundApp, backgroundColor: colors.backgroundApp,},
  resultText: { fontSize: typography.fontSizeM, color: 'rgba(68, 67, 67, 0.82)', fontWeight: '400',},
});