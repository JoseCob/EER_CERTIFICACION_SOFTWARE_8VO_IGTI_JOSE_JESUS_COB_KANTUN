import { isContactRelated } from "@/core/database/queries/IsContactRelated";
import { ContactEntity } from "../../domain/entities/ContactEntity";
import { ContactsRepositoryImpl } from "./ContactsRepositoryImpl";

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