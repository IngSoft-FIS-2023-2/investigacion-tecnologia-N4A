# Análisis estático de código - ESLint

## Definiciones

#### Análisis estático de código

Refiere al análisis del código sin ejecutar el mismo, en contraposición con lo que se denomina análisis dinámico, que se realiza en programas en ejecución.
Se utiliza para hacer cumplir un cierto estándar de codificación, encontrar errores, bugs o inconsistencias en el estilo del código.

#### Linter

Herramienta que realiza análisis estático de código. El término proviene de una utilidad de Unix que examinaba código en C.

#### ECMAScript

Ecma International es una organización que desarrolla estándares en hardware para computadoras, comunicaciones, y lenguajes de programación.
ECMAScript es un estándar para lenguajes de scripting, entre los cuales se destaca JavaScript.

#### ESLint

Linter para identificar y arreglar problemas encontrados en código ECMAScript/JavaScript. ESLint es altamente configurable, se pueden agregar plugins, configuraciones y analizadores de la comunidad para ampliar la funcionalidad de ESLint.

Conceptos principales:

- _Reglas_:
  - Bloques de construcción básicos de ESLint
  - Una regla valida si el código cumple cierta expectativa, y qué pasa en caso de no cumplirla
  - Ejemplo: **no-unused-vars** (todas las variables declaradas deben ser utilizadas)
- _Archivo de configuración_:
  - Lugar donde se configura ESLint para todo el proyecto
  - Se pueden incluir reglas predefinidas, cómo deben ser controladas, plugins con reglas customizadas, configuraciones compartibles, sobre qué archivos aplicar las reglas, y más.
- _Configuración compartible_:
  - Conjunto predefinido de reglas y configuraciones combinados en un paquete que puede ser reusado en múltiples proyectos
  - Se usan típicamente para aplicar un estilo de codificación específico o un conjunto de mejores prácticas para un tipo particular de proyecto u organización
  - Se incluyen instalando el paquete de npm correspondiente y referenciándolo en el archivo de configuración
  - Ejemplo: _Configuración de Google_
- _Plugin_:
  - Es una extensión que provee reglas y configuraciones adicionales
  - Suelen ser creados para analizar casos de uso puntuales, frameworks o librerías, muchas veces por la comunidad o desarrolladores particulares
  - Se incluyen instalando el paquete de npm correspondiente y referenciándolo en el archivo de configuración
  - Ejemplos: _TypeScript plugin, React plugin_

## Demostración práctica

#### Instalación y configuración

Dos formas de instalación:

- _Automática_: corriendo el comando `npm init @eslint/config`. El comando va realizando preguntas para alcanzar la configuración más óptima según el tipo de programa que se desee codificar. Se le puede pasar una configuración específica que se desee usar (con la flag `--config`).

- _Manual_: instalando el paquete básico de ESLint (`npm install --save-dev eslint`), creando el archivo de configuración y agregando la estructura del mismo con las configuración deseada.

Formas de uso por consola (se pueden agregar comandos en el archivo package.json para simplificar su corrida):

- Corriendo el comando `eslint .`. De esta forma, sólo se hace un output de los errores/warnings por archivo.
- Corriendo el comando `eslint . --fix`. Con esta flag, se intenta arreglar errores automáticamente. No todos los errores pueden ser resueltos de esta forma. Al finalizar su ejecución, también se hace el output de errores con el estado post-arreglos.

## Recomendaciones de uso

- **Usar Integraciones**: Por ejemplo, VSCode tiene una extensión para mostrar el análisis de ESLint sobre el código mismo

- **No instalar de forma global**: Se puede instalar el paquete de npm de forma global para el usuario, en vez de en el proyecto en específico (npm install -g eslint). Esto no es recomendable, dado que puede dar lugar a diferentes configuraciones según el desarrollador. Al instalar todas las configuraciones localmente en el proyecto se garantiza que todos se rijan por las mismas reglas.

- **Instalar como dependencia de desarrollo**: Instalar con la flag `–save-dev`. Esta dependencia no se utiliza en la aplicación en sí, sino que es una herramienta de asistencia para el desarrollo. Instalándolo de esta forma, se evita agregar una dependencia innecesaria en el código final en producción, evitando aumentar el tamaño final de código innecesariamente.

- **Ejecutar automáticamente**: Esto asegura que el código del proyecto se ajuste a los estándares en todo momento, y no se integre código con errores al repositorio. Esto se puede hacer de varias formas, como con un pre-commit hook (ejemplo: lint-staged) o como parte de una pipeline de integración continua.

## Conclusión

El análisis estático de código es un proceso muy importante a realizarse en los proyectos de programación hoy en día, que asegura la estandarización de buenas prácticas y por ende el mejor funcionamiento general.
ESLint es una herramienta muy popular para este fin, utilizada en proyectos principalmente de JavaScript, que permite una gran versatilidad en su adaptación/configuración.

## Fuentes de información/Recursos utilizados

- [Documentación oficial de ESLint](https://eslint.org/)
- [Descripción de ESLint en NPMjs](https://www.npmjs.com/package/eslint)
- [GitHub](https://github.com/eslint)
