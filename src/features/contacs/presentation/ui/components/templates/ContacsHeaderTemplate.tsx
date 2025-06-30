import React from 'react';
import {StyleSheet, View} from 'react-native';
import { colors, spacing } from '@/shared/theme';
import ContacsHeader from '../atoms/ContacsHeader';
import AddContacsHeader from '../molecules/AddContacsHeader';
import ContacsSeparator from '../atoms/ContacsSeparator';

export default function ContacsHeaderTemplate ({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.headerContent}>
            <ContacsHeader />
            <AddContacsHeader />
            <ContacsSeparator />
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    headerContent:{
        position: 'relative',
        top: spacing.none,
        left: spacing.none,
        right: spacing.none,
        zIndex: 1,
        backgroundColor: colors.background,
    },
})