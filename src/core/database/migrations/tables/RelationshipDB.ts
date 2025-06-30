import { getDBConnection } from '@/core/database/SQLiteConfig';

const db = getDBConnection();

//Crea la base de datos al ejecutar la aplicación
export const CreateRelationshipTable = async () => {
    try{
        //Crea la base de datos
        await db.execAsync(
            `
                CREATE TABLE IF NOT EXISTS relationships (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    contactId TEXT NOT NULL UNIQUE,
                    contactName TEXT,
                    date TEXT,
                    interactionType TEXT,
                    someNote TEXT,
                    tags TEXT,
                    generalNote TEXT,
                    familyInfo TEXT
                );
            `
        );
        console.log("Tabla 'relationships' creada correctamente");
    } catch (err) {
        console.error("Error al crear la tabla 'relationships':", err);
    }
};

//Almacena datos en la tabla relationships
export const insertRelationship = async (
    contactId: string,
    contactName: string,
    date: string,
    interactionType: string,
    someNote: string,
    tags: string[],
    generalNote: string,
    familyInfo: string
) => {
    try{
        await db.runAsync(
            `
                INSERT INTO relationships (contactId, contactName, date, interactionType, someNote, tags, generalNote, familyInfo) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            `,
            [contactId, contactName, date, interactionType, someNote, JSON.stringify(tags), generalNote, familyInfo]
        );
        console.log("Relación insertada correctamente");
    } catch(err) {
        console.error("Error al insertar la relación:", err);
    }
};