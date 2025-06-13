//Aqui llamamos a la navegación con bottom tabs + react Navigation
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/shared/navigation/AppNavigator';

const App = ()=>{
  return(
    <NavigationContainer>
      <StatusBar style={"auto"} />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;