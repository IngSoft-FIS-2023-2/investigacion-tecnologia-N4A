Josefina Mendoza 256860 - Felipe Cheker 269542 - Francisco Sosa 291719

# Git - Comandos Básicos

## Introducción a git

Los proyectos de la vida real generalmente tienen múltiples desarrolladores trabajando en paralelo. Así que necesitan un sistema de control de versiones como Git para asegurarse de que no hay conflictos de código entre ellos.

## Historia de Git

Git es un software de control de versiones gratis y de código abierto. Fue creado por Linus Torvalds en 2005. Esta herramienta es un sistema de control de versiones que fue inicialmente desarrollado para trabajar con varios desarrolladores en el núcleo de Linux.

________________
## Comandos de git:

### Git Init: 
Git init es el primer paso para crear un repositorio Git local. Configura el entorno para rastrear los cambios en tus archivos, te permite realizar confirmaciones, explorar el historial y trabajar en ramas para desarrollar nuevas características. Además genera una carpeta oculta que brinda la estructura de datos dentro del proyecto.

Ejemplo de comando: git init

________________
### Git Clone: 
Git clone realiza una copia idéntica de la última versión de un proyecto en un repositorio y la guarda en tu ordenador. La clonación del repositorio remoto puede ser mediante los protocolos SSH y HTTPS (hay algunas plataformas como Github que permiten otros medios). 
* En caso de que el servidor sea remoto, se utiliza el comando: 
git clone nombredeusuario@host:/path/to/repository
* En caso de que el servidor sea local, se utiliza el comando: 
git clone /path/to/repository

________________
### Git Branch:
Las ramas (branch) son altamente importantes en el mundo de Git. Usando ramas, varios desarrolladores pueden trabajar en paralelo en el mismo proyecto simultáneamente. Podemos usar el comando git branch para crearlas, listarlas y eliminarlas.
Ejemplos de comandos:
* Crear una rama:  git branch <nombre-de-la-rama>
* Listar las ramas:  git branch
* Eliminar una rama:  git branch -d <nombre-de-la-rama>

________________
### Git checkout: 
Se utiliza para cambiar entre ramas, confirmaciones (commits) específicas o para restaurar archivos en el árbol de trabajo. La funcionalidad exacta de git checkout varía según cómo se utilice. Este comando se puede utilizar de varias formas, hay tres de ellas que son las más comunes: 
* Moverse de una rama a otra: git checkout <nombre-de-la-rama>
* Crear una rama a partir de otra:  git checkout -b <nueva_rama>
* Moverse a un commit específico de una rama: git checkout identificador_del_commit

Consideración a tener antes de ejecutar el comando git checkout:
* Los cambios en tu rama actual tienen que ser confirmados o almacenados en el guardado rápido (stash) antes de que cambies de rama.

________________
### Git status:
Este comando te informa del estado de los archivos de tu proyecto, devolviendo los archivos en los cuales hubo cambios. Listará los archivos en verde o en rojo, los archivos en verde se han añadido a la preparación pero no se han confirmado todavía. Los archivos marcados en rojo son aquellos que no han sido añadidos a la preparación ya que sufrieron un cambio y no han sido agregados al área de etapa.
Ejemplo de comando:
 git status
 
________________
### Git add:
Cuando creamos, modificamos o eliminamos un archivo, estos cambios suceden en local y no se incluirán en el siguiente commit (a menos que cambiemos la configuración).
Necesitamos usar el comando git add para incluir los cambios del o de los archivos en el siguiente commit. Al ejecutar este comando, el/los archivo/s pasarán al área de stage. 

git add <archivo> - Para añadir un único archivo

git add -A - Para añadir todos de una vez

Importante: El comando git add no impacta el cambio en el repositorio y los cambios que no han sido guardados hasta que no utilicemos el comando de confirmación git commit.

________________
### Git commit: 
Este comando se ejecuta una vez que se llega a cierto punto en el desarrollo en el que queremos guardar nuestros cambios (quizás después de una tarea o asunto específico), estos cambios serán guardados en el ambiente local.   

Git commit es cómo establecer un punto de control en el proceso de desarrollo al cual podes volver más tarde si es necesario.
También es necesario escribir un mensaje corto para explicar qué hemos desarrollado o modificado en el código fuente.
Con este comando podemos visualizar quien hizo el cambio y qué cambios se hicieron.(git log - para ver los commits)
Cada commit tiene un identificador único (hash). 
git commit -m "mensaje"

________________
### Git push:
Este comando sirve para enviar tus cambios desde el servidor local al servidor remoto. De esta manera se comparten los cambios con los desarrolladores quienes podrán verlos y descargarlos en su repositorio local.
Ejemplo de comando: git push <nombre-remoto> <nombre-de-tu-rama>

