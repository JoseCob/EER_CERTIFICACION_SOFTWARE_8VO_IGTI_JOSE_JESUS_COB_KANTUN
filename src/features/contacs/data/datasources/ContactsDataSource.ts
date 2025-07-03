import * as Contacts from 'expo-contacts';

/*
* Función que exporta una clase para obtener y traer todos los datos del contacto mediante la API expo-contacts
* habiendo aceptando los permisos a contactos del dispositivo.
* Y si el usuario rechaza los permisos, obtendra un error como respuesta, todo esto 
* utilizando unicamente la API de expo-contacts.
*/

export class ContactsDataSource {
    async getRawContacts(): Promise<Contacts.Contact[]> {
        const permission = await Contacts.getPermissionsAsync();
        if (permission.status !== 'granted') {
            const requested = await Contacts.requestPermissionsAsync();
            if (requested.status !== 'granted') {
                console.log('Permisos denegados a contactos');
                throw new Error('Permission denied');
            }
        }
        
        //Función que obtiene datos del contacto mediante los campos de la API de expo contacts
        const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Name, Contacts.Fields.Image, Contacts.Fields.PhoneNumbers],
        });

        return data.filter(c => c.name?.trim().length > 0);
    }
}