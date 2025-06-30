export interface RelationshipFormEntity {
    interactionType: string;
    tags: string[];
    someNote: string;
    generalNote: string;
    familyInfo: string;
    interactionDate: Date | null;
}