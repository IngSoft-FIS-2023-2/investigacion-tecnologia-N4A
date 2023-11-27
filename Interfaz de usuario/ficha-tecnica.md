# Interfaz de usuario (UI)

## Definición de Interfaz de Usuario
La IU es el espacio donde las interacciones entre humanos y máquinas ocurren.

## Tipos de UI:
### Interfaz Gráfica de Usuario (GUI)
**Ejemplo: Windows OS**
**Descripción:** Cuando prendes una computadora con el sistema operativo Windows, te encuentras con una pantalla llena de íconos, una barra de tareas en la parte inferior, un menú de inicio, etc. Todo esto forma parte de la GUI de Windows. En lugar de escribir comandos para abrir una carpeta o archivo, simplemente haces clic en los íconos o utilizas el ratón para arrastrar ventanas.
### Interfaz de Línea de Comando (CLI)
**Ejemplo: Terminal o Consola de comandos (Command Prompt en Windows, Terminal en macOS o Linux)**
**Descripción:** Es una interfaz en la que interactuas principalmente a través de texto. En lugar de hacer clic en íconos o botones, escribis comandos específicos para realizar acciones. Por ejemplo, en la consola de Linux, podrías escribir ls para listar los archivos y directorios en tu directorio actual o cd [nombre de directorio] para cambiar de directorio.
### Interfaz Táctil
**Ejemplo: Pantallas táctiles de smartphones y tablets**
**Descripción:** Estos dispositivos dependen en gran medida de la interacción táctil. La pantalla responde a tus toques, deslizamientos, pellizcos y otros gestos táctiles. Una aplicación como Google Maps en un smartphone es un buen ejemplo: puedes acercar o alejar el mapa pellizcando o separando dos dedos, deslizar para mover el mapa, o tocar en lugares específicos para obtener más información.
### Interfaz por Voz (VUI) - Ejemplo: Siri, Alexa, Hey Google, voiceOver (apple)
**Realidad Aumentada y Realidad Virtual (AR/VR UI)**

Estos son solo ejemplos generales y hay muchas otras manifestaciones y variaciones de estas interfaces en el mundo del diseño y desarrollo tecnológico.

## Principios Básicos de la IU
- Claridad: Que muestre la información necesaria, que tenga un orden. Seguir estándares comunes (ejemplos: rojo para alertas/errores y verde para mostrar algo correcto, usar iconos comunes, …)
- Flexibilidad: Tanto de dispositivos (una página web se pueda usar tanto en un celular como en una computadora: diseño responsive, también en distintos navegadores) como de usuarios (niños, adultos, considerar aspectos de accesibilidad para personas de poca audición, lectura, etc.).
- Consistencia: Las menores ambigüedades posibles, mantener códigos de colores, iconos, etc.
- Feedback al usuario: Que la interacción sea constante, que cada acción del usuario provoque una respuesta en el sistema.

## Desarrollo front end (Front End Development)

Rol del desarrollo de software especializado en la IU
- Alto impacto en la calidad del producto
- Basado en aspectos humanos - cognitivos
- Utiliza lenguajes, frameworks, APIs, estándares técnicos
- Fuerte dependencia con otros componentes del sistema
- Activo todo el proyecto

## Herramientas del front end development y del diseño:

### Herramientas de diseño:
- Figma: Una herramienta basada en la nube que permite el diseño, el prototipado y la colaboración en tiempo real de los diseñadores. Su capacidad para permitir la colaboración simultánea ha hecho que sea una elección popular entre equipos de diseño.
- Adobe XD: Parte del conjunto de herramientas de Adobe, XD es una herramienta de diseño y prototipado que permite a los diseñadores crear interfaces de usuario interactivas para web y aplicaciones móviles.
- Sketch: Una herramienta exclusiva para macOS que ha sido ampliamente popular por su facilidad de uso y su comunidad activa que produce una amplia variedad de plugins y recursos.

## Interacción con el Back-End:
Aunque el front-end se centra en el lado del cliente, a menudo necesita interactuar con el back-end (servidor, bases de datos) para recuperar, mostrar o enviar información.

## Desafíos en el diseño de la IU:
- Integración con otras áreas: ergonomía, psicología, usabilidad, análisis de tareas, etc.
- Skeuomorphism: Representación de atributos de objetos de la realidad en lo virtual.
Ejemplo computadora: Tenemos el escritorio, las carpetas con archivos, iconos como el de adjuntar (paperclip), acciones como cortar, copiar, pegar.
Luego se encuentran los desafíos técnicos para la implementación de la interfaz de usuario como mantenerse actualizado con las nuevas tecnologías de los distintos tipos de IU.
- Affordances - Intuición
El término "affordance", se refiere a las características percibidas de un objeto que indican intuitivamente su funcionalidad y uso. Es decir, una affordance es una sugerencia sobre cómo se debe interactuar con un objeto o elemento.
En el diseño de interfaces, las affordances ayudan a los usuarios a entender cómo deben interactuar con diferentes elementos en una interfaz, sin necesidad de instrucciones explícitas. Por ejemplo:
**Botones:** Se perciben como elementos que se pueden presionar o hacer clic. Una ligera elevación en un botón (un sombreado o un efecto 3D) puede indicar que está diseñado para ser pulsado.
**Deslizadores:** Su diseño sugiere que pueden ser arrastrados de un lado a otro.
**Enlaces subrayados o coloreados:** Indican que se pueden hacer clic y que te llevarán a otra página o abrirán más contenido.
**Icono de una papelera:** Sugiere la acción de eliminar algo.
Las affordances son esenciales para crear interfaces de usuario intuitivas. Si los usuarios pueden entender rápidamente cómo usar una interfaz basándose en las affordances visuales y funcionales presentadas, esto reduce la curva de aprendizaje y mejora la experiencia del usuario.
Sin embargo, es importante mencionar que las affordances deben ser claras y consistentes en diferentes culturas y contextos, ya que lo que puede ser intuitivo en una cultura o para un grupo demográfico puede no serlo en otro.

