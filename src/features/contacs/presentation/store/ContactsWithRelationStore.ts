import { create } from 'zustand';
import { ContactEntity } from '@/features/contacs/domain/entities/ContactEntity';
import { ContactsWithRelationRepository, RelatedOnlyContactsRepository } from '../../data/repositories/ContactsWithRelationRepositoryImpl';

interface State {
    relatedContacts: ContactEntity[];
    fetchRelatedContacts: () => Promise<void>;
}

//Interface para filtar solo contactos relacionados
interface RelatedContactsState {
    onlyRelatedContacts: ContactEntity[];
    fetchOnlyRelatedContacts: () => Promise<void>;
}


export const useContactsWithRelationStore = create<State>((set) => ({
    relatedContacts: [],
    fetchRelatedContacts: async () => {
        const repo = new ContactsWithRelationRepository();
        const result = await repo.getContactsWithRelationStatus();
        set({ relatedContacts: result });
    },
}));

//Función Solo para contactos relacionados
export const useOnlyRelatedContactsStore = create<RelatedContactsState>((set) => ({
    onlyRelatedContacts: [],
    fetchOnlyRelatedContacts: async () => {
        const repo = new RelatedOnlyContactsRepository();
        const result = await repo.getOnlyRelatedContacts();
        set({ onlyRelatedContacts: result });
    },
}));