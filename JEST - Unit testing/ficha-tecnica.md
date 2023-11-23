# **Pruebas (Testing) Jest**

El testing es el proceso utilizado para verificar y validar cada etapa de desarrollo sobre la que avanzamos en nuestro código fuente. Esto nos permitirá conocer en estados tempranos de desarrollo si cada etapa del programa se comporta como se supone que debe hacerlo.

Esta metodología nos permite:

- **Detección temprana de errores** : lo que es mucho más económico y menos disruptivo que solucionar problemas en etapas avanzadas.
- **Mejora la calidad del código**
- **Aumento de la confiabilidad** : Las pruebas ayudan a garantizar que el software funcione como se espera en una variedad de situaciones y escenarios, lo que aumenta la confiabilidad.
- **Reducción de riesgos:** La identificación temprana de problemas y errores ayuda a mitigar los riesgos asociados con el desarrollo de software, como retrasos en el proyecto o problemas de seguridad.
- **Facilita la colaboración** : Las pruebas proporcionan una base objetiva para la comunicación entre miembros del equipo de desarrollo.
- **Mantenimiento más sencillo** : facilita la detección y corrección de problemas en futuras actualizaciones y mantenimiento del software.
- **Documentación viva:** Las pruebas sirven como documentación viva de cómo se supone que debe funcionar el software. Esto es especialmente útil cuando se incorporan nuevos miembros al equipo o cuando se vuelve a trabajar en un proyecto después de un tiempo.
- **Mayor confianza en los cambios** : Cuando se realizan modificaciones en el código, las pruebas permiten verificar rápidamente si se han introducido errores inadvertidamente.
- **Cumplimiento de requisitos:** Las pruebas ayudan a garantizar que el software cumpla con los requisitos y especificaciones establecidos.

## **Pruebas unitarias (Unit Tests)**

Las pruebas unitarias funcionan descomponiendo funciones y/o procedimientos del programa con el fin de probar individualmente estas pequeñas unidades de código.

Las pruebas unitarias abarcan: Funciones, clases, métodos, entre otras piezas pequeñas.

Para aislar funciones de código o unidades de código, los desarrolladores realizan stubbing que resumidamente es simular el comportamiento de un código existente o ser un sustituto temporal de un código aún por desarrollar.

Por otro lado, los usuarios deben definir las expectativas dentro de los casos de prueba y a medida que se ejecutan las pruebas unitarias, los valores de salida se pueden recopilar e inspeccionar para verificar que sean correctos.

Las pruebas unitarias tienen el mayor efecto en la calidad del código cuando son parte integral del flujo de trabajo de desarrollo de software. En cuanto se escriba una función u otro bloque de código de aplicación, se debe crear pruebas unitarias que comprueben el comportamiento del código en respuesta a casos estándar, como también entrada de valores fuera de los rangos esperados, incluidos los valores nulos. Esto elimina defectos como violaciones de acceso a la memoria, escenarios de división por cero, condiciones de desbordamiento de pila y otros errores de seguridad y confiabilidad.

En el desarrollo controlado por pruebas, las pruebas unitarias se crean antes de escribir el código, de modo que se usan como documentación de diseño y como especificaciones de las funciones.

Hay tres tipos de pruebas unitarias realizadas por equipos de software.

- **Prueba de unidad manual:** El desarrollador o ingeniero de pruebas escribe código de prueba.
- **Pruebas unitarias automatizadas:** Los desarrolladores pueden confiar en una GUI (Interfaz gráfica de usuario), que son el proceso de probar la interfaz gráfica de usuario de una aplicación de software, y un marco de prueba con el fin de simplificar la creación de pruebas unitarias.
- **Pruebas unitarias habilitadas para inteligencia artificial**

---

## **F.I.R.S.T.**

Las pruebas unitarias deben de seguir cinco reglas, cada una es parte de la sigla.
**Fast** : Las pruebas deben ejecutarse rápido, de no ser así se tenderá a no ejecutarlas.

**Independent** : Cada una de las pruebas no debe depender de otra, de forma tal de poder ejecutarlas en cualquier orden e incluso en paralelo. De no cumplir esta regla se dificulta encontrar los errores en el código.

**Repeatable** : Las pruebas deben poder repetirse independiente del entorno de ejecución, en mi entorno de desarrollo, en mi laptop o en los servidores de mi empresa.

**Self-Validating** : Cada prueba debe de resultar exitosa o fallar, debe de ser binaria la respuesta y automática(sin intervención más que la de ejecutarla). No se debe hacer una evaluación manual para identificar si estas son exitosas o no. De otra forma el éxito de la prueba puede ser subjetivo y determinar si el código les satisface llevar mucho tiempo.

