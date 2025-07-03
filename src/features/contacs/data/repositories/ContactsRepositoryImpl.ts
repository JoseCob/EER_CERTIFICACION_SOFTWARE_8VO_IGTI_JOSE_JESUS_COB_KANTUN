import { ContactsRepository } from '../../domain/repositories/ContactsRepository';
import { ContactEntity } from '../../domain/entities/ContactEntity';
import { ContactsDataSource } from '../datasources/ContactsDataSource';

//Implementación del repositorio que transforma los datos crudos del datasource en entidades del dominio
export class ContactsRepositoryImpl implements ContactsRepository {
    private dataSource = new ContactsDataSource();

    //Cumple con obtener los datos acerca del contacto en base a las entidades del dominio
    async getContacts(): Promise<ContactEntity[]> {
        const raw = (await this.dataSource.getRawContacts())
        return raw.map(c => ({
            id: c.id!,
            name: c.name || c.phoneNumbers?.[0]?.number || 'Nombre desconocido',
            image: c.imageAvailable ? c.image?.uri ?? null : null,
            phone: c.phoneNumbers?.[0]?.number ?? 'Sin número',
        }));
    }
}