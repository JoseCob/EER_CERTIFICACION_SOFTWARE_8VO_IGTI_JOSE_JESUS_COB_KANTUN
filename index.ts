import { registerRootComponent } from 'expo';

import App from './App'; //Ruta para inicializar el proyecto por nuestra navegación de react

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
