//Actualizamos en tiempo real el contador de las relaciones agregadas en el dashboard
import { create } from 'zustand';
import { getRelationshipCount } from '@/core/database/queries/RelationshipQueries';

interface RelationshipStatsState {
    count: number;
    fetchCount: () => Promise<void>;
}

export const useRelationshipStatsStore = create<RelationshipStatsState>((set) => ({
    count: 0,
    fetchCount: async () => {
        const count = await getRelationshipCount();
        set({ count });
    },
}));
