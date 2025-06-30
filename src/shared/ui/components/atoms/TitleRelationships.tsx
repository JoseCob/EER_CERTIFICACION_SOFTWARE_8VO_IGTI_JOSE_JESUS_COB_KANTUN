import React from "react";
import { StyleSheet, Text } from "react-native";
import { typography } from "@/shared/theme";

export default function TitleRelationships () {
    return (
        <Text style={styles.titleText}>Relaciones</Text> 
    );
}

const styles = StyleSheet.create({
    titleText:{
        fontWeight: 'bold',
        letterSpacing: 1.5,
        fontSize: typography.fontSizeXL,
        textAlign:'center',
        flex: 3,
    }
})