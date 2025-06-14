import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SafeLayout from '../../../../../shared/components/layouts/SafeLayout';

const ContacsPage = () => {

    return (
        <SafeLayout>
            <View style={styles.container}>
                <Text style={styles.title}>¡Esta vista es del DashBoard!</Text>
            </View>
        </SafeLayout>
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

export default ContacsPage;