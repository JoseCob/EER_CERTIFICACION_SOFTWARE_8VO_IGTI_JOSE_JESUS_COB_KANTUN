//Navegación: react Navigator con bottom tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getTabOptions } from './TabOptions'; //función modularizada para la configuración del Tabs.Navigator
import homePage from '../../features/home/presentation/ui/components/pages/HomePage';
import dashPage from '../../features/dashboard/presentation/ui/page/DashPage';
import contacsPage from '../../features/contacs/presentation/ui/page/ContacsPage';

const Tabs = createBottomTabNavigator();

const AppNavigator = () => (
    <Tabs.Navigator screenOptions={getTabOptions}>
        <Tabs.Screen name="Inicio" component={homePage}/>
        <Tabs.Screen name="Resultados" component={dashPage}/>
        <Tabs.Screen name="Contactos" component={contacsPage}/>
    </Tabs.Navigator>
);

export default AppNavigator;