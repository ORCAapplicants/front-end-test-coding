# Prueba Técnica - Programador (Front-end)
La siguiente es una prueba para evaluar a los postulantes a programador **Front-end AWTO**.

## INTRODUCCIÓN
Este repositorio contiene una serie de requerimientos de un Caso Práctico, que busca evaluar las capacidades técnicas del candidato con respecto a las principales funciones y responsabilidades que se requieren dentro del área de Desarrollo de Tecnología de Awto.

#### ¿Qué se busca evaluar?
Principalmente los siguientes aspectos:
  + Creatividad para resolver los requerimientos,
  + Calidad del código entregado (estructura y buenas prácticas),
  + Eficiencia de los algoritmos entregados,
  + Familiaridad con Frameworks y plataformas de desarrollo Web.

## IMPORTANTE
1. Asegúrate de tener `Node.js` y `npm` instalados.
2. Se solicita crear la aplicación utilizando la tecnología Web de su elección, se privilegiarán a los candidatos que utilicen **[VueJS](https://vuejs.org/)**
3. Recomendamos emplear un máximo de **3 (tres) horas** y enviar todo lo que puedas.
4. Se requiere de una **cuenta de GitHub** para realizar este ejercicio.
5. **Antes de comenzar a programar:**
    * Realizar un `Fork` de este repositorio (https://github.com/asystat/front-end-test-coding).
    * Clonar el fork a su máquina local
    * Crear un `branch` en su cuenta de GitHub utilizando su nombre completo.
6. **Al finalizar**, existen 2 (dos) opciones para entregar su proyecto:
    * 1) Realizar un `Commit` de su proyecto, **enviar un `Pull Request` al branch con su NOMBRE**, y notificar a la siguiente dirección de correo electrónico  [sbreit@awto.cl](mailto:sbreit@awto.cl).
    * 2) Crear un archivo comprimido (_.zip_ o _.rar_) de su proyecto y enviar a la siguiente dirección de correo electrónico  [developer@gcpglobal.com](mailto:developer@gcpglobal.com).

## EJERCICIO PRÁCTICO
**Objetivo:** Crear una aplicación que ayude a visualizar la informacion obtenida a partir de una dirección ip, explotando la API Rest pública http://ip-api.com/json/{ip}
*OJO* ya que esta api permite un numero limitado de requests desde la misma IP.

#### Requerimientos generales

1. La aplicación debe cumplir con los siguientes **requisitos funcionales:**

    - Crear una aplicación que incluya un campo de entrada texto y un botón, para que se pueda capturar la ip y recuperar la información utilizando la API anteriormente indicada. La llamada asíncrona a la API debe transmitirse de forma acorde en el front (loading, captura de respuesta exitosa, respuesta fallida)

    - Mostrar los datos obtenidos forma clara (se puede utilizar frameworks como bootstrap u otros), y visualizar los datos geográficos sobre un mapa (puede ser cualquier proveedor de mapas.. google, bing, here, openstreetmap, etc.)

    - Incluir un componente para mostrar mensajes de Error en toda la aplicación.

2. **CSS:** Utilizar algún framework (a elección) para escribir los archivos CSS, tomando en cuenta la compatibilidad con distintos navegadores.

3. **Iconos:** Utilizar una librería para el manejo de iconos donde lo considere necesario (_se recomienda el uso de [Font Awesome](http://fontawesome.io/) o [Glyphicons](http://glyphicons.com/)._)
