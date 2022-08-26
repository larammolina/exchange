# exchange
calculadora de monedas

Descripcion

Se requiere realizar una calculadora entre monedas.

La api a utilizar es https://www.vatcomply.com/documentation

Diseño: https://www.figma.com/file/Aj8KW3UGBC461ropq3nlRr/Test-exchange?node-id=0%3A1

Requerimiento 🔧

    NodeJS 
    Axios

Instalación 🔧

1- Para ello debes clonar el repositorio, ingresando a una terminal y ejecutando:

    git clone `https://github.com/larammolina/exchange.git`

2 - En la carpeta donde se encuentra "package.json" ejecutar en la terminal:

    npm install


4 - (instalar axios)En la carpeta donde se encuentra "package.json" ejecutar en la terminal:

    npm install axios

5- Una vez finalizado, para abrir el proyecto ejecutar:

    npm start

Dependencias utilizadas

    NPM
    AXIOS

Media Queries/Responsive:

    Iphone 13/Iphone 13 Pro: 390x844 px
    Desktop: 1440x1024 px



In the project directory, you can run:
npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

Bugs de la Version.

  * El default del select "From" no esta en Dollar.
  * El resultado de la conversion se carga lentamente.
  * El input permite ingresar '-0' pero la conversion no se realiza con dicho valor.
  * No se actualiza el nombre de la moneda en los titulos y resultado, solo se informa el symbol.
  * El diseño del campo imput desborda de los bordes de la card en mobile.

