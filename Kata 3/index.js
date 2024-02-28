/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul");
document.body.append(ul);

for (const country of countries) {
  const li = document.createElement("li");
  li.textContent = (country);
  ul.append(li);

}

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */
const removable = document.querySelector(".fn-remove-me");
removable.remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const ulCar = document.createElement("ul");
const divCar = document.querySelector('[data-function="printHere"]');

for (const car of cars) {
  const li = document.createElement("li");
  li.textContent = car;
  ulCar.append(li);

}

divCar.append(ulCar);

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */
const Countries = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

for (const countrie of Countries) {
  const divs = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = countrie.title;
  divs.append(h4);

  const img = document.createElement("img");
  img.src = countrie.imgUrl;
  divs.append(img);

  document.body.append(divs);

}

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs. */
const botonEliminar = document.createElement("button");
botonEliminar.textContent = "Elimine el Ultimo";

function eliminarUltimo() {
  const divsToRemove = document.querySelectorAll("div");
  divsToRemove[divsToRemove.length - 1].remove();
}

botonEliminar.addEventListener("click", eliminarUltimo);
document.body.append(botonEliminar);

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.
 */
const botEliminame = document.createElement("button");
botEliminame.textContent = "Eliminame";

const divsToRemoves = document.querySelectorAll("div");

for (const divToRemoves of divsToRemoves) {
  const botEliminame = document.createElement("button");
  botEliminame.textContent = "Eliminame";

  divsToRemoves.append(botEliminame);
  botEliminame.onclick = () => divToRemoves.remove();

}

