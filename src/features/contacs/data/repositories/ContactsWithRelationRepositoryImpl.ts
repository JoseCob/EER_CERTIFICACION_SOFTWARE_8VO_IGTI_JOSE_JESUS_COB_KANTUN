import { isContactRelated } from "@/core/database/queries/IsContactRelated";
import { ContactEntity } from "../../domain/entities/ContactEntity";
import { ContactsRepositoryImpl } from "./ContactsRepositoryImpl";

//Repositorio para todos los contactos seleccionados y los deshabilitados
export class ContactsWithRelationRepository {
    private contactRepo = new ContactsRepositoryImpl();
    
    async getContactsWithRelationStatus(): Promise<ContactEntity[]> {
        const contacts = await this.contactRepo.getContacts();
        const markedContacts: ContactEntity[] = [];
        
        for (const contact of contacts) {
            const related = await isContactRelated(contact.id);
            markedContacts.push({ ...contact, isRelated: related });
        }
    return markedContacts;
  }
}

//Repositorio para solo contactos seleccionados 
export class RelatedOnlyContactsRepository {
    private contactRepo = new ContactsRepositoryImpl();

    async getOnlyRelatedContacts(): Promise<ContactEntity[]> {
        const contacts = await this.contactRepo.getContacts();
        const relatedContacts: ContactEntity[] = [];

        for (const contact of contacts) {
            const isRelated = await isContactRelated(contact.id);
            if (isRelated) {
                relatedContacts.push({ ...contact, isRelated });
            }
        }

        return relatedContacts;
    }
}