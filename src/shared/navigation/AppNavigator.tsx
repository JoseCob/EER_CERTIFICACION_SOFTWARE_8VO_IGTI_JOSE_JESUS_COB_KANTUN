//Navegación: react Navigator con bottom tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../../features/home/presentation/ui/pages/HomePage';

const Tabs = createBottomTabNavigator();

const AppNavigator = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Inicio" component={HomePage}/>
    </Tabs.Navigator>
);

export default AppNavigator;