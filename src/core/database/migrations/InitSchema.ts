import { CreateRelationshipTable } from './tables/RelationshipDB';

//Función que inicializa todas las tablas al ejecutar la aplicación
export const InitSchema = () => {
    CreateRelationshipTable(); //Tabla de relaciones de contactos
};