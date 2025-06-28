import { create } from 'zustand';
import { ContactEntity } from '@/features/contacs/domain/entities/ContactEntity';
import { ContactsWithRelationRepository } from '../../data/repositories/ContactsWithRelationRepositoryImpl';

interface State {
    relatedContacts: ContactEntity[];
    fetchRelatedContacts: () => Promise<void>;
}

export const useContactsWithRelationStore = create<State>((set) => ({
    relatedContacts: [],
    fetchRelatedContacts: async () => {
        const repo = new ContactsWithRelationRepository();
        const result = await repo.getContactsWithRelationStatus();
        set({ relatedContacts: result });
    },
}));