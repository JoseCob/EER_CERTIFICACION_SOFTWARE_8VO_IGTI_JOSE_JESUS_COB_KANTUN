//Navegación: react Navigator con bottom tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../features/auth/presentation/screens/HomeScreen';

const Tabs = createBottomTabNavigator();

const AppNavigator = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeScreen}/>
    </Tabs.Navigator>
);

export default AppNavigator;