import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { colors, spacing } from '@/shared/theme' //Hoja de Estilos generales

interface Props {
  children: ReactNode;
}

export default function SafeLayout({ children }: Props) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.none, //El ancho que queremos dejar de margen entre los componentes
    backgroundColor: colors.background, //Color de fondo de las pantallas
  },
});