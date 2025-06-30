import { getDBConnection } from '@/core/database/SQLiteConfig';

const db = getDBConnection();

export const RelationshipQueries = async () => {
    try {
        const result = await db.getAllAsync(
            `SELECT * FROM relationships`
        );
        console.log("Relaciones guardadas:", result);
        return result;

    } catch (err) {
        console.error("Error al consultar relaciones:", err);
        return [];
    }
};

//Cuenta los contactos relacionados -> servira para el grafico de relaciones feature/dashboard
export const getRelationshipCount = async (): Promise<number> => {
    try {
        const result = await db.getFirstAsync<{ count: number }>(
          `SELECT COUNT(*) as count FROM relationships`
        );
        return result?.count || 0;
    } catch (err) {
        console.error("Error al contar relaciones:", err);
        return 0;
    }
};