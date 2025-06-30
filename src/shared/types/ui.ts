//Propiedades base para modales
export interface ModalBaseProps {
    visible: boolean; //Controla la visibilidad del modal
    onClose: () => void; //Controla el cierre del modal
}