**Timely** : En el proceso de desarrollo las pruebas deben de crearse en el momento adecuado, antes que el código de producción. Si se llegan a generar después, testearlo puede llegar a ser difícil.

**Ventajas de las pruebas unitarias**

- Identifica problemas de calidad: defectos de seguridad, protección y confiabilidad.
- Asegura que se cumplan los requisitos funcionales.
- Las pruebas unitarias se reutilizan para eliminar las regresiones de código.
- Simplifica el proceso de depuración.
- Proporciona métricas de la aplicación sobre el estado y los puntos críticos.
- Proporciona un trabajo ágil: Detectar errores rápido.
- Si primero se crean los tests, es mucho más fácil saber con anterioridad cómo debemos enfocar el diseño y ver qué necesidades debemos cumplir.

**Desventajas de las pruebas unitarias**

- Las pruebas unitarias manuales requieren mucho tiempo y mano de obra.
- Las pruebas unitarias por sí solas, no son perfectas, puesto que comprueban el código en pequeños grupos, pero no la integración total del mismo

**Test unitario: Jest**

Jest es un testing framework de JavaScript de código abierto diseñado para simplificar y agilizar el proceso de escritura y ejecución de pruebas, ya que, mientras otras suite de test necesitan de un motor (test runner) para pasar los test y de la propia suit de test como de una librería de aserciones o matchers, Jest intenta que todo esto esté ya agrupado.

**Entre las razones para usar Jest se encuentran:**

- **Rapidez:** Jest es un framework de pruebas rápido que proporciona resultados rápidos y precisos.
- **Facilidad de uso:** Jest es fácil de instalar, configurar y utilizar. Además, proporciona una gran cantidad de documentación y ejemplos para ayudar a los desarrolladores a empezar rápidamente.
- **Potencia:** Jest proporciona una gran cantidad de funcionalidades potentes e innovadoras que permiten a los desarrolladores realizar pruebas unitarias, de integración y de extremo a extremo con facilidad.
- **Flexibilidad:** Jest es un framework de pruebas flexible que se puede utilizar para probar aplicaciones web y móviles en cualquier entorno.

**Conceptos claves para las pruebas con Jest**

Los siguientes conceptos nos ayudarán a entender la terminología y palabras reservadas que utiliza Jest para su funcionamiento.

- **Describe:** Función que nos ayudará a crear bloques que agrupan varias pruebas relacionadas.
- **Test:** Función en donde se probará la casuística. Destacando que la función test contiene un alias llamado "it" que adopta la misma funcionalidad.
- **Expect:** Función que permite validar coincidencias durante la prueba. Estas coincidencias son las que Jest validará arrojando resultados según el criterio. La función expect se utiliza cada vez que se necesite validar un valor.

---

## **Jest matchers**

Los matchers son las funciones utilizadas por el framework de test para comprobar si el valor esperado por la prueba automática coincide realmente con el obtenido. Cuando una afirmación con un matcher falla, Jest mostrará un mensaje de error detallado que te ayudará a identificar qué esperabas y qué valor obtuviste, lo que facilita la depuración de problemas en tu código.

Algunos ejemplos de matchers en Jest son los siguientes:
```javascript
test('2 + 2 es igual a 4', () =\> {

    expect(2 + 2).toBe(4);

});
```
```javascript
test('data es igual a 42', () =\> {

    const data = { value: 42 }; 

    expect(data).toEqual({ value: 42 });

});
```
```javascript
test('array contiene un 2', () =\> {

    const array = [1, 2, 3];

    expect(array).toContain(2);

});
```

A continuación, el listado de algunos de los matchers más utilizados en Jest:

