export interface ContactEntity {
    id: string;
    name: string;
    image?: string | null;
    phone: string;
    isRelated?: boolean; //Se encargara de marcar los contactos registrado como relación en la base de datos 
}