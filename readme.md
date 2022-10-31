# :zap: Challenge Week 4

<img align="right" width="249" height="123" alt="ISDI CODER LOGO" src="/assets/isdi_logo.jpg">

Escribe en un módulo propio, una función llamada **_strictEquals(a, b)_** que devuelva el mismo valor que `a === b`. Tu implementación no puede usar los operadores `===` ni `!==`.

Testea la función desde otro fichero con este set de pruebas:

Dada la función **_strictEquals_**, cuando se comparan **A** y **B**, el resultado será **RESULT**

|     A     |    B    | RESULT  |                     |
| :-------: | :-----: | :-----: | :------------------ |
|    `1`    |   `1`   | `true`  |                     |
|   `NaN`   |  `NaN`  | `false` | // _Rule Exception_ |
|    `0`    |  `-0`   | `true`  | // _Rule Exception_ |
|   `-0`    |   `0`   | `true`  | // _Rule Exception_ |
|    `1`    |  `"1"`  | `false` |                     |
|  `true`   | `false` | `false` |                     |
|  `false`  | `false` | `true`  |                     |
| `"Water"` | `"oil"` | `false` |                     |

## Requisitos

-   [x] Crea un repositorio en GitHub con la rama main protegida.

-   [x] Crea un proyecto que incluya EsLint (Airbnb) y Prettier.

-   [x] Añade Husky y los hooks "commit-msg" y "pre-push".

-   [x] Crea rama de trabajo.

-   [x] Mergea con PR.

## Tecnologías usadas

![Logos of used technologies](/assets/tech_logos.jpg)
