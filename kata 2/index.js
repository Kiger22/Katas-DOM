// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const divVacio = document.createElement("div");
document.body.append(divVacio);

//1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divP = document.createElement("div");
const p = document.createElement("p");
document.body.append(divP);
divP.append(p);

//1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divPs = document.createElement("div");
document.body.append(divPs);

for (let i = 0; i < 6; i++) {
  const p = document.createElement("p");
  divPs.append(p);
}

//1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const p2 = document.createElement("p");

document.body.append(p2);

p2.textContent = "Soy dinamico";

//1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

//1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");

for (const app of apps) {
  const li = document.createElement("li");
  ul.append(li);
  li.textContent = app;
}

document.body.append(ul);

//1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
removables = document.querySelectorAll(".fn-remove-me");

for (const removable of removables) {
  removable.remove();
}

//1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
divs = document.querySelectorAll("div");
const pMedio = document.createElement("p");
pMedio.textContent = "Voy en medio";
document.body.insertBefore(pMedio, divs[1]);

//1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
divIns = document.querySelectorAll("div.fn-insert-here");

for (const divIn of divIns) {
  const pDentro = document.createElement("p");
  pDentro.textContent = "Voy dentro";
  divIn.append(pDentro);
}

