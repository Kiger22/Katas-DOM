/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con 
la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con 
el atributo data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */

// 1.1
const botom = document.querySelector(".showme");
console.log(botom);

//1.2
const h1 = document.querySelector("#pillado");
console.log(h1);

//1.3
const p = document.querySelectorAll("p");
console.log(p);

//1.4
const pokemon = document.querySelectorAll(".pokemon");
console.log(pokemon);

//1.5
const datFun = document.querySelectorAll("[data-function='testMe']");
console.log(datFun);

//1.6
console.log(document.querySelectorAll("[data-function='testMe']",)[2]);



