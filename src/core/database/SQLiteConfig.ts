//Establece la conexión de la base de datos
import { openDatabaseSync } from 'expo-sqlite';

export const getDBConnection = () => {
    return openDatabaseSync('app_crm.db');
};
