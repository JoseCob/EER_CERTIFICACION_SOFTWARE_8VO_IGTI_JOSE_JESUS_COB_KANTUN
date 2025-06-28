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