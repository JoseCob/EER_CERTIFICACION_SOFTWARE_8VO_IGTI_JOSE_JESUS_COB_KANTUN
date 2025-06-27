//Formulario para crear relaciones de los contactos
import React,{useState, useEffect} from "react";
import { StyleSheet, View, Text, Modal, Pressable, ScrollView, Image, TouchableOpacity, TextInput } from "react-native";
import { spacing, typography, colors } from "@/shared/theme";
import { ContactEntity } from "@/features/contacs/domain/entities/ContactEntity";
import { GetContactInitials } from "@/shared/utils/GetContactInitials";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'; //Icono para interacciones e información familiar
import AntDesign from '@expo/vector-icons/AntDesign'; //Icono para ver más del contenido
import Ionicons from '@expo/vector-icons/Ionicons'; //Icono para etiquetas y notas
import { format } from "date-fns-tz";
import { es } from "date-fns/locale";

//props para el modal
interface FormModalProps {
    /* Controla la visibilidad del modal */
    visible: boolean;
    /* Contenido que irá dentro del modal */
    onClose: () => void; // para cerrar/abrir el modal
    contact: ContactEntity | null; //Entidades de los datos del contacto
    onCalendarModal: () => void; //para abrir el modal de calendario
    lastInteraction: string | null;
    setLastInteraction: React.Dispatch<React.SetStateAction<string | null>>;
    lastInteractionDate: Date | null;
    setLastInteractionDate: React.Dispatch<React.SetStateAction<Date | null>>;
    shouldPersistDateSelection: boolean;
    setShouldPersistDateSelection: React.Dispatch<React.SetStateAction<boolean>>;
}

