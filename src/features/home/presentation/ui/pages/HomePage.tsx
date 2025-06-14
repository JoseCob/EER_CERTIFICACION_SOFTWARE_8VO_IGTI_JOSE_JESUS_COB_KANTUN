import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SafeLayout from '../../../../../shared/components/layouts/SafeLayout';

const HomePage = () => {

    return (
        <SafeLayout>
            <View style={styles.container}>
                <Text style={styles.title}>¡Bienvenido a la app CRM 😊!</Text>
            </View>
        </SafeLayout>
    );

};

const styles = StyleSheet.create({

    container:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title:{
        color: '#30307',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 20
    },
})

export default HomePage;