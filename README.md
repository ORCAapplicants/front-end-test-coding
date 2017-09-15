# Prueba Técnica - Programador (Front-end)
La siguiente es una prueba para evaluar a los postulantes a programador **Front-end ORCA**.

## INTRODUCCIÓN
Este repositorio contiene una serie de requerimientos de un Caso Práctico, que busca evaluar las capacidades técnicas del candidato con respecto a las principales funciones y responsabilidades que se requieren dentro del área de Desarrollo de Tecnología de _GCP Global_.

#### ¿Qué se busca evaluar?
Principalmente los siguientes aspectos:
  + Creatividad para resolver los requerimientos,
  + Calidad del código entregado (estructura y buenas prácticas),
  + Eficiencia de los algoritmos entregados,
  + Familiaridad con Frameworks y plataformas de desarrollo Web.

## IMPORTANTE
1. Asegúrate de tener `Node.js` y `npm` instalados.
2. Se solicita crear la aplicación utilizando la tecnología Web de su elección, se privilegiarán a los candidatos que utilicen **[Angular](https://angular.io/)**(2 o superior) + **Bootstrap**.
3. Recomendamos emplear un máximo de **3 (tres) horas** y enviar todo lo que puedas.
4. Se requiere de una **cuenta de GitHub** para realizar este ejercicio.
5. **Antes de comenzar a programar:**
    * Realizar un `Fork` de este repositorio (https://github.com/ORCAapplicants/front-end-test-coding).
    * Clonar el fork a su máquina local  `git clone git@github.com:USERNAME/FORKED-PROJECT.git`
    * Crear un `branch` en su cuenta de GitHub utilizando su nombre completo.
6. **Al finalizar**, existen 2 (dos) opciones para entregar su proyecto:
    * 1) Realizar un `Commit` de su proyecto, **enviar un `Pull Request` al branch con su NOMBRE**, y notificar a la siguiente dirección de correo electrónico  [developer@gcpglobal.com](mailto:developer@gcpglobal.com).
    * 2) Crear un archivo comprimido (_.zip_ o _.rar_) de su proyecto y enviar a la siguiente dirección de correo electrónico  [developer@gcpglobal.com](mailto:developer@gcpglobal.com).

## EJERCICIO PRÁCTICO
**Objetivo:** Crear una aplicación que ayude a obtener una lista de usuarios y muestre la información de sus perfiles, explotando el API Rest pública de GitHub https://api.github.com/search/users?q=YOUR_NAME.

#### Requerimientos generales

1. La aplicación debe cumplir con los siguientes **requisitos funcionales:**

    - Crear una aplicación que incluya un campo de entrada texto y un botón, para que se pueda capturar el usuario y recuperar la información utilizando el API anteriormente indicada.

    - Mostrar los primeros 10 usuarios del resultado de la búsqueda, incluyendo su nombre de usuario (`'user.login'`) y el id (`'user.id'`) de cada registro.

    - Convertir cada Perfil de usuario en un enlace, para que al hacer clic en cada registro, navegue a una ruta que incluya la propiedad `'user.login'` como parámetro.

    - Crear un componente independiente en el que se lea el parámetro de la URL, y a continuación, obtenga los datos de dicho usuario mediante la siguiente API: https://api.github.com/users/YOUR_NAME

    - Incluir la imagen del usuario (`'avatar_url'`) y alguna otra información (de su elección) en el componente.

    - Incluir un validador que verifique que el texto de búsqueda de usuarios sea de un mínimo de 4 caracteres, y otro que NO permita realizar la búsqueda de la palabra **“gcpglobal”**.

    - Integrar cualquier librería de gráficos que pueda encontrar y crear un gráfico de barras simple para mostrar el número de seguidores de los 10 primeros usuarios.

    - Incluir un componente para mostrar mensajes de Error en toda la aplicación.

    - _Si estas utilizando Angular,_ agregar a la declaración del servicio que obtiene los datos un método que utilice `Observables` y otro `Promises`.

    - _Si estas utilizando Angular,_ agregar un `Guard` que no permita consultar el perfil de usuarios con un `'score'` menor a **30.0**.

2. **CSS:** Utilizar algún framework (a elección) para escribir los archivos CSS, tomando en cuenta la compatibilidad con distintos navegadores.

3. **Iconos:** Utilizar una librería para el manejo de iconos donde lo considere necesario (_se recomienda el uso de [Font Awesome](http://fontawesome.io/) o [Glyphicons](http://glyphicons.com/)._)









************************
Para hacerlo funcionar primero debes usar:
```
  npm install //instala todas las dependencias
  gulp dev  //compila todo el codigo .js y .scss
  npm start //inicia el servidor
```
