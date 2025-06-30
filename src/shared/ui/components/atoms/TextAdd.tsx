import React from "react";
import { StyleSheet, Text } from "react-native";
import { typography, colors } from "@/shared/theme";

export default function TextAdd () {
    return (
        <Text style={styles.textAdd}>Añadir</Text>
    );
}

const styles = StyleSheet.create({
    textAdd:{
        color: colors.backgroundApp,
        fontSize: typography.fontSizeM,
        fontWeight: '500',
        textAlign: 'center',
    }
})