import { create } from 'zustand';
import { FetchContactsUseCase } from '../../domain/usecases/FetchContactsUseCase';
import { ContactsRepositoryImpl } from '../../data/repositories/ContactsRepositoryImpl';
import { ContactEntity } from '../../domain/entities/ContactEntity';

type ContactsState  = {
    contacts: ContactEntity[];
    permissionDenied: boolean;
    loading: boolean;
    fetchContacts: () => Promise<void>;
};

const useCase = new FetchContactsUseCase(new ContactsRepositoryImpl());

export const UseContactsPermissionStore = create<ContactsState >((set) => ({
    contacts: [],
    permissionDenied: false,
    loading: false,
    
    fetchContacts: async () => {
        set({ loading: true });
        
        try {
            const contacts = await useCase.execute();
            set({ contacts, permissionDenied: false });

        } catch (e) {
            set({ permissionDenied: true });

        } finally {
            set({ loading: false });
        }
    }
}));