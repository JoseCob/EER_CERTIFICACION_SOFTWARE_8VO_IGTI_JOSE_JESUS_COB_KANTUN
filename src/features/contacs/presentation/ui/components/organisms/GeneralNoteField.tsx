import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, typography } from '@/shared/theme';

interface Props {
  generalNote: string;
  setGeneralNote: (text: string) => void;
}

export default function GeneralNoteField({ generalNote, setGeneralNote }: Props) {
    return (
        <View style={styles.formBox}>
            <View style={styles.textContainer}>
                <Ionicons name="document-text" style={styles.styleIcon} />
                <Text style={{ fontSize: 17 }}>¿Añadir una nota general?</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TextInput
                    style={styles.textArea}
                    multiline={true}
                    placeholder='Donde se conocieron, intereses, deportes, equipo, etc...'
                    value={generalNote}
                    onChangeText={setGeneralNote}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    formBox: {
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
        color: colors.backgroundApp,
    },
    textArea: {
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