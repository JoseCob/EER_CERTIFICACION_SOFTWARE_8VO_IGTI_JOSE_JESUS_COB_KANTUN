import React from "react";
import { StyleSheet, View } from "react-native";

export default function ContacsSeparator () {
    return (
        <View style={styles.lineContact}>
            <View style={styles.separatorSecond} />
        </View>
    );
}

const styles = StyleSheet.create({
    lineContact:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    separatorSecond:{
        height: 1, // Altura de la línea
        borderWidth: 1,
        width: '88%',
        borderColor: 'rgba(185, 184, 184, 0.24)', // Color de la línea
        marginVertical: 2, // Espacio vertical
    },
})