# Git - branch, merge y resolución de conflictos


## Uso de Ramas (Branching)

Cualquier sistema actual de control de versiones cuenta con algún método para para el uso de ramas. Al hablar de ramificaciones, nos referimos a tomar la línea principal de desarrollo (comúnmente llamada “main”) y seguir trabajando desde ese punto sin adherirse a la línea principal. 
En muchos sistemas de control de versiones este proceso es costoso, ya que generalmente implica generar una duplicación nueva del código, lo cual puede ser bastante demorado en proyectos extensos.

Uno de los aspectos más fuertes de Git es su capacidad para manejar ramificaciones de manera sencilla, instantánea y práctica, lo que realmente lo distingue de otros sistemas de control de versiones.

### ¿Cómo funciona una rama?

En cada confirmación de cambios (commit), Git guarda una instantánea del trabajo preparado, junto con metadatos como el autor y un mensaje explicativo. Además, incluye uno o más apuntadores (pointers) a los commits que son padres directos de este nuevo commit (un padre solo en situaciones normales y múltiples padres cuando se fusionan (merge) dos o más ramas).
Una rama Git es simplemente un puntero móvil apuntando a una de esas confirmaciones. 
Cuando realizamos el primer commit, se crea esta rama principal que apunta a dicho commit. Con cada nuevo commit que hagamos, la rama avanzará automáticamente. Cuando creamos una nueva rama se genera un nuevo puntero que puede avanzarse libremente independientemente a los cambios o actualizaciones en otras ramas, incluida la rama "main".

Es importante conocer que existe otro puntero llamado “HEAD”, el cual en Git es simplemente apunta a la rama en la que se está trabajando en ese momento.
Para redireccionar el HEAD a otra rama se puede usar los comandos checkout y switch.

### Comandos útiles (Branching)

 -  git branch: Enumera todas las ramas de tu repositorio. Es similar a git branch --list.
 -  git branch [rama]:  Crea una nueva rama llamada [rama].
 -  git branch -d [rama]: Elimina la rama especificada. Esta es una operación segura, ya que Git evita que elimines la rama si tiene cambios que aún no se han fusionado.
 -  git branch -D [rama]: Fuerza la eliminación de la rama especificada, incluso si tiene cambios sin fusionar.
 -  git branch -m [rama]: Cambia el nombre de la rama actual a [rama].

 -  git log:  Muestra el historial de commits.
 -  git log --oneline:  Comprime cada commit en una sola línea.

 - git checkout [id-commit]:  El HEAD apuntará al commit específico con el id [id-commit]
 - git checkout [rama]:  El HEAD apuntará al extremo de la rama llamada [rama].
 - git checkout -b [rama]:  Se crea una nueva rama llamada [rama] y el HEAD pasará a apunta al extremo de esta simultáneamente.
 - git checkout - : Se deshace el desplazamiento anterior (switch o checkout) y el HEAD vuelve a la posición anterior.

 - git switch [rama]:  El HEAD apuntará al extremo de la rama llamada [rama].
 - git switch -c [rama]: Se crea una nueva rama llamada [rama] y el HEAD pasará a apunta al extremo de esta simultáneamente.
 - git switch - : Se deshace el desplazamiento anterior (switch o checkout) y el HEAD vuelve a la posición anterior.


## Merge

"merge" o fusión refiere a la acción de combinar los cambios realizados en una rama en otra, generalmente en la rama principal (main). Lo que permite llevar las actualizaciones y mejoras de una parte del código a otra.

### Pasos:

 - Creación de la Rama de Trabajo
 - Edición de la Rama creada de manera local
 - Crear Pull Request / También se puede realizar manualmente con el comando merge [rama] el cual veremos a continuación
 - Resolución del conflicto (en caso de ser necesario)
 - Borrado de la rama creada anteriormente (es un paso opcional, buena práctica)

### Tipos de Merge

 - Merge Fast-Forward
Esto ocurre cuando no hay cambios nuevos en la rama de destino desde que se creó la rama que deseas fusionar. En este caso, Git simplemente avanza la rama de destino para que coincida con la rama que estás fusionando. Es una fusión simple y lineal.

 - Merge Regular
Este es el tipo de fusión más común. Sucede cuando hay cambios tanto en la rama de destino como en la rama que estás fusionando. Git creará un nuevo commit de fusión que combina los cambios de ambas ramas. Esto crea una bifurcación en el historial de commits.

 - Merge Squash
