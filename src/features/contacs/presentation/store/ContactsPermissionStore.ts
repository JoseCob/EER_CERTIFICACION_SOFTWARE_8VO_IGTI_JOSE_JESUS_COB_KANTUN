import { create } from 'zustand';
import { FetchContactsUseCase } from '../../domain/usecases/FetchContactsUseCase';
import { ContactsRepositoryImpl } from '../../data/repositories/ContactsRepositoryImpl';
import { ContactEntity } from '../../domain/entities/ContactEntity';

type ContactsState  = {
    contacts: ContactEntity[];
    permissionDenied: boolean;
    loading: boolean;
    fetchContacts: () => Promise<void>; //Definimos la función para obtener los contactos y se lo pasamos al viewmodel
};

//Cumple con la logica encapsulada, Le decimos que le daremos los datos del contactos desde repositorio implementario al useCase
const useCase = new FetchContactsUseCase(new ContactsRepositoryImpl());

// Zustand Store que gestiona el estado de contactos y permisos en la vista
export const UseContactsPermissionStore = create<ContactsState >((set) => ({
    //Pasamos nuestros datos tipados
    contacts: [],
    permissionDenied: false,
    loading: false,
    
    //Función que realiza la busqueda de los contactos en tiempo real(refresca la pantalla con estos datos)
    fetchContacts: async () => {
        set({ loading: true });
        
        try {
            const contacts = await useCase.execute(); //Espera recibir la función "execute" del useCase "FetchContactsUseCase"
            set({ contacts, permissionDenied: false });

        } catch (e) {
            set({ permissionDenied: true });

        } finally {
            set({ loading: false });
        }
    }
}));