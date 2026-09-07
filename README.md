# Explorador de países
Este proyecto fue desarrollado como parte de la materia de Programación Web 1 con el objetivo de aplicar de forma práctica los fundamentos del desarrollo frontend.

El proyecto consiste en un explorador de países que permite visualizar información básica de distintos países mediante una interfaz responsive. A lo largo de su desarrollo se han trabajado conceptos de HTML semántico, diseño adaptable con CSS y manipulación del DOM con JavaScript.

Actualmente, la aplicación cuenta con funcionalidades como búsqueda por nombre, filtrado por región, validación de formulario y cambio entre modo claro y oscuro. Más adelante, el proyecto continuará evolucionando con la integración de una API para obtener información de países de forma dinámica.

## Imagen previa del sitio
<img width="1905" height="912" alt="image" src="https://github.com/user-attachments/assets/253535af-4c0b-420f-a7b6-710432c7e93f" />

## Tecnologías usadas
[![My Skills](https://skillicons.dev/icons?i=html,css,js)](https://skillicons.dev)

## Funcionalidades actuales
- HTML semántico ✅
- CSS responsive ✅
- Filtrado de países por región ✅
- Búsqueda por nombre ✅
- Validación de formulario ✅
- Modo oscuro/claro ✅

## Estado del proyecto

Proyecto universitario en desarrollo para la materia de Programación Web 1.

Actualmente se encuentra implementada la interfaz frontend con HTML, CSS y JavaScript, incluyendo diseño responsive, filtrado por región, búsqueda de países, validación de formulario y modo claro/oscuro.

En las siguientes etapas se continuará con la integración de datos mediante una API y el diseño del Backend que necesitaría el proyecto. Esto incluirá la definición del recurso principal, el diseño de endpoints CRUD, la estructura de las respuestas JSON y la elección de una tecnología de Backend.

Este diseño servirá como base para una futura implementación del Backend.

## Diseño de la API

### Recurso principal

El recurso principal de la aplicación será **Países**, ya que representa la entidad central sobre la que trabaja el proyecto.

Cada país contará inicialmente con los siguientes datos:

- `id`: identificador único del país.
- `nombre`: nombre del país.
- `capital`: capital del país.
- `region`: región o continente al que pertenece.
- `poblacion`: cantidad de habitantes.
- `bandera`: dirección de la imagen correspondiente a su bandera.

### Endpoints CRUD

La API utilizará rutas REST para permitir las operaciones principales sobre el recurso `paises`.

| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/api/paises` | Obtiene la lista de todos los países. |
| `GET` | `/api/paises/:id` | Obtiene un país mediante su identificador. |
| `POST` | `/api/paises` | Registra un nuevo país. |
| `PUT` | `/api/paises/:id` | Actualiza la información de un país existente. |
| `DELETE` | `/api/paises/:id` | Elimina un país mediante su identificador. |

### Ejemplo de respuesta JSON

Una respuesta para la consulta de un país podría tener la siguiente estructura:

```json
{
    "id": 1,
    "nombre": "Bolivia",
    "capital": "Sucre",
    "region": "América",
    "poblacion": 12000000,
    "bandera": "https://ejemplo.com/bolivia.webp"
}
```

Para una consulta a `GET /api/paises`, la API devolvería una colección de objetos:

```json
[
    {
        "id": 1,
        "nombre": "Bolivia",
        "capital": "Sucre",
        "region": "América",
        "poblacion": 12000000,
        "bandera": "https://ejemplo.com/bolivia.webp"
    },
    {
        "id": 2,
        "nombre": "Argentina",
        "capital": "Buenos Aires",
        "region": "América",
        "poblacion": 46000000,
        "bandera": "https://ejemplo.com/argentina.webp"
    }
]
```

### Tecnología propuesta para el Backend

Para una futura implementación del Backend se propone utilizar **JavaScript con Node.js**, acompañado de **Express** para la creación de la API REST.

La elección de JavaScript permite continuar utilizando el mismo lenguaje empleado actualmente en el Frontend del proyecto. Node.js permite ejecutar JavaScript en el servidor y Express facilita la creación y organización de rutas, endpoints y solicitudes HTTP.

Esta tecnología permitiría mantener una base de desarrollo coherente entre el Frontend y el Backend del proyecto.

## Enlaces

- GitHub Pages / repositorio: [Repositorio del proyecto](https://github.com/Dunston-Madariaga/Explorador-de-paises)
- Sitio publicado en Tecnoweb: [Ver sitio](https://www.tecnoweb.org.bo/inf240/grupo03sx/Explorador%20de%20paises%20-%20dmadariaga/index.html)
