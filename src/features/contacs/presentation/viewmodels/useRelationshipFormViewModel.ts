import { useState, useEffect } from "react";
import { RelationshipFormEntity } from "../../domain/entities/RelationshipFormEntity";

/**
 * Gestiona el estado y la lógica del formulario de relaciones entre contactos.
 * Expone un estado `form` y funciones para actualizarlo, reiniciarlo y calcular fechas para el calendario.
 * 
 * @param visible - Indica si el formulario modal está visible. Cuando se oculta, el formulario se reinicia.
 */

export const useRelationshipFormViewModel = (visible: boolean) => {
    const [form, setForm] = useState<RelationshipFormEntity>({
        interactionType: "Llamada",
        tags: [],
        someNote: "",
        generalNote: "",
        familyInfo: "",
        interactionDate: null,
    });

    //Refresca todos los campos del formulario para añadir relaciones al cargar de nuevo la vista
    const resetForm = () => {
        setForm({
            interactionType: "Llamada",  //Tipo de interacción predeterminada
            interactionDate: null,
            tags: [],
            someNote: "",
            generalNote: "",
            familyInfo: "",
        });
    };

    /**
   * Añade o elimina una etiqueta del campo `tags` del formulario.
   * Si la etiqueta ya existe, se elimina. Si no existe, se añade.
   * (Funciona como un selector).
   * 
   * @param tag - La etiqueta a alternar.
   */
    const toggleTag = (tag: string) => {
        setForm((prev) => ({
            ...prev,
            tags: prev.tags.includes(tag)
            ? prev.tags.filter((t) => t !== tag)
            : [...prev.tags, tag],
        }));
    };

    /**
   * Devuelve una fecha calculada según un tipo de entrada.
   *
   * @param type - Cadena como "Hoy", "Ayer", "Hace una semana", etc.
   * @returns Fecha correspondiente al tipo.
   */
    const calculateDate = (type: string): Date => {
        const now = new Date();
        now.setHours(0, 0, 0, 0);

        //Calcula la fecha segun la elección del usuario
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
    
    //Si el formulario se cierra (visible pasa a `false`), se resetea automáticamente.
    useEffect(() => {
        if (visible) return;
        // Resetear form al abrir
        resetForm();
    }, [visible]);

    //Exponemos los valores del formulario y sus funciones
    return {form, setForm, resetForm, toggleTag, calculateDate,
  };
};