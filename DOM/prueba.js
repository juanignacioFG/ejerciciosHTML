
//get element by...: (id,class,tag(etiqueta))

//usamos metodo por id para seleccionar un nodo


//let nodob=document.getElementById("parrafo1");



//cambiarle el contenido


//nodob.innerHTML="hola que quiere"


//usamos metofo byclass

//let nodoa=document.getElementsByClassName("parrafo");

//nodoa[1].innerHTML="cambiando el parrafo 2";

//usamos metodo by tag

//let nodoc=document.getElementsByTagName("p");

//nodoc[2].innerHTML="esto viene en el parrafo 3";


//usamos querryselector ...(id,class,..)


//let nodo1=document.querySelector("#parrafo1");    //para seleccionar con el metodo queryselector por  id se pone # delante del id que se quiera seleccionar

//nodo1.innerHTML=" cambiamos parrafo 1";

// ahora queryselector por clase

//let nodo2=document.querySelectorAll(".parrafo") ;   //para seleccionar por clase, ponemos . delante y el nombre de la clase que se quiere modificar

//nodo2[1].innerHTML="cambiamos parrafo 2 usando querryselectorall";


//ahora queryselector por etiqueta

//let nodo3=document.querySelectorAll("p");

//nodo3[2].innerHTML="cambiamos con queryselectorall el parrafo 3";


//CEAR NODOS QUE SIRVEN PARA CREAR ETIQUETAS y añadirlas a un index

//let nodo1= document.createElement("p");   //creamos nodo o etiqueta

//let nodo1text=document.createTextNode("vamos a crear este parrafo nuevo con este texto");    //creamos texto del nodo o etiqueta

let nododivpadre= document.querySelector(".padre");  //seleccionamos el div padre del documento index dom.html

//nododivpadre.appendChild(nodo1);     //agregamos al div padre el nodo1 que es un parrafo nuevo dentro del div padre

//nodo1.appendChild(nodo1text);     //agregamos el contenido nodo1text a nodo1




// añadir nodos con metodo append    (se pueden poner varios )


let nodomadreh1=document.querySelector(".madre");

let nodo4= document.createElement("p");
let nodo5=document.createElement("p");
let nodo6=document.createElement("p");

let nodo7=document.createElement("h1");

nodo4.innerHTML="esto es un nodo 4";
nodo5.innerHTML="esto es un nodo 5";
nodo6.innerHTML="esto es un nodo 6";

nodo7.innerHTML="esto es un nodo h1";

nododivpadre.append(nodo4,nodo5,nodo6);





//**INSERT BEFORE */

let nodo8=document.createElement("p");

nodo8.innerHTML="esto es un nodo 8";

nododivpadre.insertBefore(nodo8,nodo4);
















