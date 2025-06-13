//Navegación: react Navigator con bottom tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../../features/home/presentation/ui/pages/HomePage';
import DashPage from '../../features/dashboard/presentation/ui/page/DashPage';

const Tabs = createBottomTabNavigator();

const AppNavigator = () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Inicio" component={HomePage}/>
        <Tabs.Screen name="Resultados" component={DashPage}/>
    </Tabs.Navigator>
);

export default AppNavigator;