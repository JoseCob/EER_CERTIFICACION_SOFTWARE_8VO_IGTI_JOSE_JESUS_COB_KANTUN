//Consulta de pruebas
import { getDBConnection } from '@/core/database/SQLiteConfig';

const db = getDBConnection();

//Crea la base de datos al ejecutar la aplicación
export const DropTableRelationship = async () => {
    try{
        //Función que elimina la tabla relationships de la base de datos del CRM
        await db.execAsync(`Drop table if exists relationships`)
        console.log("Tabla 'relationships' eliminada correctamente");
    } catch (err) {
        console.error("Error al eliminar la tabla 'relationships':", err);
    }
};