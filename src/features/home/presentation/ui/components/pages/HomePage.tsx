import React, { useState } from "react";
import HomeTemplate from "../templates/HomeTemplate";
import RecentTemplate from "../templates/RecentTemplate";
import RemindersTemplate from "../templates/RemindersTemplate";
import WelcomeMessage from "../atoms/WelcomeMessage";
import {View} from 'react-native';
import AddNoteModal from "@/shared/ui/components/organisms/AddNoteModal";

export default function HomePage () {
    const [showNoteModal, setShowNoteModal] = useState(false);

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
            <AddNoteModal visible={showNoteModal} onClose={() => setShowNoteModal(false)} />
        </View>
    );
}