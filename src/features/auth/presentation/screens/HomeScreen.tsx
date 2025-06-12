import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>¡Bienvenido a la app de CRM 😊!</Text>
        </View>
    );

};

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        color: '#30307',
        fontWeight: 'bold',
        fontSize: 20,
    },
})

export default HomeScreen;