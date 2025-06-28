import { ContactsRepository } from '../../domain/repositories/ContactsRepository';
import { ContactEntity } from '../../domain/entities/ContactEntity';
import { ContactsDataSource } from '../datasources/ContactsDataSource';

export class ContactsRepositoryImpl implements ContactsRepository {
    private dataSource = new ContactsDataSource();

    async getContacts(): Promise<ContactEntity[]> {
        const raw = (await this.dataSource.getRawContacts()).filter(c => c.id && c.phoneNumbers && c.phoneNumbers.length > 0);
        return raw.map(c => ({
            id: c.id!,
            name: c.name || c.phoneNumbers?.[0]?.number || 'Nombre desconocido',
            image: c.imageAvailable ? c.image?.uri ?? null : null,
            phone: c.phoneNumbers?.[0]?.number ?? 'Sin número',
        }));
    }
}