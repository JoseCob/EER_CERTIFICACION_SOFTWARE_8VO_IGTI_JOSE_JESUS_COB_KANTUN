# App Móvil CRM Personal con Integración Profunda en el SO con React Native + Expo con Arquitectura CLEAN, MVVM, Feature First + Atomic Design.

## -- Estructura del proyecto --
> Mi proyecto está estructurado siguiendo Clean Architecture y Atomic Design. Dentro de features separo cada módulo por pantalla o dominio, y uso data, domain y presentation para organizar los datos, lógica de negocio y presentación respectivamente. Todo lo reutilizable como navegación, tipos o componentes UI comunes está en la carpeta shared.

📦 src/ --> carpeta raíz del código fuente.
├── 📁 core/
│   └── 📁 database/ -->  configuración, migraciones de la base de datos, tablas y consultas.
│       ├── 📁 migrations/ 
│       ├── 📁 tables/
│       ├── 📁 queries/
│       └── SQLiteConfig.ts
├── 📁 features/ --> módulo funcional del proyecto que se dividen por pantallas
│   ├── 📁 contacts/
│   │   ├── data/ --> fuentes de datos (API, SQLite, etc.). 
│   │   ├── domain/ --> lógica de negocio, entidades y casos de uso.
│   │   └── presentation/ --> capa de interfaz de usuario (UI), estados(zustand) y logica para las vistas
│   ├── 📁 dashboard/ --> feature para la pantalla de estadisticas
│   └── 📁 home/ --> feature para la pantalla de inicio de la app
├── 📁 shared/ --> Elementos reutilizables por varias features, tambien llamados archivos globales.
│   ├── navigation/ --> configuración de navegación.
│   ├── theme/ --> temas y estilos globales.
│   ├── types/ --> tipos TypeScript comunes (props) para las interfaces.
│   └── ui/components --> componentes reutilizables organizados con Atomic Design:
│       ├── atoms/ --> elementos básicos (botones, texto).
│       ├── molecules/ --> combinaciones simples (inputs con etiquetas, etc.).
│       ├── organisms/ --> componentes complejos (formularios, modales).
│       ├── pages/ --> vistas más completas.
│       └── templates/ --> plantillas o contenedores bases
│   ├── utils/ --> funciones auxiliares, se utilizo para dar formato al perfil de los contactos (imagen del contacto)
└── App.tsx --> archivo principal o punto de entrada, se encarga de ejecutar la aplicación

## -- Imagen de la estructura del proyecto --
<p align="center">
  <img src="https://github.com/user-attachments/assets/31784924-1b08-4004-9498-149573e7b692"/>
</p>
![](https://github.com/JoseCob/EER_CERTIFICACION_SOFTWARE_8VO_IGTI_JOSE_JESUS_COB_KANTUN/blob/JoseCob-Imagenes-de-prueba/Captura%20de%20pantalla%20(741).png)

## -- Tecnologías y Librerías que se utilizaron en la aplicación --
1. expo-contacts
2. expo-calendar
3. expo-notifications
4. SQLite
5. Zustand
6. React Navigation
7. expo-status-bar
8. react native circular progress
9. react native svg
10. react-native-calendars
11. date-fns-tz

## -- DEPENDENCIAS UTILIZADAS EN ESTE PROYECTO -- 
1. Dependencia necesaria para navegación nativa
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install @react-navigation/native`_

2. Dependencia necesaria para el manejo de la barra de estado para iOS y Android
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install expo-status-bar`_

3. Dependencia necesaria para navegación bottom-tabs
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install @react-navigation/bottom-tabs`_

4. Dependencia necesaria acceder y manipular la información de contactos del dispositivo del usuario
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install expo-contacts`_

5. Dependencia necesaria para leer eventos, recordatorios y otros datos relacionados con el calendario
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install expo-calendar`_

6. Dependencia necesaria para la gestión de notificaciones push y locales en aplicaciones React Native desarrolladas con Expo
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install expo-notifications`_

7. Dependencia necesaria para guardar datos localmente en una base de datos SQL por "SQLite"
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install expo-sqlite`_

8. Dependencia necesaria para el manejo de estado global
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npm install Zustand`_

9. Dependencia necesaria para crear la gráfica circular de progreso tipo anillo
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install react-native-svg react-native-circular-progress`_

10. Dependencia necesaria que Permite la visualización de calendarios mensuales, semanales o diarios, con la posibilidad de resaltar fechas específicas. 
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npx expo install react-native-calendars`_

11. Dependencia necesaria para facilita la manipulación y formato de fechas en diferentes zonas horarias, permitiendo a los desarrolladores trabajar con fechas locales y UTC. Es una extension de la biblioteca date-fns
> Ejecuta el siguiente comando en la terminal con el directorio de la app, para una correcta instalacion exacta de la dependencia:
- _`npm install date-fns-tz`_

## -- Instrucciones --
### Para usar todas estas dependencias en nuestro dispositivo, ejecute en la terminal estando ubicado en la ruta principal/raíz del archivo:
- _`npx expo install`_ / _`npm install`
> Este proceso asegura que todas las dependencias necesarias para ejecutar este proyecto se instalen correctamente en el nuevo entorno de trabajo con las versiones utilizadas en el package.json.

## -- Para poder ejecutar el proyecto --
### Escribe lo siguiente en la consola/terminal, estando en la ruta raíz del proyecto:
- _`npm start`_ / _`npx expo start`_

### Seleccionamos en donde queremos renderizar el proyecto, ya sea en la web o en la app de expo GO, pulsando la tecla correspondiente para su ejecución que se muestra por la terminal de windows
> Si se ejecutara el proyecto en un celular fisico o en el emulador, hay que tenerlo configurado para renderizar la apliación con expo Go antes de presionar la tecla "a"

> En caso de seleccionar web presionando la tecla "w". Automaticamente se nos abrira el navegador predeterminado del sistema ejecutando nuestra app enfocado a web.

### Imagen de ejemplo de la terminal de windows, mostrando el menú para seleccionar el modo de renderización del proyecto
<p align="center">
  <img src="https://github.com/user-attachments/assets/31784924-1b08-4004-9498-149573e7b692"/>
</p>

## -- Imágenes del proyecto en móvil --
