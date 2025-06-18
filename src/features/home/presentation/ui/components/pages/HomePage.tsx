import HomeTemplate from "../templates/HomeTemplate";
import RecentTemplate from "../templates/RecentTemplate";
import RemindersTemplate from "../templates/RemindersTemplate";
import WelcomeMessage from "../atoms/WelcomeMessage";
import {View} from 'react-native';

export default function HomePage () {
    return (
        <View style={{ flex: 1 }}>
            <HomeTemplate>
                <WelcomeMessage />
                <RemindersTemplate>
                    <View></View>
                </RemindersTemplate>
                <RecentTemplate>
                    <View></View>
                </RecentTemplate>
            </HomeTemplate>
        </View>
    );
}