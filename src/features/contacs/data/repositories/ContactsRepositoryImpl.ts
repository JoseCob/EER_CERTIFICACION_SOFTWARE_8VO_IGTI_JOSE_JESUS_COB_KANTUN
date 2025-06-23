import { ContactsRepository } from '../../domain/repositories/ContactsRepository';
import { ContactEntity } from '../../domain/entities/ContactEntity';
import { ContactsDataSource } from '../datasources/ContactsDataSource';

export class ContactsRepositoryImpl implements ContactsRepository {
    private dataSource = new ContactsDataSource();

    async getContacts(): Promise<ContactEntity[]> {
        const raw = (await this.dataSource.getRawContacts()).filter(c => c.id);
        return raw.map(c => ({
            id: c.id ?? '',
            name: c.name ?? '',
            image: c.imageAvailable ? c.image?.uri ?? null : null,
        }));
    }
}