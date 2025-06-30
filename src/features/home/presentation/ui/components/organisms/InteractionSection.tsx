import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { format } from "date-fns-tz";
import { es } from "date-fns/locale";
import { spacing, typography, colors } from "@/shared/theme";

interface Props {
    selectedInteractionType: string | null;
    setSelectedInteractionType: (type: string | null) => void;
    selectedInteractionDate: string | null;
    setSelectedInteractionDate: (date: string | null) => void;
    lastInteractionDate: Date | null;
    setLastInteractionDate: (date: Date | null) => void;
    onCalendarModal: () => void;
    calculateDate: (label: string) => Date; 
}

export const InteractionSection: React.FC<Props> = ({
    selectedInteractionType,
    setSelectedInteractionType,
    selectedInteractionDate,
    setSelectedInteractionDate,
    lastInteractionDate,
    setLastInteractionDate,
    onCalendarModal,
    calculateDate,
}) => {
  return (
    <View style={{ width: "100%", marginTop: spacing.xs }}>
        <Text style={{ fontSize: typography.fontSizeM, fontWeight: "bold" }}>
          ¿Cómo y cuando se pusieron al día?
        </Text>

        {/* Tipos de interacción */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: spacing.sm, marginTop: spacing.md }}>
            {["Llamada", "Mensaje", "Correo", "Reunión en persona", "Red social", "Videollamada", "Conferencia"].map((type) => {
                const isActive = selectedInteractionType === type;
                return (
                    <Pressable
                      key={type}
                      style={[
                        { borderWidth: 2, borderRadius: 80, padding: spacing.sm, marginLeft: spacing.lg, marginBottom: spacing.md, borderColor: 'rgba(153, 149, 149, 0.53)' },
                        isActive && { borderColor: colors.backgroundApp, backgroundColor: colors.backgroundApp },
                      ]}
                      onPress={() =>
                        setSelectedInteractionType(isActive ? null : type)
                      }
                    >
                      <Text style={[
                        { fontSize: typography.fontSizeM, color: 'rgba(68, 67, 67, 0.82)', fontWeight: '400' },
                        isActive && { color: colors.surface },
                      ]}>
                        {type}
                      </Text>
                    </Pressable>
                );
            })}
        </ScrollView>

        {/* Fecha seleccionada */}
        <View style={{ flexDirection: 'row', gap: spacing.xs, marginLeft: 18 }}>
          <Text>Entonces, hablaron el</Text>
            <Pressable 
                onPress={() => {
                    setSelectedInteractionDate("ellipsis1");
                    onCalendarModal();
                }}
            >
            <Text style={{ color: colors.backgroundApp }}>
              {lastInteractionDate
                ? format(lastInteractionDate, "d 'de' MMMM 'de' yyyy", { locale: es })
                : "Sin fecha"}
            </Text>
          </Pressable>
        </View>

        {/* Fechas predefinidas */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', gap: spacing.sm, marginTop: spacing.md}}>
            {["Hoy", "Ayer", "Hace una semana", "Hace un mes"].map((label) => {
                const isActive = selectedInteractionDate === label;
                return (
                    <Pressable
                        key={label}
                        style={[
                            { borderWidth: 2, borderRadius: 80, padding: spacing.sm, marginLeft: spacing.lg, marginBottom: spacing.md, borderColor: 'rgba(153, 149, 149, 0.53)'},
                            isActive && { borderColor: colors.backgroundApp, backgroundColor: colors.backgroundApp },
                        ]}
                        onPress={() =>{
                            const isSelected = selectedInteractionDate === label;
                            setSelectedInteractionDate(isSelected  ? null : label);
                            setLastInteractionDate(isSelected ? null : calculateDate(label)); 
                        }}
                    >
                        <Text style={[
                            { fontSize: typography.fontSizeM, color: 'rgba(68, 67, 67, 0.82)', fontWeight: '400'},
                                isActive && { color: colors.surface },
                            ]}
                        >
                            {label}
                        </Text>
                    </Pressable>
                );
            })}
            <Pressable
                style={[
                    { borderWidth: 2, borderRadius: 80, padding: spacing.sm, marginLeft: spacing.lg, marginBottom: spacing.md, borderColor: 'rgba(153, 149, 149, 0.53)' },
                    selectedInteractionDate === "ellipsis1" && { borderColor: colors.backgroundApp, backgroundColor: colors.backgroundApp },
                ]}
                onPress={() => {
                    const isSelected = selectedInteractionDate === "ellipsis1";
                        setSelectedInteractionDate(isSelected ? null : "ellipsis1");
                    if (!isSelected) onCalendarModal();
                }}
            >
                <AntDesign
                    name="ellipsis1"
                    style={[
                        { fontSize: typography.fontSizeL, color: 'rgba(68, 67, 67, 0.82)', fontWeight: '400' },
                        selectedInteractionDate === "ellipsis1" && { color: colors.surface },
                    ]}
                />
            </Pressable>
        </ScrollView>
    </View>
  );
};