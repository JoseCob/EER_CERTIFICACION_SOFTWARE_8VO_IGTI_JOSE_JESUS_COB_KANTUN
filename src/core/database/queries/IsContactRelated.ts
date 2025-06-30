import { getDBConnection } from "@/core/database/SQLiteConfig";

const db = getDBConnection();

export const isContactRelated = async (contactId: string): Promise<boolean> => {
    const result = await db.getFirstAsync<{ count: number }>(
        `SELECT COUNT(*) as count FROM relationships WHERE contactId = ?`,
        [contactId]
    );
    return result!.count > 0;
};