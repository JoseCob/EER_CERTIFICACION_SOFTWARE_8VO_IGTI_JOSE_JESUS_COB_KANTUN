import * as Contacts from 'expo-contacts';

export class ContactsDataSource {
    async getRawContacts(): Promise<Contacts.Contact[]> {
        const permission = await Contacts.getPermissionsAsync();
        if (permission.status !== 'granted') {
            const requested = await Contacts.requestPermissionsAsync();
            if (requested.status !== 'granted') {
                throw new Error('Permission denied');
            }
        }
        
        const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Name, Contacts.Fields.Image, Contacts.Fields.PhoneNumbers],
        });

        return data.filter(c => c.name?.trim().length > 0);
    }
}