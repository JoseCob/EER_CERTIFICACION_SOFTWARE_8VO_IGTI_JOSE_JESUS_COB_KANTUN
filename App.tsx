//Aqui llamamos a la navegación con bottom tabs + react Navigation
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/shared/navigation/AppNavigator';

const App = ()=>{
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style={"auto"} />
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;