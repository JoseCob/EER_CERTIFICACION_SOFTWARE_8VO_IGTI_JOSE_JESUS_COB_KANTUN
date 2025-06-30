import React from "react";
import ModalBottomSheetTemplate from "../templates/ModalBottomSheetTemplate";
import InfoContactTemplate from "../templates/InfoContactTemplate";
import ImgContact from "../molecules/ImgContact";
import ContactsData from "../molecules/ContactsData";
import ContactName from "../atoms/ContactName";
import DataPhone from "../atoms/DataPhone";
import InteractionButtons from "@/features/contacs/presentation/ui/components/organisms/InteractionButtons";
import { ContactEntity } from "@/features/contacs/domain/entities/ContactEntity";
import { ModalBaseProps } from "@/shared/types/ui";

//props para el modal
interface ModalAddRelationProps extends ModalBaseProps {
    contact: ContactEntity | null; //Entidades de los datos del contacto
    onCreateRelationship: () => void; //Para abrir el segundo modal
    onClose: () => void;
}

const ConfirmRelModal:React.FC<ModalAddRelationProps> = ({contact, onCreateRelationship, onClose, visible }) => {
    return (
        <ModalBottomSheetTemplate 
            visible= {visible}
            onClose={onClose}
        >
            <InfoContactTemplate
                contact={contact}
            >
                <ImgContact contact={contact!} />
                <ContactsData>
                    <ContactName contact={contact!} />
                    <DataPhone contact={contact!} />
                </ContactsData>
                <InteractionButtons 
                    contact={contact!} 
                    onCreateRelationship={onCreateRelationship} 
                    onClose={onClose}
                />
            </InfoContactTemplate>
        </ModalBottomSheetTemplate>
    );
}
export default ConfirmRelModal;