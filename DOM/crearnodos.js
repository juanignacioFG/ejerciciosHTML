//creamos nodo
const parrafo4= document.createElement("p");

//añadimos el nodo

const textparrafo4= document.createTextNode("párrafocuatro4")

//añadimos el nodo
//para ello debemos selecionar el nodo padre

const elementoPadre= document.querySelector(".padre");

//añadimos el nodo

elementoPadre.appendChild(parrafo4);

//añadimos el texto en su nodo padre (el parrafo4), tenemos dos formas:

parrafo4.appendChild(textparrafo4);

//parrafo4.innerHTML= "<h1>parrafo 4</h1>";

//añadir elementos con append, puedo añadir varios nodos a la vez

const parrafo5 = document.createElement("p");
const parrafo6= document.createElement("p");

elementoPadre.append(parrafo5,parrafo6);
parrafo5.innerHTML="párrafo 5";
parrafo6.innerHTML="párrafo6";


