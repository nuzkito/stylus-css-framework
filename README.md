# Stylus CSS Framework
Un framework de CSS construido con Stylus. Puedes tomarlo como base para crear nuevos proyectos.
Si has creado algún mixin o quieres proponer mejoras, envía un pull request ;)

## Instalación

tylus requiere instalar [Nodejs](http://nodejs.org/).

Se incluye un archivo de Gulp para ejecutar Stylus. Para instalarlo ejecuta:

    npm install -g gulp
    npm install

Y para ejecutarlo tan solo haz:

    gulp


## Organización

Todos los archivos de Stylus están en la carpeta Stylus, organizados de la siguiente forma:

```
index.styl

base/
        base.styl
        fonts.styl
        animations.styl
        utility.styl
        mixins.styl
        variables.styl
        mixins/
                grid.styl
                triangles.styl
                otros mixins...

components/
        buttons.styl
        grid.styl
        icons.styl
        otros componentes...

lib/
        normalize.styl
        otros archivos externos...
```

En la carpeta assets se guardarán todos los assets necesarios (imágenes, fuentes, etc.). El CSS resultante también se almacena en ese directorio.

### index.styl
En este archivo tan solo se hacen `@import` a los archivos necesarios. Se trata de hacerlo lo más modular y reusable posible por lo que cada cosa estará en un archivo. Si en un futuro proyecto no necesitas algunos de los componentes, tan solo comenta o elimina los `@import` para que no se incluyan en el CSS final.

### base/variables.styl
Lo ideal es que todo se pueda configurar desde aquí. Tipografías, colores principales, tamaños, medidas de las mediaqueries, etc.

Cuando hagas un módulo crea variables de configuración iniciales, pero con el operador de asignación condicional:

    $iconFontFamily ?= 'icomoon'

Así podrá ser sobreescrito desde el archivo de variables.