const RelationshipFormModal:React.FC<FormModalProps> = ({ visible, onClose, contact, onCalendarModal, lastInteraction, setLastInteraction, lastInteractionDate, setLastInteractionDate, shouldPersistDateSelection, setShouldPersistDateSelection }) => {    
    const [selectedInteractionType, setSelectedInteractionType] = useState("Llamada");
    const [selectedTags, setSelectedTags] = useState<string[]>([]); //Sirve para mantener multiples opciones activas, en este caso para el campo de etiquetas

    const isEllipsisSelected = () => {
        return lastInteraction === "ellipsis1" || shouldPersistDateSelection;
    };

    //Calculamos las fecha del primer campo del formulario
    const calculateDate = (type: string): Date => {
        const now = new Date();
        now.setHours(0, 0, 0, 0); // quita la hora para evitar confusiones

        switch (type) {
            case "Hoy":
                return now;
            case "Ayer":
                return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
            case "Hace una semana":
                return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
            case "Hace un mes":
                return new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
            default:
                return now;
        }
    };

    //Carga siempre la categoria Llamada del campo oculto de la primera pregunta del formulario
    useEffect(() => {
        if ((lastInteraction || shouldPersistDateSelection)) {
            setSelectedInteractionType("Llamada");
        }
    }, [lastInteraction, shouldPersistDateSelection]);

    //Reinicia el formulario cada vez que se abre o es visible
    useEffect(() => {
        if (visible) {
            // Reinicia el formulario
            setSelectedInteractionType("Llamada");
            setSelectedTags([]);
            setLastInteraction(null);
            setLastInteractionDate(null);
            setShouldPersistDateSelection(false);
        }
    }, [visible]);

    const toggleTag = (tag: string) => {
        if (selectedTags.includes(tag)) {
            // Quita la etiqueta si ya está seleccionada
            setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
            // Agrega la etiqueta
            setSelectedTags([...selectedTags, tag]);
        }
    };

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
                    console.log("Botón guardar relación");
                }}>
                    <Text style={styles.textAdd}>Añadir</Text>
                </Pressable>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                {/*Campo de la primera pregunta*/}
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
                        <TouchableOpacity 
                            style={[
                                styles.resultBtn,
                                lastInteraction === "Hoy" && styles.resultBtnActive
                            ]}
                            onPress={() => {
                                const isSelected = lastInteraction === "Hoy";
                                setLastInteraction(isSelected ? null : "Hoy");
                                setLastInteractionDate(isSelected ? null : calculateDate("Hoy"));
                                setShouldPersistDateSelection(false); //Desactiva el estilo del ellipsis1 si esta activo
                            }}
                            
                        >
                            <Text style={[styles.resultText, lastInteraction === "Hoy" && {color: colors.surface}]}>Hoy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[
                                styles.resultBtn,
                                lastInteraction === "Ayer" && styles.resultBtnActive
                            ]}
                            onPress={() => {
                                const isSelected = lastInteraction === "Ayer";
                                setLastInteraction(isSelected ? null : "Ayer");
                                setLastInteractionDate(isSelected ? null : calculateDate("Ayer"));
                                setShouldPersistDateSelection(false); //Desactiva el estilo del ellipsis1 si esta activo
                            }}
                        >
                            <Text style={[styles.resultText, lastInteraction === "Ayer" && {color: colors.surface}]}>Ayer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[
                                styles.resultBtn,
                                lastInteraction === "Hace una semana" && styles.resultBtnActive
                            ]}
                            onPress={() => {
                                const isSelected = lastInteraction === "Hace una semana";
                                setLastInteraction(isSelected ? null : "Hace una semana");
                                setLastInteractionDate(isSelected ? null : calculateDate("Hace una semana"));
                                setShouldPersistDateSelection(false); //Desactiva el estilo del ellipsis1 si esta activo
                            }}
                        >
                            <Text style={[styles.resultText, lastInteraction === "Hace una semana" && {color: colors.surface}]}>Hace una semana</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[
                                styles.resultBtn,
                                lastInteraction === "Hace un mes" && styles.resultBtnActive
                            ]}
                            onPress={() => {
                                const isSelected = lastInteraction === "Hace un mes";
                                setLastInteraction(isSelected ? null : "Hace un mes");
                                setLastInteractionDate(isSelected ? null : calculateDate("Hace un mes"));
                                setShouldPersistDateSelection(false); //Desactiva el estilo del ellipsis1 si esta activo
                            }}
                        >
                            <Text style={[styles.resultText, lastInteraction === "Hace un mes" && {color: colors.surface}]}>Hace un mes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[
                                styles.resultBtn,
                                isEllipsisSelected() && styles.resultBtnActive
                            ]}
                            onPress={()=> {
                                console.log("Botón mostrar calendario");
                                setLastInteraction("ellipsis1");
                                onCalendarModal();
                            }}
                        >
                            <AntDesign name="ellipsis1" style={[styles.resultText, isEllipsisSelected() && { color: colors.surface }]} />
                        </TouchableOpacity>
                    </ScrollView>
                    {/*Contenido que se mantendra oculta hasta que el usuario seleccione alguna opción de la pregunta anterior */}
                    {(lastInteraction || shouldPersistDateSelection) && (
                        <View>
                            <View style={{flexDirection:'row', gap: spacing.xs, marginLeft: spacing.lg,}}>
                                <Text>Entonces, hablaron el</Text>
                                {/*Aqui se mostrala la fecha seleccionada por el usuario*/}
                                <TouchableOpacity
                                    onPress={()=> {
                                        console.log("Botón, mostrar calendario");
                                        setLastInteraction("ellipsis1"); // importante para mantener estilo activo
                                        onCalendarModal(); // abre el modal
                                    }}
                                >
                                    <Text style={{color: colors.backgroundApp}}>
                                        {lastInteractionDate ? format(lastInteractionDate, "d 'de' MMMM 'de' yyyy", { locale: es }) : "Sin fecha"}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView 
                              horizontal 
                              showsHorizontalScrollIndicator={false} 
                              contentContainerStyle={styles.btnContainer}
                            >
                                <TouchableOpacity 
                                    style={[
                                        styles.resultBtn,
                                        selectedInteractionType === "Llamada" && styles.resultBtnActive,
                                    ]}
                                    onPress={()=> {setSelectedInteractionType("Llamada")}}
                                >
                                    <Text style={[styles.resultText, selectedInteractionType === "Llamada" && { color: colors.surface }]}>Llamada</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={[
                                        styles.resultBtn,
                                        selectedInteractionType === "Mensaje" && styles.resultBtnActive,
                                    ]}
                                    onPress={()=> {setSelectedInteractionType("Mensaje")}}
                                >
                                    <Text style={[styles.resultText, selectedInteractionType === "Mensaje" && { color: colors.surface }]}>Mensaje</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={[
                                        styles.resultBtn,
                                        selectedInteractionType === "Correo" && styles.resultBtnActive,
                                    ]}
                                    onPress={()=> {setSelectedInteractionType("Correo")}}
                                >
                                    <Text style={[styles.resultText, selectedInteractionType === "Correo" && { color: colors.surface }]}>Correo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={[
                                        styles.resultBtn,
                                        selectedInteractionType === "Reunió en persona" && styles.resultBtnActive,
                                    ]}
                                    onPress={()=> {setSelectedInteractionType("Reunió en persona")}}
                                >
                                    <Text style={[styles.resultText, selectedInteractionType === "Reunió en persona" && { color: colors.surface }]}>Reunió en persona</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.resultBtn,
                                        selectedInteractionType === "Red social" && styles.resultBtnActive,
                                    ]}
                                    onPress={()=> {setSelectedInteractionType("Red social")}}
                                >
                                    <Text style={[styles.resultText, selectedInteractionType === "Red social" && { color: colors.surface }]}>Red social</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.resultBtn,
                                        selectedInteractionType === "Video llamada" && styles.resultBtnActive,
                                    ]}
                                    onPress={()=> {setSelectedInteractionType("Video llamada")}}
                                >
                                    <Text style={[styles.resultText, selectedInteractionType === "Video llamada" && { color: colors.surface }]}>Video llamada</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.resultBtn,
                                        selectedInteractionType === "Conferencia" && styles.resultBtnActive,
                                    ]}
                                    onPress={()=> {setSelectedInteractionType("Conferencia")}}
                                >
                                    <Text style={[styles.resultText, selectedInteractionType === "Conferencia" && { color: colors.surface }]}>Conferencia</Text>
                                </TouchableOpacity>
                            </ScrollView>
                            <View style={{alignItems:'center'}}>
                                <TextInput
                                    style={styles.textArea}
                                    multiline={true}
                                    placeholder='¿Alguna nota importante?'
                                />
                            </View>
                        </View>
                    )}
                </View>
                <View style={styles.formSeparator}></View>

                {/*Campo de la segunda pregunta*/}
                <View style={styles.formBox}>
                    <View style={styles.textContainer}>
                        <Ionicons name="pricetag-sharp" style={styles.styleIcon} />
                        <Text style={{fontSize: 17}}>¿Agregar etiqueta?</Text>
                    </View>
                    <View style={styles.tagsContainer}>
                        {[
                            "Cliente", "Amigo", "Familia", "Socio", "Favorito", "Conocido",
                            "Colaborador", "Reuniones", "Trabajo", "Mentor", "Subordinado", "Contacto frecuente"
                        ].map((tag) => (
                        <TouchableOpacity
                            key={tag}
                            style={[
                                styles.resultBtn,
                                selectedTags.includes(tag) && styles.resultBtnActive
                            ]}
                            onPress={() => toggleTag(tag)}
                        >
                            <Text 
                                style={[
                                    styles.resultText,
                                    selectedTags.includes(tag) && { color: colors.surface }
                                ]}
                            >
                                {tag}
                            </Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                </View>
                <View style={styles.formSeparator}></View>

                {/*Campo de la tercera pregunta*/}
                <View style={styles.formBox}>
                    <View style={styles.textContainer}>
                        <Ionicons name="document-text" style={styles.styleIcon} />
                        <Text style={{fontSize: 17}}>¿Añadir una nota general?</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <TextInput
                            style={styles.textArea}
                            multiline={true}
                            placeholder='Donde se conocieron, intereses, deportes, equipo, etc...'
                        />
                    </View>
                </View>
                <View style={styles.formSeparator}></View>
                {/*Campo de la cuarta pregunta*/}
                <View style={styles.formBox}>
                    <View style={styles.textContainer}>
                        <MaterialIcons name="family-restroom" style={styles.styleIcon} />
                        <Text style={{fontSize: 17}}>¿Información familiar?</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <TextInput
                            style={styles.textArea}
                            multiline={true}
                            placeholder='Hijos, esposa, esposo, hermanos, etc...'
                        />
                    </View>
                </View>
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
        paddingTop: spacing.md,
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
    textArea:{
        width: '92%',
        textAlignVertical: 'top',
        height: 80,
        fontSize: 18,
        marginTop: spacing.sm,
        marginLeft: spacing.lg,
        marginRight: spacing.lg,
        paddingLeft: spacing.lg,
        paddingRight: spacing.lg,
        borderColor: 'rgba(153, 149, 149, 0.53)',
        borderWidth: 1,
        borderRadius: spacing.sm,
    },
    btnContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        marginTop: spacing.lg,
        overflow: 'hidden',
    },
    tagsContainer:{
        flexDirection:'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: spacing.xs,
        marginTop: spacing.lg,
    },
    resultBtn:{
        borderWidth: 2,
        borderRadius: 80,
        padding: spacing.sm,
        marginLeft: spacing.lg,
        marginBottom: spacing.md,
        borderColor:'rgba(153, 149, 149, 0.53)',
    },
    //Estilo del boton activo
    resultBtnActive:{
        borderColor: colors.backgroundApp,
        backgroundColor: colors.backgroundApp,
    },
    resultText:{
        fontSize: typography.fontSizeM,
        color: 'rgba(68, 67, 67, 0.82)',
        fontWeight: '400',
    },
    formSeparator:{
        height: 20,
        backgroundColor: '#F2F2F2',
    },
})