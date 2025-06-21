//Navegación: react Navigator con bottom tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getTabOptions } from './TabOptions'; //función modularizada para la configuración del Tabs.Navigator
import homePage from '../../features/home/presentation/ui/components/pages/HomePage';
import dashBoardPage from '../../features/dashboard/presentation/ui/components/pages/DashBoardPage';
import contacsPage from '../../features/contacs/presentation/ui/components/pages/ContacsPage';
import TestModal from '@/features/test/screens/testModal'; //Navegacion de pruebas

const Tabs = createBottomTabNavigator();

const AppNavigator = () => (
    <Tabs.Navigator screenOptions={getTabOptions}>
        <Tabs.Screen name="Inicio" component={homePage}/>
        <Tabs.Screen name="Resultados" component={dashBoardPage}/>
        <Tabs.Screen name="Contactos" component={contacsPage}/>
        <Tabs.Screen name='Test' component={TestModal} />
    </Tabs.Navigator>
);

export default AppNavigator;