De todas formas, si tu rama ha sido creada recientemente, puede que tengas que cargar y subir tu rama con el siguiente comando:
git push --set-upstream <nombre-remoto> <nombre-de-tu-rama>
El uso de --set-upstream (o su forma abreviada -u) también permite que Git realice un seguimiento automático de la relación entre la rama local y la rama remota.
git push -u origin <nombre-de-tu-rama>

Importante: Git push solamente carga los cambios que han sido confirmados.

________________
### Git pull:
Este comando se utiliza para descargar contenido desde un repositorio remoto y actualizar al instante el repositorio local para reflejar ese contenido.

Ejemplo de comando : git pull
Git revert : Te permite restablecer una rama a un commit anterior. Básicamente rebobina el estado de su rama, luego todos los commits que hagas en adelante se escriben sobre todo lo que vino después del punto de reinicio. 
Revert es el comando que usamos cuando queremos tomar un anterior commit y agregarlo como nuevo commit, manteniendo el log intacto.

Ejemplo de comando: git revert <commit>  

________________
### Git reset:
Reset es el comando que usamos cuando queremos mover el repositorio a uno anterior commit, descartando cualquier cambio realizado después de eso commit.
Ejemplo de comando: git reset <commit>  

________________
### Git merge:
El comando git merge se usa para fusionar las ramas. Para utilizar git merge primero tenemos que pararnos en la rama a la que queremos llevar los cambios, luego aplicamos el comando.

Ejemplo de comando: git merge rama-a-fusionar

Este comando nos va a traer todos los cambios que tenga en la rama “rama-a-fusionar” a la rama en la que estamos parados.



## Recursos de aprendizaje:

https://github.com/pcottle/learnGitBranching - flujo de ramas
https://learngitbranching.js.org/?locale=es_AR - Aprender git a través de un juego
https://ndpsoftware.com/git-cheatsheet.html#loc=remote_repo; - Definiciones de comandos de git en sus respectivos ambientes. 
https://gitexercises.fracz.com/ - Ejercicios de git 
https://marklodato.github.io/visual-git-guide/index-en.html#basic-usage - Explicación de git con imágenes



## Recomendaciones de uso:

1. Detallar el contenido y el objetivo del proyecto, utilizar organización de carpetas con nombres claros. 	
2. Commits pequenos: Generar commits pequeños y coherentes, cada uno con dicho propósito. Esto hace que sea más fácil el entendimiento de cada cambio y deshacerlos si es necesario. 
3. Ramas: Utilizar las ramas para trabajar en nuevas características o correcciones de errores. Esto hace que mantengamos el código principal estable mientras realizamos pruebas o solucionamos problemas. 
4. Pull requests: Al trabajar en equipo, debemos hacer uso de Pull Requests (PR) para incorporar cambios a la rama principal. Esto facilita la revisión del código y genera posibles cambios antes de la fusión. 
5. Descripciones de commits significativas: Debemos escribir mensajes de commit descriptivos y claros que cambios se realizaron y porque. Esto ayuda a entender los cambios realizados más adelante.
6. Etiquetas: También podemos hacer uso de las etiquetas para marcar versiones importantes de un proyecto. Con esto podremos visualizar las versiones estables por ejemplo.
7. Utilizar git en línea de comando: Aprender a utilizar git en una terminal brinda mayor control y compresión del funcionamiento.


## Demostraciones prácticas

Creación de un repositorio: 

git init

Clonación de un repositorio: 

git clone <.repositorio>

Ejemplo comando git checkout:  

git checkout <_rama>

Ejemplo comando git status:  

git status

Ejemplo comando git add:   

git add <_archivo>

Ejemplo comando git commit:   

git commit -m <_mensaje>

Ejemplo comando git push:  

git push <_repositorio-remoto>

Ejemplo comando git pull:

git pull 

Ejemplo comando git revert:  

git revert <_commit>

Ejemplo comando git reset:

git reset <_commit>

Ejemplo comando git merge:  

git merge <_rama-a-fusionar>

## Bibliografía:

FreeCodeCamp. 2021. 10 comandos de Git que todo desarrollador debería saber. 


https://www.freecodecamp.org/espanol/news/10-comandos-de-git-que-todo-desarrollador-deberia-saber/


https://www.hostinger.es/tutoriales/comandos-de-git


https://www.atlassian.com/es/git/glossary


https://www.w3schools.com/git/git_revert.asp?remote=github


ChatGPT - “cómo funciona el git init en git local”


https://www.atlassian.com/es/git/tutorials/using-branches/git-checkout#:~:text=El%20comando%20git%20checkout%20te,confirmaciones%20nuevas%20en%20dicha%20rama. 


https://aulab.es/articulos-guias-avanzadas/91/el-comando-git-push-en-git#:~:text=El%20comando%20git%20push%20en%20Git%20se%20utiliza%20para%20cargar,a%20sus%20respectivos%20repositorios%20locales.


https://impulsate.between.tech/consejos-perfil-github


ChatGPT - “Dame recomendaciones de uso para git”