//creamos nodos
const parrafo4= document.createElement("p");
const parrafo5= document.createElement("p");
const parrafo0= document.createElement("p");

parrafo0.innerHTML = "parrafo 0";
parrafo4.innerHTML = "parrafo 4";
parrafo5.innerHTML ="parrafo5";

//seccionamos elemento padre:

const elementoPadre = document.querySelector(".padre");

//añadimos los nodos usando como referencia el nodo padre:
//podemos usar appenChild o append para añadirlo al final:
elementoPadre.append(parrafo4,parrafo5);

//para usar insertBefore necesitamos seleccionar un nodo de referencia
//seleccionamos hijo de referencia:

const parrafo1=document.querySelector("p");
//añadimos el nodo parrafo 0 usando como referencia el parrafo 1
elementoPadre.insertBefore(parrafo0,parrafo1);

//creamos un nodo extra
const parrafoextra = document.createElement("p");
parrafoextra.innerHTML= "un parrafo extra";


// elementoPadre.insertAdjacentElement("beforebegin",parrafoextra);
//elementoPadre.insertAdjacentElement("afterbegin",parrafoextra);
//elementoPadre.insertAdjacentElement("beforeend",parrafoextra);
//elementoPadre.insertAdjacentElement("afterend",parrafoextra);
parrafoextra.setAttribute("class","parrafo");