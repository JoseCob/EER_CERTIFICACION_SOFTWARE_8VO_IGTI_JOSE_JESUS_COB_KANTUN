import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress'; //Dependencia para crear la gráfica circular de progreso tipo anillo
import FontAwesome from '@expo/vector-icons/FontAwesome'; //Icono para la tarjeta de relaciones
import { colors, spacing, typography } from '@/shared/theme'; //Hoja de Estilos generales

export default function RelationshipGraph () {
    return (
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
    );
}

const styles = StyleSheet.create({
    graphicCard1:{
        width: '92%',
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: spacing.md,
        backgroundColor: colors.surface,
        overflow: 'hidden',
    },
    content:{
        maxWidth: '100%',
        maxHeight: '100%', 
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        margin: spacing.lg,
    },
    leftGraphic:{
        paddingTop: spacing.none,
        paddingBottom: spacing.none,
    },
    //Contenido del grafico derecho
    rightGraphic:{
        paddingTop: spacing.md,
        paddingBottom: spacing.md,
        paddingLeft: spacing.md,
        paddingRight: spacing.md,
        borderRadius: spacing.lg,
        borderWidth: .5,
        borderColor: 'rgba(139, 137, 137, 0.57)',
    },
    resultsSection:{
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    resultText:{
        margin: spacing.sm,
        textAlign: 'center',
        color: colors.backgroundApp,
        fontSize: typography.fontSizeL,
        fontWeight:'bold',
    },
    countText:{
        textAlign: 'center',
        margin: spacing.sm,
        color: colors.defaultColor,
        fontWeight: 'bold',
        fontSize: typography.fontSizeXL,
    },
    resultSubText:{
        fontSize: typography.fontSizeM,
        textAlign: 'center',
        color: '#a5a6a9',
    },
})