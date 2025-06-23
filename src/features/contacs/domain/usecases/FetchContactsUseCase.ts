import { ContactsRepository } from '../repositories/ContactsRepository';
import { ContactEntity } from '../entities/ContactEntity';

export class FetchContactsUseCase {
    constructor(private repository: ContactsRepository) {}
    
    async execute(): Promise<ContactEntity[]> {
        return this.repository.getContacts();
    }
}