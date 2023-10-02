# Weather App

Esta es una aplicación de pronóstico del tiempo desarrollada en React con Redux Toolkit y otras tecnologías modernas. El objetivo de este README es proporcionar información sobre los scripts disponibles para desarrollar, probar y mantener la aplicación.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes scripts utilizando el comando `npm run` o `yarn`:

### `npm run dev`

Inicia la aplicación en modo de desarrollo utilizando Vite. La aplicación se abrirá automáticamente en tu navegador y se recargará automáticamente cuando realices cambios en el código fuente.

### `npm run build`

Construye la aplicación para producción. Este comando compila y empaqueta los archivos de la aplicación en una versión optimizada para producción en la carpeta `dist`.

### `npm run lint`

Ejecuta ESLint para analizar el código fuente en busca de errores y aplicar reglas de estilo definidas en el proyecto. Esto ayuda a mantener un código limpio y consistente.

### `npm run preview`

Inicia una vista previa de la aplicación construida en modo de producción utilizando Vite. Esto te permite verificar cómo se verá la aplicación en producción antes de implementarla en un servidor.

### `npm run test`

Ejecuta pruebas unitarias utilizando Vitest, una biblioteca de pruebas optimizada para aplicaciones de React. Asegúrate de que tu código esté libre de errores y que todas las funcionalidades se comporten como se esperaba.

### `npm run prepare`

Este script se ejecuta automáticamente después de la instalación de las dependencias mediante el comando `npm install`. Configura Husky, una herramienta que facilita la ejecución de scripts en ganchos de Git.

### `npm run precommit`

Ejecuta tareas de linting y pruebas antes de confirmar tus cambios en Git. Esto garantiza que el código que envías al repositorio esté en buen estado.

### `npm run prepush`

Similar al script `precommit`, este script se ejecuta antes de empujar tus cambios a un repositorio remoto, asegurando que tu código esté libre de errores y que las pruebas pasen.

## Dependencias Principales

- **@reduxjs/toolkit**: Una biblioteca para gestionar el estado de la aplicación con Redux de manera más eficiente.

- **dayjs**: Una biblioteca para el manejo de fechas y horas.

- **react** y **react-dom**: Bibliotecas de React para construir la interfaz de usuario.

- **react-redux**: Biblioteca para conectar React con Redux.

- **redux-saga**: Middleware para gestionar efectos secundarios en Redux.