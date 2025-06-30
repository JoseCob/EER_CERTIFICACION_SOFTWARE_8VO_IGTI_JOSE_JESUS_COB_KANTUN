import React, { useState } from "react";
import HomeTemplate from "../templates/HomeTemplate";
import RecentTemplate from "../templates/RecentTemplate";
import RemindersTemplate from "../templates/RemindersTemplate";
import WelcomeMessage from "../atoms/WelcomeMessage";
import {View} from 'react-native';
import AddNoteModal from "@/shared/ui/components/organisms/AddNoteModal";
import CalendarModal from "@/shared/ui/components/organisms/CalendarModal";

export default function HomePage () {
    const [showNoteModal, setShowNoteModal] = useState(false);
    const [lastInteractionDate, setLastInteractionDate] = useState<Date | null>(null);
    //Estados para abrir el calendario y mantener la fecha seleccionada 
    const [showCalendarModal, setShowCalendarModal] = useState(false);
    const [shouldPersistDateSelection, setShouldPersistDateSelection] = useState(false);
    const [selectedInteractionDate, setSelectedInteractionDate] = useState<string | null>(null);


    const onCalendarModal = () => {
        console.log("Abrir calendario para seleccionar una fecha");
        setShowCalendarModal(true);
        setLastInteractionDate(new Date());
    };

    return (
        <View style={{ flex: 1 }}>
            <HomeTemplate onOpenNoteModal={() => setShowNoteModal(true)}>
                <WelcomeMessage />
                <RemindersTemplate>
                    <View></View>
                </RemindersTemplate>
                <RecentTemplate>
                    <View></View>
                </RecentTemplate>
            </HomeTemplate>
            {/* Aquí renderizas el modal de agregar notas */}
            <AddNoteModal 
                visible={showNoteModal} 
                onClose={() => setShowNoteModal(false)}
                onCalendarModal={onCalendarModal}
                lastInteractionDate={lastInteractionDate}
                setLastInteractionDate={setLastInteractionDate}
                selectedInteractionDate={selectedInteractionDate}
                setSelectedInteractionDate={setSelectedInteractionDate}

            />
            <CalendarModal
                visible={showCalendarModal}
                onClose={() => setShowCalendarModal(false)}
                defaultDate={lastInteractionDate || new Date()}
                onConfirm={(selectedDate) => {
                    setLastInteractionDate(selectedDate); //Actualiza fecha real
                    setShowCalendarModal(false);          //Cierra el modal
                    setSelectedInteractionDate("ellipsis1"); //Actualiza el estado visual
                }}
                shouldPersistDateSelection={shouldPersistDateSelection}
                setShouldPersistDateSelection={setShouldPersistDateSelection}
            />
        </View>
    );
}