- **toBe(value):** Compara si el valor es idéntico **(===)** al valor esperado.
- **toEqual(value):** Compara si el valor es igual al valor esperado en términos de propiedades y valores de objetos o arrays.
- **toBeCloseTo(value,numDigits):** compara números de punto flotante con una precisión determinada. El argumento value es el número con el que se compara el número flotante. El segundo argumento, numDigits, es opcional y limita el número de dígitos a comprobar después del punto decimal. Por defecto, numDigits es 2.
- **toBeNull():** Comprueba si el valor es null.
- **toBeDefined():** Comprueba si el valor está definido (no es undefined).
- **toBeUndefined():** Comprueba si el valor es undefined.
- **toBeTruthy():** Comprueba si el valor es "truthy" (evaluado como verdadero en un contexto booleano).
- **toBeFalsy():** Comprueba si el valor es "falsy" (evaluado como falso en un contexto booleano).
- **toBeGreaterThan(value):** Comprueba si el valor es mayor que el valor esperado.
- **toBeGreaterThanOrEqual(value):** Comprueba si el valor es mayor o igual que el valor esperado.
- **toBeLessThan(value):** Comprueba si el valor es menor que el valor esperado.
- **toBeLessThanOrEqual(value):** Comprueba si el valor es menor o igual que el valor esperado.
- **toContain(item):** Comprueba si un array o string contiene un elemento específico.
- **toHaveLength(length):** Comprueba si un array o string tiene la longitud esperada.
- **toMatch(pattern):** Comprueba si un valor coincide con un patrón de expresión regular.
- **toThrow(error**?): Comprueba si una función arroja una excepción. Puede proporcionarse un error específico.
- **toBeInstanceOf(constructor):** Comprueba si un valor es una instancia de una clase específica.
- **toHaveBeenCalled():** Comprueba si una función (spy) se ha llamado al menos una vez.
- **toHaveBeenCalledTimes(count):** Comprueba si una función (spy) se ha llamado un número específico de veces.
- **toHaveBeenCalledWith(arg1, arg2, ...):** Comprueba si una función (spy) se ha llamado con argumentos específicos.

### **Ejemplo de prueba**

**Instalación de Jest**

Realizaremos una prueba de ejemplo con una función simple para poder entender el funcionamiento de Jest.

Antes de comenzar, para realizar este ejemplo, es necesario tener instalado Nodejs en nuestro entorno de trabajo. Una vez instalado generamos una carpeta de nombre prueba para realizar el test de ejemplo.

Ejecutaremos el comando ``` npm init ``` en nuestra terminal que generará el primer paquete json de nuestro proyecto, nos pedirá ingresar algunos datos, donde en ```test command``` ingresaremos ```jest```.

![](img/picture1.png)

![](img/picture2.png)

Damos enter e ingresamos **yes**, esto generará el archivo **package.json** con toda la información registrada en nuestra terminal

El siguiente paso instalaremos jest usando el gestor de paquetes de su preferencia (npm, Yarn o pnpm), en este caso utilizaremos nmp, ingresando en terminal el siguiente comando:

``` npm install –save-dev jest ```

Esperaremos que Jest se instale en nuestro sistema operativo hasta que aparezca el siguiente mensaje:

![](img/picture3.png)

Quedando la instalación finalizada.

---

**Prueba de ejemplo**

Ya teniendo Jest instalada crearemos la carpeta src donde ingresaremos los archivos con los códigos que deseemos posteriormente probar. Dentro de la carpeta creamos el archivo sum.js en donde ingresaremos la función suma

![](img/picture4.png)

Luego, crearemos la carpeta ``` __test__ ```, en esta crearemos el archivo que se encargará de realizar todas las pruebas, en este caso la de la función suma. Por lo tanto, crearemos el archivo sum.test.js.

Como consideración Jest por defecto busca la carpeta llamada ``` __test__ ``` para buscar pruebas y abarcará todos los archivos que su interior contengan el nombre con la terminación ```.test.js``` o ```.spec.js```.

![](img/picture5.png)

El archivo de prueba, está terminado, solo queda ejecutar la suite de pruebas

**¿Cómo ejecutar la suite de pruebas?** Con el comando ``` npm test ``` esto lo podemos hacer gracias a que en nuestro package.json especificamos que vamos a estar utilizando a jest como comando de pruebas. Jest va a ir automáticamente a la carpeta ```__test__``` y ejecuta el archivo .test, mostrándonos los resultados.

Cada uno de estos archivos ```<nombre>.test.js``` es una Suite de testeo

![](img/picture6.png)

![](img/picture7.png)

Si en el archivo de test ingresamos ```expect(sum(2,2)).toBe(5)``` en vez de ``` **expect(sum(2,2)).toBe(4)** ```, entonces, en consola, al probarlo nos dará error ya que esperábamos un 5 y nos retorno un 4

![](img/picture8.png)

Es muy normal dividir cada prueba en 3 bloques bien diferenciados (**Arrange**, **Act**, **Assert**), cada uno cumple una función y se declaran en ese orden.

En el caso de **Arrange** declaramos las variables y constantes necesarias para probar la funcionalidad y podemos definir ya el valor esperado también.

En el bloque de **Act** únicamente ejecutamos la funcionalidad con los parámetros definidos previamente

**Assert** define si la prueba es exitosa o fallida

**Parámetros opcionales**

