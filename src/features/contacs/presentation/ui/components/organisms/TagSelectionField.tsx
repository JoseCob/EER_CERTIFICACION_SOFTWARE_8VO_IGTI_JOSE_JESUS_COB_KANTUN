import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { typography, spacing, colors } from "@/shared/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TAG_OPTIONS } from '@/features/contacs/domain/entities/TagsEntity'; //Contiene las etiquetas para agregarcelo al contacto

interface Props {
    selectedTags: string[];
    onToggleTag: (tag: string) => void;
}

export const TagSelectionField: React.FC<Props> = ({ selectedTags, onToggleTag }) => {
    return (
        <View style={styles.formBox}>
            <View style={styles.textContainer}>
                <Ionicons name="pricetag-sharp" style={styles.styleIcon} />
                <Text style={styles.title}>¿Agregar etiqueta?</Text>
            </View>

            <View style={styles.tagsContainer}>
                {TAG_OPTIONS.map((tag) => (
                    <TouchableOpacity
                        key={tag}
                        style={[
                            styles.resultBtn,
                            selectedTags.includes(tag) && styles.resultBtnActive
                        ]}
                        onPress={() => onToggleTag(tag)}
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
    tagsContainer: {
        flexDirection:'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: spacing.xs,
        marginTop: spacing.lg,
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
});