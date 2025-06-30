import React from 'react';
import { ScrollView } from 'react-native';
import SafeLayout from '@/shared/ui/components/layouts/SafeLayout';
import AddNoteFooter from "../molecules/AddNoteFooter";

export default function HomeTemplate({ children, onOpenNoteModal }: { children: React.ReactNode, onOpenNoteModal: () => void }) {
    return (
        <SafeLayout>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                {children}
            </ScrollView>
            <AddNoteFooter onPress={onOpenNoteModal}/>
        </SafeLayout>
    );
}