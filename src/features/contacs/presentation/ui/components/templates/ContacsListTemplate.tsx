import React from 'react';
import { ScrollView } from 'react-native';
import ContacsListCard from '../organisms/ContacsListCard';

export default function ContacsListTemplate ({ children }: { children: React.ReactNode }) {
    return (
        <ScrollView contentContainerStyle={{ paddingTop: 150 }} showsVerticalScrollIndicator={false}>
            <ContacsListCard />
            {children}
        </ScrollView>
    );
}