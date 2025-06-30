//Aqui llamamos a la navegación con bottom tabs + react Navigation
import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/shared/navigation/AppNavigator';
//Inicializamos todas las tablas de la base de datos por SQLite
import { InitSchema } from '@/core/database/migrations/InitSchema';
import { RelationshipQueries } from '@/core/database/queries/RelationshipQueries'; //Para mostrar datos en debug
//import { DropTableRelationship } from '@/core/database/queries/DropTableRelationship';//Para consultas en debug

const App = ()=>{
  //Se ejecuta al montar la app(Corriendo la aplicación)
  useEffect(() => {
    InitSchema(); // Crea las tablas si no existen
    console.log("Ejecutando la base de datos...");
    RelationshipQueries(); //Ejecuta la consulta => ver tabala en relationships
    //DropTableRelationship(); //Elimina la tabla "relationships" de la base de datos
  }, []);

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