```--verbose```: Describe cada una de las pruebas y si estas pasaron o no para todos los test suites, junto a la versión de node. npm y los parámetros de la ejecución.

```--coverage```: No agrega información relacionada a la cobertura de código para los

---

## TDD

El desarrollo guiado por pruebas(Test Driving Development) es una metodología ágil de desarrollo software en forma incremental junto a las pruebas correspondientes.

Tiene como objetivo guiar el desarrollo en la búsqueda de minimizar los bugs y generar el menor código posible que permita implementar las funcionalidades requeridas, a la par de incrementar la mantenibilidad del software.

1. Para llevar a cabo esto se parte de los requerimientos identificados que describen las funcionalidades que nuestro software debe proveer, considerando una de estas lo siguiente es escribir una prueba unitaria que busque testear la funcionalidad una vez que esta esté implementada(no necesariamente completa).

1. Luego se corre la misma sin haber implementado la funcionalidad, esto se hace con la finalidad de comprobar que la prueba puede ejecutarse y esta falla.

1. En este tercer paso implementamos la funcionalidad buscada de forma tal de que la prueba falle haciendo lo mínimo para lograrlo.

1. En el último paso hacemos el cambio mínimo para lograr pasar la prueba, con la prueba ejecutándose de forma correcta podemos hacer refactor tanto del código que ejecuta como la prueba misma.

Desarrollar software con esta metodología ayuda al desarrollador aclarando sus ideas, dado que se debe tener en mente que se busca probar antes de codificar la solución.

Otros beneficios de esta práctica son:

- **Cobertura de código** : Es una métrica del porcentaje del código evaluado por las pruebas.
- **Pruebas de regresión** : Al modificar el programa se pueden ejecutar las pruebas para demostrar que este cambio no tuvo impacto en el resto del código.
- **Depuración simplificada** : Cuando falla una prueba por un cambio introducido, queda claro por qué y dónde se encuentra esta falla.
- **Documentación del sistema** : Las mismas pruebas pueden proveer funcionar como una parte de la documentación al mostrar cómo se espera utilizar el software producido y dando ejemplos de cómo no hacerlo, y cómo tratar el caso de error

**Test Double**

Al desarrollar software empleando TDD es muy común que tomemos un enfoque Top-Down(Es decir con la capa de abstracción más alta y progresivamente bajamos), al realizar las pruebas llegará el momento donde precisemos interactuar con otros módulos o clases pertenecientes a la capa de abstracción de abajo o inclusive en la misma que ahora implementamos.

 Dado que no disponemos de esta implementación, y que las pruebas son de unidad(buscan testear únicamente al componente actual y no al sistema en su conjunto o más de un componente) debemos encontrar una forma de simular estos componentes.

Es acá donde entran los Test doubles, sin entrar mucho en detalle pues en DA2 se hará énfasis, podemos dividirlos en estos 4 casos: Dummies, Fakes, Mocks, Stubs.

**Dummies** : Son objetos vacíos, se crean para cumplir con una dependencia pero nunca se utilizan en realidad. Ej: si nuestro componente en desarrollo depende de alguna manera de un objeto que tiene la funcionalidad de loguear las acciones que se llevan a cabo, podemos moldearlo con uno que al invocar a la función no ejecute código alguno.

**Fakes** : Se caracterizan por ser objetos con una implementación en funcionamiento, implementan la misma interfaz del objeto que buscamos simular pero toma atajos para mejorar la performance. Ej: si se precisa acceder a una base de datos, esta se puede simular como una in-memory database.

**Mocks** : Los mocks son objetos más novedosos, se trata de objetos pre programados para cumplir con expectativas que definimos para ellos.

Buscan simular el comportamiento del componente que sustituyen pero tienen un comportamiento avanzado, como el de definir que pueden fallar, preguntar cuantas veces se ejecutaron y hacer que la prueba falle al no definir el comportamiento que debía cumplir el objeto.

**Stubs** : Son objetos que reemplazan el componente que les corresponde con resultados hardcoded para obtener resultados consistentes.

Ej: Supongamos que queremos testear un componente que agrega usuarios a lista, y este componente depende de una implementación de la interfaz IProveedorDeUsuarios, podríamos definir un objeto que la implemente y retorne una lista hardcoded.

---

**Bibliografía y enlaces de interés** :

Ingeniería del software - Ian Sommerville - Cap 8.2

Clean Code - Robert C. Martin - Cap 9

Documentación de Jest [https://jestjs.io/](https://jestjs.io/)

Documentación incluida en npm Jest - comando: ```npm help test```