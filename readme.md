# :zap: Challenge Week 4

Escribe en un módulo propio, una función llamada **_strictEquals(a, b)_** que devuelva el mismo valor que a === b. Tu implementación no puede usar los operadores === ni !==.

Testea la función desde otro fichero con este set de pruebas:

Dada la función **_strictEquals_**, cuando se comparan **A** y **B**, el resultado será **RESULT**

|    A    |   B   | RESULT |                     |
| :-----: | :---: | :----: | :------------------ |
|    1    |   1   |  true  |                     |
|   NaN   |  NaN  | false  | // _Rule Exception_ |
|    0    |  -0   |  true  | // _Rule Exception_ |
|   -0    |   0   |  true  | // _Rule Exception_ |
|    1    |  "1"  | false  |                     |
|  true   | false | false  |                     |
|  false  | false |  true  |                     |
| "Water" | "oil" | false  |                     |

-   Crea un repositorio en GitHub con la rama main protegida.
-   Crea un proyecto que incluya EsLint (Airbnb) y Prettier.
-   Añade Husky y los hooks "commit-msg" y "pre-push".
-   Crea rama de trabajo.
-   Mergea con PR.
