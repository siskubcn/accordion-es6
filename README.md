# Accordion ES6

Módulo Accordion realizado en es6 para la prueba técnica de frontend.
##### Herramientas utilizadas
  - Yarn para el manejo de dependencias
  - Gulp para automatizar tareas (postcss, sass, sourcemaps, browser-sync...)
  - Webpack para generar el bundle y cargar de loaders

##### Cargar el entorno
Ejecutar desde el directorio raiz del proyecto:
```sh
$ yarn install
$  gulp build o gulp watch (lanzará el browser con BrowserSync)
```  

##### Estructura
- build (js/css)
- src (js/scss)
- index.html

##### Ficheros del test
- Javascript
    - main.js ---------> importa el módulo del accordion y lo instancia
    - accordion.js ----> módulo del accordion (es6 y clases)
    - utilities.js ----> funciones que utiliza el módulo del accordion
- Styles
    - accordion.scss ---------> fichero sass aplicando SUIT CSS Naming Convention

--------------------------------------------------------------------------------------

Autor: Siscu | siscuca@gmail.com