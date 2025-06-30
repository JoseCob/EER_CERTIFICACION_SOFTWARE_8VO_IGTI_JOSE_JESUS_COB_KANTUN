import React from "react";
import { StyleSheet, Text } from "react-native";
import { typography } from "@/shared/theme";

export default function TextCancel () {
    return (
        <Text style={styles.textCancel}>Cancelar</Text>
    );
}

const styles = StyleSheet.create({
    textCancel:{
        color: 'rgba(78, 76, 76, 0.78)',
        fontSize: typography.fontSizeM,
        fontWeight: '500',
        textAlign: 'center',
    }
})