//función typada para poder navegar entre vistas del AppNavigator con "react-navigation" con componentes externos a la navegación
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type RootTabParamList = {
  Inicio: undefined;
  Resultados: undefined;
  Contactos: undefined;
  Test: undefined; //Este Vista solo es de prueba
};

export type RootTabNavigation = BottomTabNavigationProp<RootTabParamList>;