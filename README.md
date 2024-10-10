# TensorPlayground en català

El Tensorflow Playground és una visualització interactiva de xarxes neuronals, escrita en
TypeScript utilitzant d3.js.

L'he traduït a català i en aquest repositori el mantinc.

El repositori original es troba a [tensorflow/playground](https://github.com/tensorflow/playground).

## Desenvolupament

Per executar la visualització localment, executeu:
- `npm i` per instal·lar les dependències
- `npm run build` per compilar l'aplicació i col·locar-la al directori `dist/`
- `npm run serve` per servir des del directori `dist/` i obrir una pàgina al vostre navegador.

Per a un cicle ràpid d'edició-actualització durant el desenvolupament, executeu `npm run serve-watch`.
Això iniciarà un servidor http i recompilarà automàticament els fitxers TypeScript,
HTML i CSS cada vegada que canviïn.

## Per als propietaris
Per pujar a producció: 
```
rm .gitignore
echo "nn.yoel.cat" >> dist/CNAME
git push origin `git subtree split --prefix dist master`:gh-pages --force
git checkout .gitignore
```
