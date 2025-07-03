import { ContactsRepository } from '../repositories/ContactsRepository';
import { ContactEntity } from '../entities/ContactEntity';

//Caso de uso que encapsula la lógica para obtener los contactos
export class FetchContactsUseCase {
    constructor(private repository: ContactsRepository) {}
    
    //Este UseCase define que obtendra los contactos desde el repositorio del dominio
    async execute(): Promise<ContactEntity[]> {
        return this.repository.getContacts();
    }
}