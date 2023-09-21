## **USER STORY**

### **Definición**
En lo que a ingeniería de software se refiere, una historia de usuario es una **pequeña unidad de trabajo** que **posee cierto valor** para un usuario final. Es una explicación informal sobre un objetivo/funcionalidad que se busca alcanzar, expresada desde el lado del usuario. Para la creación de estas historias existen muchas herramientas que nos ayudan como por ejemplo Trello o Jira. Por lo general las historias de usuario son escritas por el cliente, el PM, o también por el equipo de desarrollo pero **siempre desde el punto de vista del usuario**.

### **Principales características (INVEST):**


**Independiente**\
Esto implica que no haya más de una historia superpuesta con otra. Esto agrega mas complejidad de lo esperado cuando en realidad puede ser dividida en más de una historia que si sean independientes entre si. 
También deben poder ser implementadas en cualquier orden, de lo contrario existe algún tipo de dependencia

**Negociable**\
Debe ser flexible y los detalles deben poder ser modificados, no es un contrato. No define una unica manera de lograr el objetivo

**Valioso**\
¿Cuál es el aporte de esta tarea? ¿Qué beneficio trae?

**Es estimable**\
Debe poder definirse el tiempo que llevara realizar la tarea. Una historia de usuario puede no ser estimable debido a dos motivos:

1. Los devs carecen del conocimiento necesario sobre el tiempo que puede tardar

2. La historia de usuario es muy grande

**Small (pequeña)**\
Si es muy grande puede ser que haya más de una historia de usuario solapada o que en realidad la complejidad es más de la pensada. Si es muy pequeña es posible que lleve más tiempo la especificación del problema y la estimación que la propia solución.

**Testeable**\
Debe ser posible identificar cuando la tarea está completada o no. Muchas herramientas como Jira utilizan apartados de “Definition of done” donde se detallan punto por punto las condiciones que se deben de complir para dar por cerrada la tarea.


### Ejemplos templates

**Template 1**

\<Título>\
Cómo \<rol>\
Quiero poder \<capacidad>\
Para \<obtener resultado>\
Criterios de aceptación \<lista>

**Template 2:**

\<Value Statement>\
Se explica qué valor aporta la funcionalidad a implementar u objetivo a alcanzar, cuál es el motivo de la inversión de tiempo en esta tarea.

\<Tasks to be done>\
Se detalla punto por punto los pasos a seguir para realizar la tarea.

\<Definition of Done>\
En este apartado se explica que significa que la tarea esté terminada. Es una manera de que la persona encargada de la misma sea capaz de darse cuenta si efectivamente se cumplieron todos los requisitos.\

### Historias de usuario y metodologías ágiles

Las historias de usuario son muy comúnmente utilizadas junto a metodologías de trabajo ágiles tal como scrum y kanban. En Scrum, se tienen reuniones junto a todo el equipo de desarrollo donde se selecciona por parte del PM o Team Leader las historias de usuario que se llevarán a cabo durante el siguiente sprint (ciclo de trabajo dentro de un proyecto). El conjunto de historias componen las epics, que son unidades de trabajo mucho más grandes y complejas que surgen a partir de cierta iniciativa.