## Feedback al usuario
El feedback en la Interfaz de Usuario se refiere a las respuestas o indicaciones que un sistema proporciona a los usuarios en relación con las acciones que realizan. Estas respuestas ayudan a los usuarios a entender el estado del sistema, confirmar que una acción ha sido ejecutada, o alertar sobre errores o problemas.

### Tipos de feedback

- Feedback Visual:
Colores y Estilos: Por ejemplo, un botón que cambia de color al ser presionado.
Animaciones: Como una animación de "carga" que indica que una página está cargando.
Íconos: Como el ícono de un "check" que confirma que un formulario ha sido enviado con éxito.

- Feedback Auditivo:
Sonidos: Un "ping" o sonido corto que puede indicar que una acción ha sido completada o un error ha ocurrido.

- Feedback Táctil (Háptico):
Vibraciones en dispositivos móviles o controles de videojuegos que proporcionan retroalimentación sobre una acción o evento.

- Feedback Directo:
En interfaces táctiles, el desplazamiento inmediato de elementos bajo el dedo del usuario proporciona una sensación de control directo sobre la interfaz.

## Prototipado

El prototipado en UI (Interfaz de Usuario) se refiere al proceso de crear modelos preliminares de una interfaz para probar y validar las soluciones de diseño antes de que sean finalmente desarrolladas. Estos prototipos pueden variar desde bocetos a mano hasta modelos interactivos de alta fidelidad que imitan la interacción real del usuario con la aplicación o el sitio web.

Los prototipos son esenciales en el diseño de interfaces porque permiten:

- Visualizar Ideas: Los diseñadores pueden plasmar sus ideas y conceptualizaciones de cómo debería funcionar y verse una aplicación o sitio web.

- Pruebas de Usabilidad: Permite realizar pruebas con usuarios reales para identificar problemas y áreas de mejora en la interfaz antes de que el producto se desarrolle completamente.

- Ahorro de Tiempo y Recursos: Al identificar y corregir problemas en una etapa temprana, se evita gastar tiempo y recursos en el desarrollo de características que no son útiles o que pueden resultar confusas para los usuarios.

- Facilitar la Comunicación: Los prototipos sirven como una herramienta de comunicación visual entre los diseñadores, desarrolladores, stakeholders y clientes, haciendo más fácil transmitir y entender las ideas y soluciones propuestas.

- Tomar Decisiones de Diseño: Al tener un prototipo, se pueden tomar decisiones más informadas sobre el diseño, la navegación, la disposición de elementos, entre otros.

## Design System

Un "Design System" o "Sistema de Diseño" es un conjunto coherente y sistemático de reglas, componentes y herramientas que sirven como base para la creación y mantenimiento de interfaces digitales. En esencia, es una biblioteca de elementos de diseño y patrones combinada con una guía de estilo. Estos sistemas permiten a equipos de diseño y desarrollo construir productos de manera más eficiente y consistente.

Un Design System típico puede incluir:

- Componentes de UI (Interfaz de Usuario): Botones, campos de entrada, deslizadores, barras de navegación, modales, entre otros, todos definidos de manera clara y reutilizable.

- Patrones de Diseño: Soluciones comunes y reutilizables para problemas de diseño recurrentes, como formularios, navegación o notificaciones.

- Guías de Estilo: Definiciones detalladas sobre tipografía, paleta de colores, espacio, iconografía, voz y tono del contenido, entre otros.

## Recursos de aprendizaje

### Figma

https://www.figma.com/file/EtabMg4mbR2qJrJ6sKEsg8/PRESENTACION-FIGMA?type=design&node-id=1%3A98&mode=design&t=HHFBZJ551Nb4fExC-1

## Bibliografía

- Figma: https://www.esdesignbarcelona.com/actualidad/diseno-web/que-es-figma-funcionalidades-UX-UI

- Prototipado: https://virket.agency/blog/diseno-ux-ui/que-es-un-prototipo-para-diseno-web/

- Design System: https://profile.es/blog/que-es-design-system-ejemplo/

- ChatGPT: "qué tipos de interfaz de usuario hay?"

- ChatGPT: "Tipos de feedback al usuario en el contexto de interfaz de usuario"
