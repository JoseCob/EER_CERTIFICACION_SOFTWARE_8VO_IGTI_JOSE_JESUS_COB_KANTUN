import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { format } from "date-fns-tz";
import { es } from "date-fns/locale";
import { typography, spacing, colors } from "@/shared/theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface Props {
    lastInteraction: string | null;
    onSelect: (label: string | null, date: Date | null) => void;
    onOpenCalendar: () => void;
    isEllipsisSelected: boolean;
    lastInteractionDate: Date | null;
    interactionType: string;
    setInteractionType: (value: string) => void;
    someNote: string;
    setSomeNote: (text: string) => void;
    calculateDate: (label: string) => Date; //Llamamos a la función calcular fecha de las ultimas interaciones
    setShouldPersistDateSelection: (value: boolean) => void;
}

export const InteractionDateField: React.FC<Props> = ({
    lastInteraction,
    onSelect,
    onOpenCalendar,
    isEllipsisSelected,
    lastInteractionDate,
    interactionType,
    setInteractionType,
    someNote,
    setSomeNote,
    calculateDate,
    setShouldPersistDateSelection,
}) => {

    const predefinedOptions = ["Hoy", "Ayer", "Hace una semana", "Hace un mes"];
    const interactionTypes = ["Llamada", "Mensaje", "Correo", "Reunió en persona", "Red social", "Video llamada", "Conferencia"];

    return (
        <View style={ styles.formBox }>
            <View style={styles.textContainer}>
                <MaterialIcons name="wechat" style={styles.styleIcon} />
                <Text style={styles.title}>¿Cuándo fue la última vez que hablaron?</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.btnContainer}>
                {predefinedOptions.map(option => {
                    const isActive = lastInteraction === option;
                    return (
                        <TouchableOpacity
                            key={option}
                            style={[styles.resultBtn, isActive && styles.resultBtnActive]}
                            onPress={() => {
                                const isSelected = lastInteraction === option;
                                onSelect(isSelected ? null : option, isSelected ? null : calculateDate(option));

                            }}
                        >
                            <Text style={[styles.resultText, isActive && { color: colors.surface }]}>{option}</Text>
                        </TouchableOpacity>
                    );
                })}

                <TouchableOpacity
                    style={[styles.resultBtn, isEllipsisSelected && styles.resultBtnActive]}
                    onPress={() => {
                        onSelect("ellipsis1", null);
                        setShouldPersistDateSelection(true);
                        onOpenCalendar();
                    }}
                >
                    <AntDesign name="ellipsis1" style={[styles.resultText, isEllipsisSelected && { color: colors.surface }]} />
                </TouchableOpacity>
            </ScrollView>

            {(lastInteraction || isEllipsisSelected) && (
                <View style={{ marginTop: spacing.md }}>
                    <View style={{ flexDirection: 'row', gap: spacing.xs, marginLeft: spacing.lg }}>
                        <Text>Entonces, hablaron el</Text>
                        <TouchableOpacity onPress={onOpenCalendar}>
                            <Text style={{ color: colors.backgroundApp }}>
                                {lastInteractionDate ? format(lastInteractionDate, "d 'de' MMMM 'de' yyyy", { locale: es }) : "Sin fecha"}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.btnContainer}>
                        {interactionTypes.map(type => (
                            <TouchableOpacity
                                key={type}
                                style={[styles.resultBtn, interactionType === type && styles.resultBtnActive]}
                                onPress={() => setInteractionType(type)}
                            >
                                <Text style={[styles.resultText, interactionType === type && { color: colors.surface }]}>{type}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>

                    <View style={{ alignItems: 'center' }}>
                        <TextInput
                            style={styles.textArea}
                            multiline={true}
                            placeholder='¿Alguna nota importante?'
                            value={someNote}
                            onChangeText={setSomeNote}
                        />
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    formBox:{
        paddingLeft: spacing.md,
        paddingTop: spacing.md,
        paddingRight: spacing.md,
        paddingBottom: spacing.xl,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        paddingRight: 28,
    },
    styleIcon: {
        fontSize: typography.fontSizeXL,
        color:colors.backgroundApp,
    },
    title: {
        fontSize: 17,
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        marginTop: spacing.lg,
        overflow: 'hidden',
    },
    resultBtn: {
        borderWidth: 2,
        borderRadius: 80,
        padding: spacing.sm,
        marginLeft: spacing.lg,
        marginBottom: spacing.md,
        borderColor:'rgba(153, 149, 149, 0.53)',
    },
    resultBtnActive: {
        borderColor: colors.backgroundApp,
        backgroundColor: colors.backgroundApp,
    },
    resultText: {
        fontSize: typography.fontSizeM,
        color: 'rgba(68, 67, 67, 0.82)',
        fontWeight: '400',
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
});