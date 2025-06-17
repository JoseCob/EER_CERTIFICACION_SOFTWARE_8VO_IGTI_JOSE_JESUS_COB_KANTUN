import React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome'; //Icono para la tarjeta de relaciones
import { AnimatedCircularProgress } from 'react-native-circular-progress'; //Dependencia para crear la gráfica circular de progreso tipo anillo
import { StyleSheet, Text, View } from "react-native";
import SafeLayout from '../../../../../shared/components/layouts/SafeLayout';

const DashPage = () => {

    return (
        <SafeLayout>
            <View style={styles.container}>
                <View style={styles.graphicCard1}>
                    <View style={styles.content}>
                        <View style={styles.leftGraphic}>
                            <View style={styles.resultsSection}>
                                <AnimatedCircularProgress
                                    size={150}
                                    width={10}
                                    fill={33} // Porcentaje (ej. 33%)
                                    tintColor="tomato"
                                    backgroundColor="#e5e7eb"
                                    duration={800}
                                >
                                    {() => (
                                        <View>
                                            <Text style={styles.countText}>1/3</Text>
                                            <Text style={styles.resultSubText}>Recordatorios hechos</Text>
                                        </View>
                                    )}
                                </AnimatedCircularProgress>
                                <Text style={styles.resultText}>Esta semana</Text>
                            </View>
                        </View>
                        <View style={styles.rightGraphic}>
                            <View style={styles.resultsSection}>
                                <Text style={styles.resultText}>Relaciones</Text>
                                <FontAwesome name="group" style={styles.resultText}/>
                                <Text style={styles.countText}>4</Text>
                            </View>
                        </View>
                    </View>
                </View>
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
    graphicCard1:{
        width:'92%',
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius:12,
        backgroundColor: "white",
        overflow: 'hidden',
    },
    content:{
        maxWidth: '100%',
        maxHeight: '100%', 
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems:'center',
        margin: 16,
    },
    leftGraphic:{
        paddingTop: 0,
        paddingBottom: 0,
    },
    //Contenido del grafico derecho
    rightGraphic:{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 16,
        borderWidth: .5,
        borderColor: 'rgba(139, 137, 137, 0.57)',
    },
    resultsSection:{
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
    },
    resultText:{
        margin: 8,
        textAlign:'center',
        color:'tomato',
        fontSize: 20,
    },
    countText:{
        textAlign:'center',
        margin: 8,
        color: 'black',
        fontWeight:'bold',
        fontSize: 24,
    },
    resultSubText:{
        fontSize:16,
        textAlign:'center',
        color:'#a5a6a9',
    },
})

export default DashPage;