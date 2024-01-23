//POR ID

/*   let elementoPorId= document.getElementById ("parrafo1");

elementoPorId.innerHTML="buenos dias!";


//por clasee (class)

let elementoPorClase= document.getElementsByClassName("parrafo")

console.log(elementoPorClase.length);
elementoPorClase[1].innerHTML="hola";

//por su etiqueta (tag)

let elementoPorTag =document.getElementsByTagName("p");

elementoPorTag[2].innerHTML="adios";                            

//modificacion de estilos del contenido de las etiquetas <p>(parrafo1)
//cambiaremos su background:

elementoPorId.style.background="Gray";

//color de letra:
elementoPorId.style.color="white";


//redondeamos sus bordes:

elementoPorId.style.borderRadius="8px";

//su longitud(ancho):

elementoPorId.style.width="100px";

// y centramos el texto:

elementoPorId.style.textAlign="center";         */

//querySelector y querySelectorall: seleccion de elementos
//para seleccionar los elementos por su clase (usaremos.) o
//por ID

let elementoPorId=document.querySelector("#parrafo1");

elementoPorId.innerHTML="hola mundo";

let elementoPorClase= document.querySelectorAll(".parrafo");

console.log(elementoPorClase);

const arrayClase= [...elementoPorClase];

console.log(arrayClase);

arrayClase[1].innerHTML="OLAQUEHASE";


let elementoPorTag= document.querySelectorAll("p");


elementoPorTag[2].innerHTML="HASTAMAÑANA";