****![](https://lh4.googleusercontent.com/hBk92cC6zSpuwDLhBS6dRDA5RXwMDvX6thE0j_MnwGUK3XnhJM3T6LEvfL3qqQqpQVh_hnX2mZZp0bvyOpUwGndoX6hEdBRW-u-vAVWwOxFhyLa4yHlbvBNJZuoMxJfyBXTHlnPBJgxlHKZwuOFXyiI)****




## **USE CASES**

Para la recopilación de requerimientos y comunicación a alto nivel entre las partes involucradas en un proyecto los PM necesitan describir **como un usuario va a interactuar con el sistema**.
Esto puede incluir una descripción del producto o funcionalidad con nivel de detalle técnico.

Para visualizar lo anterior en forma mas organizada y visual es muy útil la creación de un caso de uso.

### ¿Que es un caso de uso?

Un caso de uso es una descripción de como un usuario interactúa con un sistema. Las empresas construyen casos de uso para establecer escenarios de éxito, escenarios de falla y cualquier escenario alternativo o excepción que pueda surgir.

Muchas organizaciones utilizan herramientas para modelado tales como LucidChart y SmartDraw para escribir y representar visualmente los mismos.

Los casos de uso se emplean muy frecuentemente en ambientes de desarrollo de software para simplificar conceptos complejos, pero también pueden usarse como herramienta para recopilar requerimientos y definir el alcance de un proyecto.

### ¿Quien crea un caso de uso?

La metodología de crear un caso de uso puede ser llevada a cabo por distintos actores como: Gerente de producto, gerente de desarrollo o gerente de testing. Los Gerentes de producto y gerentes de desarrollo emplean los casos de uso de manera similar: como una herramienta para especificar cómo el sistema reaccionara ante las actividades que realice un usuario, sin embargo, existen algunas diferencias clave:

Los gerentes de producto suelen documentar casos de uso centrados en el usuario y sus objetivos, mientras que los desarrolladores documentan casos de uso centrados en el producto y guian la toma de decisiones durante el proceso de desarrollo.

Los desarrolladores de productos suelen añadir elementos técnicos y de diseño para proporcionar un contexto crucial. Este conjunto de casos de uso mejorados brinda al equipo de desarrollo la información necesaria para comenzar a diseñar, crear y probar el producto y sus características.

### ¿Para qué está diseñado un caso de uso?

Un caso de uso está diseñado para revelar las demandas del sistema en las primeras etapas del proceso. Los casos de uso se concentran en los usuarios del sistema más que en el sistema en si mismo.

 Un caso de uso debe ser comprensible para todas las partes interesadas, no solo para los desarrolladores y evaluadores, porque en su mayoría es prosa narrativa. Esto incluye clientes, usuarios y ejecutivos. Durante las primeras etapas de planificación, debe involucrar a los roles que sean más adecuados para resolver el problema en cuestión. Esto anima a los usuarios finales a aceptar la solución y reduce las sorpresas una vez que el sistema está implementado.

Cada caso de uso está diseñado específicamente para cubrir solo una aplicación del sistema. Dicho esto, una ventaja clave del modelado de casos de uso es que también cubre todos los problemas potenciales. Encontrar requisitos menores al principio del proyecto ahorra mucho tiempo al identificar excepciones a un escenario exitoso.

Finalmente, después de crear un caso de uso, puede usarlo para guiar la creación de muchos otros componentes de desarrollo de software, como modelos de objetos, definiciones de casos de prueba, documentación de usuario y planificación de proyectos (costos, complejidad y estimaciones de programación).

Como gerente de producto, una de las mejores justificaciones para crear casos de uso es que sirven como puntos de conexión genuinos. Deben ser realmente comprensibles tanto para los usuarios técnicos como para los profesionales, de modo que todos puedan comentar sobre ellos. Los analistas de negocios aprovechan los casos de uso como herramienta de comunicación para alinear a las personas para que adopten un enfoque y comprensión común de lo que el software pretende lograr.

Por otro lado, un gerente de producto técnico podría emplear casos de uso para llegar a las partes interesadas del negocio sin utilizar jerga tecnológica, hablando más sobre lo que hace el sistema que sobre cómo lo hace. A la hora de codificar esto es de gran ayuda para acelerar y aclarar la comunicación.

### Elementos de un caso de uso

Analicemos los componentes de un caso de uso típico y expliquemos el propósito y objetivo de cada uno:

- Actores
- Sistemas
- Objetivos
- Condiciones previas
- Flujo básico
- Flujos alternativos

 **Actores**\
Los actores son las personas o cosas que interactúan con su sistema. Un actor puede ser un individuo, una empresa, un equipo, etc. Cualquier cosa que exista fuera de un sistema y participe en algún tipo de interacción con él califica como actor. La parte interesada que pone en marcha una interacción para lograr un objetivo utilizando su sistema se conoce como actor principal.

**Sistemas**\
Su sistema, al que algunas personas llaman escena, se compone de una serie de decisiones e interacciones realizadas por sus actores. 

**Objetivos**\
Los resultados de las interacciones de un actor con el sistema son sus objetivos. El sistema puede producir uno o varios resultados dependiendo de las circunstancias. 

**Condiciones previas**\
Las condiciones previas son afirmaciones o realidades sobre lo que debe ocurrir antes y después del caso de uso. A menudo, los desarrolladores de software son conscientes de las acciones que deben realizarse antes de la siguiente. Por ejemplo, digamos que un comprador en línea hace clic en un producto para obtener una descripción detallada y comentarios de los clientes. El botón **Agregar al carrito** no aparecerá hasta que el artículo esté en stock y sea accesible en el almacén.

**Flujo básico**\
Un caso de uso que funciona según lo previsto, sin excepciones ni errores en la ejecución, se conoce como flujo fundamental o escenario de éxito principal. Esto suele servir como punto de partida a la hora de desarrollar diversas funciones. Saber cómo funciona un escenario típico puede ser de ayuda para escribir código preciso y generar flujos alternativos.

**Flujos alternativos**\
Una desviación del escenario de éxito principal se conoce como camino alternativo o flujo alternativo. Esto suele manifestarse cuando se produce un error a nivel del sistema. En esta sección del caso de uso se enumeran las excepciones más probables o notables que podría hacer un actor.

### Cómo escribir un caso de uso

Para escribir un caso de uso, complete los siguientes pasos:

1. Determinar el público objetivo del producto.
2. Seleccione un usuario de esa lista.
3. Determine qué quiere hacer exactamente el usuario con el producto y cree un caso de uso separado para cada acción.
4. Determinar el flujo típico de eventos para cada caso de uso cuando el usuario utiliza el producto.
5. En la descripción del caso de uso, describa el curso fundamental. Dé ejemplos de lo que realiza el usuario y con qué responde el sistema para que el usuario esté al tanto de ambos.
6. Considere cursos de acción alternativos e inclúyalos para “ampliar” el caso de uso una vez que se haya presentado el proceso fundamental
7. Busque conexiones entre los casos de uso. Extráigalos y márquelos como casos de uso típicos para cursos.

### Conclusión

Los casos de uso ayudan a los equipos de productos a comprender las funciones de un sistema desde el punto de vista de distintos usuarios. Ayudan a las partes interesadas de toda la organización a comprender visualmente los distintos flujos y cómo los grupos de usuarios interactúan con el sistema. Los casos de uso también apoyan al equipo de desarrollo a la hora de generar conceptos y evaluar la viabilidad de los casos de uso. La definición de casos de uso es una fase crucial en el proceso de desarrollo de software y es una habilidad crítica para cualquier gerente de producto.



## ¿Las historias de usuario son casos de uso?
 
La primera diferencia notoria respecto a las historias de usuario es el nivel de detalle. Los casos de usos implican que debemos realizar un relevamiento previo para acotar todos los detalles y recién ahi empezar con el desarrollo. Mientras que una historia de usuario permite tener cierto nivel de ambiguedad.

Independientemente del método usado, lo ideal es llegar a lo mismo. Tener en detalle la funcionalidad, solamente que con la historia de usuario podemos empezar antes el desarrollo e ir refinando. 

Otra diferencia que nos encontramos es que mientras que en las historias de usuario estamos enfocados en encontrar la necesidad de la funcionalidad por parte del usuario (el para qué), en los casos de uso describimos detalladamente las interacciones de nuestro software con actores externos para satisfacer esa necesidad. Adicionalmente se los utiliza como una herramienta para documentar requerimientos. 

Los casos de uso al ser más complejos son más difíciles de leer y pueden contener algún lenguaje técnico, mientras que las historias de usuario son mas fáciles de comprender y cualquier persona fuera del proyecto logra entender la misma.

Podríamos decir que una **historia de usuario** representa el "qué" quiere el usuario y un **caso de uso** el "cómo" lo quiere.

### Cuando usar US o UC

Las historias de usuario son pequeñas unidades de trabajo cuyo objetivo es entender la necesidad del usuario y buscar la mejor solución posible. Esto requiere entender y estar muy conectado con el usuario/cliente, colaborar muy íntimamente.

Los casos de uso se aplican generalmente cuando la relación entre equipo y cliente es más lejana. Allí es donde hace falta una forma para definir requisitos que sea más técnico y vaya más a detalle.

US:
- Descripciones cortas
- Definir quién y para que
- Orientación general
- No tiene detalle técnico

UC:
- Descripciones más largas
- Define flujos e interacciones con el sistema
- Orientación en profundidad
- Más detalle tecnico

![](https://lh3.googleusercontent.com/7Q4P9NhgPV1CbSyKZaEEG80vQ1o2m9Fr4P1FMaKBgzznHIeabyBjscgT8ib9VThEDMEo9Is9qT_M_kN1u3MyH7-aeFex0wjawTVeu2QRq8O1fwTzfXIp9xIH1g9HObzHY7av5VPZdGD_Akm2yIQeplk)



# Fuentes

- https\://www\.atlassian.com/es/agile/project-management/user-stories\
- <https://scrum.mx/informate/historias-de-usuario#queesunahdu>Fotos:\
- https\://www\.smartsheet.com/sites/default/files/IC-Agile-User-Story-Template.png\
- <https://assets.justinmind.com/wp-content/uploads/2020/09/user-story-examples-product-plan.png>
- https\://community.atlassian.com/t5/image/serverpage/image-id/46423iF513D2D2CE47F6B9?v=v2
- https\://blog.logrocket.com/product-management/what-is-a-use-case-template-how-to-write/
- https://scrum.menzinsky.com/2016/08/las-historias-de-usuario-son-casos-de.html
- https://somospnt.com/blog/104-casos-de-uso-una-alternativa-diferente