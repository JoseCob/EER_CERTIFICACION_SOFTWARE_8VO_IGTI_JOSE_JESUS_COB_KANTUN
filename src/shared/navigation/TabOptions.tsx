import { Ionicons } from '@expo/vector-icons'; //Dependencia para iconos que viene incluido con expo
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'; //Configuarion tipada, para que sea aceptada por Bottom Tab
import type { ComponentProps } from 'react'; //Nos permite extraer tipos de props que acepta un componente.

//Alias de tipado que declara la prop "name" de "Tabs.Screen" que representa los nombres de la navegación
type IoniconName = ComponentProps<typeof Ionicons>['name'];

//Función que recibe el objeto "route" de react Navigation y devuelve el objeto "BottomTabNavigationOptions"
export const getTabOptions = ({ route }: { route: { name: string } }): BottomTabNavigationOptions => ({
    headerShown: false, //Oculta el header de cada pestaña
    //Configuración del tab activo, color del icono y tamaño de los iconos
    tabBarIcon: ({ focused, color, size }) => {
        //Función tipada como "IoniconName"
        const iconName: IoniconName = (() => {
            //Dependiendo de la ruta seleccionada por el usuario hara cierta accion en el icono -> Activado/Desactivado
            switch (route.name) {
                case 'Inicio':
                    return focused ? 'home' : 'home-outline';
                case 'Resultados':
                    return focused ? 'analytics' : 'analytics-outline';
                case 'Contactos':
                    return focused ? 'people' : 'people-outline';
            default:
                return 'help-circle-outline';
            }
        })();
        //Devuelve el componente "Ionicons" con el nombre, color y tamaño adecuados para la tab
        return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato', //Define el color del icono activado
    tabBarInactiveTintColor: 'gray', //Define el color del icono desactivado
});