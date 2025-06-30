import { useState, useEffect } from "react";
import { RelationshipFormEntity } from "../../domain/entities/RelationshipFormEntity";

export const useRelationshipFormViewModel = (visible: boolean) => {
    const [form, setForm] = useState<RelationshipFormEntity>({
        interactionType: "Llamada",
        tags: [],
        someNote: "",
        generalNote: "",
        familyInfo: "",
        interactionDate: null,
    });

    const resetForm = () => {
        setForm({
            interactionType: "Llamada",
            interactionDate: null,
            tags: [],
            someNote: "",
            generalNote: "",
            familyInfo: "",
        });
    };

    const toggleTag = (tag: string) => {
        setForm((prev) => ({
            ...prev,
            tags: prev.tags.includes(tag)
            ? prev.tags.filter((t) => t !== tag)
            : [...prev.tags, tag],
        }));
    };

    const calculateDate = (type: string): Date => {
        const now = new Date();
        now.setHours(0, 0, 0, 0);

        switch (type) {
            case "Hoy": 
                return now;
            case "Ayer": 
                return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
            case "Hace una semana": 
                return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
            case "Hace un mes": 
                return new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
            default: 
                return now;
        }
    };
    
    useEffect(() => {
        if (visible) return;
        // Resetear form al abrir
        resetForm();
    }, [visible]);

    return {form, setForm, resetForm, toggleTag, calculateDate,
  };
};