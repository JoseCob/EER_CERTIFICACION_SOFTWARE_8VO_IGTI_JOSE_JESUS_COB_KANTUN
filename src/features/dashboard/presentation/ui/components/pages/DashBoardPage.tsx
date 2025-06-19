import React from "react";
import { View } from "react-native";
import DashBoardTemplate from "../templates/DashBoardTemplate";
import RelationshipGraph from "../organisms/RelationshipGraph";

export default function DashBoardPage () {
    return (
        <View style={{ flex: 1 }}>
            <DashBoardTemplate>
                <RelationshipGraph />
            </DashBoardTemplate>
        </View>
    );
}