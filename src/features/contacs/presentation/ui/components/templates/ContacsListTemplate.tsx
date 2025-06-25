import React from 'react';
import { FlatList  } from 'react-native';
import ContacsListCard from '../organisms/ContacsListCard';
import { ContactEntity } from '@/features/contacs/domain/entities/ContactEntity'; // o la ruta correcta

interface Props {
    contacts: ContactEntity[];
    onSelectContact: (contact: ContactEntity) => void;
}

export default function ContacsListTemplate ({ contacts, onSelectContact }: Props ) {
    return (
        <FlatList 
            contentContainerStyle={{ paddingTop: 150 }} 
            showsVerticalScrollIndicator={false}
            data={contacts}
            keyExtractor={(item, index) => item.id || index.toString()}
            renderItem={({ item }) => (
                <ContacsListCard 
                    contact={item} 
                    onPress={() => {onSelectContact(item)}} 
                />
            )}
        />
    );
}