## Mini guía de estilo

**Análisis de la interfaz actual:** La interfaz presenta una jerarquía clara mediante un header oscuro, controles agrupados y tarjetas diferenciadas del fondo. La paleta mantiene coherencia visual y la tipografía Nunito Sans favorece la legibilidad. Como mejora de UX se prioriza mantener visibles la búsqueda y el filtro, conservar áreas táctiles adecuadas en móvil y evitar utilizar el celeste de acento para textos pequeños sobre fondos claros.

### Identidad visual

El Explorador de países utiliza una interfaz limpia y moderna basada en tonos azules, fondos claros y un color celeste de acento. El objetivo es facilitar la lectura de la información y mantener una jerarquía visual clara tanto en escritorio como en dispositivos móviles.

### Paleta de colores

| Color | Código | Uso |
|---|---|---|
| Azul oscuro | #0A122A | Header, footer, texto principal y modo oscuro |
| Azul medio | #1B2A4A | Superficies secundarias en modo oscuro |
| Azul claro | #2E4A78 | Hover y elementos secundarios |
| Celeste acento | #4F8EDC | Iconos, bordes, indicadores y elementos destacados |
| Blanco | #FBFAF8 | Tarjetas y superficies principales |
| Blanco suave | #F1F2F4 | Fondo general |
| Gris | #797B84 | Texto secundario y placeholders |
| Gris claro | #D9DCE3 | Bordes y separadores |
| Rojo error | #B42318 | Mensajes de validación |

### Contraste

Los colores principales ofrecen un contraste adecuado:

- Azul oscuro sobre blanco: alto contraste.
- Blanco sobre azul oscuro: alto contraste.
- Blanco sobre azul medio y azul claro: contraste adecuado.
- El celeste `#4F8EDC` se utiliza principalmente como acento, icono o borde y no como texto pequeño sobre fondo blanco.
- Para textos normales sobre fondo claro se prioriza el azul oscuro.

### Tipografía

Familia principal: **Nunito Sans**

| Estilo | Tamaño | Peso |
|---|---:|---:|
| H1 | 28 px | 800 |
| H2 | 26 px | 800 |
| H3 | 18 px | 700 |
| Cuerpo | 14 px | 400 |
| Labels | 14 px | 700 |
| Texto pequeño | 12 px | 400 |

La tipografía mantiene una apariencia amigable, moderna y legible.

### Jerarquía visual

En la vista principal, el orden de atención esperado es:

1. Título e identidad del sitio.
2. Buscador y filtro por región.
3. Título de la sección "Países".
4. Tarjetas de países.
5. Información secundaria y footer.

Las tarjetas destacan primero la bandera y el nombre del país, seguidos por población, región y capital.

### Componentes principales

- Header y navegación.
- Botón de modo claro/oscuro.
- Campo de búsqueda.
- Selector de región.
- Botón Buscar.
- Tarjeta de país.
- Mensaje de validación.
- Footer.

### Principios de UX

- Diseño responsive para escritorio y móvil.
- Navegación sencilla y predecible.
- Controles claramente identificados.
- Retroalimentación mediante mensajes de error.
- Uso consistente de colores, tipografía y espaciados.
- Área táctil suficiente para controles en dispositivos móviles.
- Filtros y búsqueda visibles desde la pantalla principal.