import React from 'react';
import { ScrollView } from 'react-native';
import SafeLayout from '@/shared/components/layouts/SafeLayout';
import AddNoteFooter from "../molecules/AddNoteFooter";

export default function HomeTemplate({ children }: { children: React.ReactNode }) {
    return (
        <SafeLayout>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                {children}
            </ScrollView>
            <AddNoteFooter />
        </SafeLayout>
    );
}