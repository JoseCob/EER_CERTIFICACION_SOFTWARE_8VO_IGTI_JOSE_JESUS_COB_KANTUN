import { ContactEntity } from '../entities/ContactEntity';

//Contrato que define las operaciones disponibles para obtener contactos desde cualquier fuente de datos
export interface ContactsRepository {
    getContacts(): Promise<ContactEntity[]>;
}