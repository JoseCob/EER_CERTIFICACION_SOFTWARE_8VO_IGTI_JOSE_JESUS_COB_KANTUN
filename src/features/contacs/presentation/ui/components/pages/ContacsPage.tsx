import { View } from "react-native";
import ContacsTemplate from "../templates/ContacsTemplate";
import ContacsHeaderTemplate from "../templates/ContacsHeaderTemplate";
import ContacsListTemplate from "../templates/ContacsListTemplate";

export default function ContacsPage () {
    return (
        <View style={{ flex: 1 }}>
            <ContacsTemplate>
                <ContacsHeaderTemplate>
                    <View></View>
                </ContacsHeaderTemplate>
                <ContacsListTemplate>
                    <View></View>
                </ContacsListTemplate>
            </ContacsTemplate>
        </View>
    );
}