import React, { Children } from "react";
import { ScrollView } from "react-native";
import InfoContactTemplate from "@/shared/ui/components/templates/InfoContactTemplate";
import { ContactEntity } from "@/features/contacs/domain/entities/ContactEntity"; //Obtenemos las entidades acerca del contactos
import ImgContact from "@/shared/ui/components/molecules/ImgContact";
import ContactsData from "@/shared/ui/components/molecules/ContactsData";
import ContactName from "@/shared/ui/components/atoms/ContactName";

interface RelationProps {
    contact: ContactEntity | null; //Entidades de los datos del contacto
    children: React.ReactNode;
}

const RelationshipsFormTemplate:React.FC<RelationProps> = ({contact, children}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <InfoContactTemplate 
                contact={contact}
            >
                <ImgContact  contact={contact!}/>
                <ContactsData>
                    <ContactName contact={contact!} />
                </ContactsData>
            </InfoContactTemplate>
            {children}
        </ScrollView>
    )
}

export default RelationshipsFormTemplate;