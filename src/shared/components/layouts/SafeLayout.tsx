import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

interface Props {
  children: ReactNode;
}

export default function SafeLayout({ children }: Props) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0, //El ancho que queremos dejar de margen entre los componentes
    backgroundColor: '#eaecf1', //Color de fondo de las pantallas
  },
});