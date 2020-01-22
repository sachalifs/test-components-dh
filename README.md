# Consignas

Storybook es un entorno para construir componentes con React.

Este proyecto además fue configurado para que puedas crear componentes y testearlos visualmente.

## Instalación
```
git clone git@github.com:sachalifs/test-components-dh.git
npm install
npm run storybook
```

## ¿Cómo funciona?

Te vamos a decir cómo se tiene que ver cada componente en cada consigna.
Creá cada componente dentro de `src/components` con el nombre y estilos que te indicamos.

## Correr los tests
Para correr los tests tenés que tener el proyecto corriendo con `npm run storybook` y en otra terminal correr el comando `npm test`.

Si todo salió bien, vas a ver los tests en verde:

![Green test](https://cldup.com/qaUeWuRc4m.png "Green test")

Si tu componente tiene algún error visual, vas a ver las diferencias dentro de la carpeta `src/tests/__image_snapshots__/__diff_output__` de esta manera:

![Story Diff](https://cldup.com/Y8v3R1_YwA.png "Story Diff")