En una fusión squash, en lugar de mantener el historial de commits de la rama que estás fusionando, todos los cambios se "aplastan" en un solo commit en la rama de destino. Esto es útil cuando deseas mantener el historial limpio y simple.


### Comandos útiles (Merging)
 - git pull origin [rama] (trae actualizaciones desde el repositorio "origin" remoto)
 - git merge [rama] fusiona los cambios de la rama en la rama actual





 ## Resolución de conflictos


 ### Conflicto

Ocurre cuando dos o más ramas tienen cambios que entran en conflicto entre sí. 
Esto significa que Git no puede determinar automáticamente cuál de los cambios debe conservarse, y necesita la intervención del usuario para resolver la situación.
Generalmente se producen cuando cada rama tiene cambios realizados en la misma parte del mismo archivo, o cuando una rama elimina un archivo que otra rama ha modificado. 
Cuando Git detecta un conflicto, marca el archivo y muestra un mensaje que indica la ubicación del conflicto.

#### Tipos:

 - Conflictos de fusión (merge conflicts)
 - Conflictos de rebase (rebase conflicts)
 - Conflictos de cherry-pick (cherry-pick conflicts)
 - Conflictos por cambios simultáneos en un mismo archivo


 ### Conflicto de fusión (merge conflict)

Analicemos la siguiente situación:

Se tienen dos ramas (rama_A y rama_B).
En rama_A se realizan una serie de cambios en el archivo “ejemplo.txt”
En rama_B se realizan otros cambios en el mismo archivo y en la misma área.
Cuando se intente hacer un Merge de las ramas de la siguiente forma: git merge rama_B (asumiendo que mi HEAD esta en rama_A), Git notará  que ambas ramas han tocado las mismas líneas del archivo de forma diferente y no sabrá decidir cuál de los dos cambios finalmente se hará, es por esto que se genera un CONFLICTO y se requiere la intervención del usuario.

### Resolución del conflicto

Cuando Git detecta un conflicto resaltará los archivos involucrados y colocará marcadores especiales en el archivo para delimitar las diferencias entre las versiones en conflicto. 
Estos marcadores generalmente se ven así:



#####
<<<<<<<<<<<<
####
Cambios en la rama actual 
####
============
####
Cambios en la otra rama
####
->->->->->->->->
####





### Pasos:

 - Identificación de archivos en conflicto:
Se inicia ejecutando el comando "git status" para obtener una lista de los archivos en conflicto. 
Estos archivos estarán marcados con un mensaje que indica "both modified" (ambos modificados).

 - Toma de decisiones sobre los cambios a conservar:
Se deben analizar detenidamente los cambios en conflicto y decidir cuáles se desean mantener. Esto puede implicar la elección de uno de los conjuntos de cambios, la combinación de los cambios o incluso la realización de modificaciones adicionales según sea necesario.

 - Eliminación de marcadores de conflicto:
Una vez que se han tomado todas las decisiones y se han realizado todas las modificaciones necesarias, se deben eliminar los marcadores de conflicto 
(<<<<<<< , =======, >>>>>>> ).

 - Confirmación de los cambios resueltos:
Se debe utilizar el comando "git commit" para crear un nuevo commit que incluya los cambios resueltos.

 - Finalización de la operación:
Después de resolver todos los conflictos y realizar las confirmaciones necesarias, se debe finalizar la operación original siguiendo los pasos adecuados, como por ejemplo, "git merge --continue".






## Recomendaciones de uso

 - planificar y nombrar las ramas de manera descriptiva
 - asignar tareas específicas para cada rama
 - fusionar regularmente para evitar conflictos masivos
 - resolver conflictos uno por uno de forma metódica
 - mantener a tu equipo informado sobre conflictos y resoluciones

## Recursos de aprendizaje

 - https://learngitbranching.js.org/ (Visualización, uso de ramas y merge).





## Bibliografía

 - https://git-scm.com/ "Pro Git" de Scott Chacon y Ben Straub
 - https://git-scm.com/book/es/v2/Ramificaciones-en-Git-%C2%BFQu%C3%A9-es-una-rama%3F “Git - ¿Qué es una rama?”
 - https://www.atlassian.com/es/git/tutorials/using-branches “Rama de Git”
 - https://www.atlassian.com/es/git/tutorials/using-branches/git-checkout “Git Checkout”
 - https://keepcoding.io/blog/que-es-git-merge/ “Git Merge”
 - (chat.openai.com, 2023, prompt: Pasos para la resolución de un conflicto)
 - (chat.openai.com, 2023, prompt: ¿Que es un conflicto en el contexto de git y sus tipos?)
