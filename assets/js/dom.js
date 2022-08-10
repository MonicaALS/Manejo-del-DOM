/* 

Cuando hablamos del dom estamos hablando de dos representaciones de nuestra pagina 
una de ells es la representacion del codigo fueente (La estructura de HTML)
y la otra es la representacion visual(La estructura del dom)


Nodos: La unidad mas basica que puede ser una etiqueta o element o un nodo de texto. 

<h1>   //papá
     Hola generation //Hijito o nodo de texto
</h1>

Document: El nodo raiz a partir del cual se deriban los demas nodos. 
Este objeto es el que nos permite acceder a todos los elementos del dom. 
Todos los nodos derivan del document. 

Element: Son los nodos definidos por la etiqueta HTML, por ejemplo una etiqueta <div></div>
<h1></h1>, etc. 


<h1> //nodo elemento(padre)
HOLA GENERATION //nodo texto (hijo)
</h1>


Text: El texto que esta dentro de un element o etiqueta. 

Atributos: Los atributos de las etiquetas definen nodos. (en JS no los vemos tal cual 
    como nodos, si no como informacion asociada al nodo del tipo element. )

Comentarios y otros: Los comentarios y otros elementos como las declaraciones doctype 
en la cabecera de los documentos HTML tambien generan nodos. 


Con JavaScript y el dom podemos cambiar: 

-Todos los elementos HTML de una pagina 
-Todos los atributos de la pagina web 
-Todos los estilos CSS de la pagina web 
-Eliminar elementos y atributos ya existentes 
-Agregar nuevos elementos y atributos 
-Reaccionar a todos los eventos HTML que existan en la pagina
-Crear nuevos elementos HTML en la pagina. 

Metodos de seleccion de elementos

Son elementos que nos van a permitir seleccionar uno o varios elementos o grupos 
de elememtos del dom. Estos metodos se utulizan en el document, por eso se agregan antes del get. 

SELECCIONAR ELEMENTOS 

Sirven para realizar busquedas de elementos dentro del documento 

-getElementbyId("IDElemento"): Buscar elementos por el ID 
-getElementsByClassName("nombreClase"): Busca elementos por nombre de la clase. 
-getElementsByTagName(): Busca un elemento por su etiqueta. 
-getElementsByName(): Busca un elemento por su nombre


Metodos modernos 

-querySelector(): Buscar el primer elemento que coincida con el selector 
-querySelectorALL(): Busca TODOS los elementos que coincidan con el selector 
*/

//getElementByID()

const elementID = document.getElementById("parrafo4");

//getElementsByClassName()

const elementClass = document.getElementsByClassName("parrafitos");

//getElementsByTagName y ByName

const elementTag = document.getElementsByTagName("h1");
const elementName = document.getElementsByName("primerparrafo");

//querySelector()
const querySelector = document.querySelector("#parrafo3"); //Se puede seleccionar parrafo o clase id=# clase=.
const querySelector2 = document.querySelector(".parrafitos");

//querySelectorAll()
const querySelectorAll = document.querySelectorAll(".parrafitos"); //

/* 

CREAR ELEMENTOS 

-createElement(): Crea un elemento EN MEMORIA del tipo element (<div></div>)
-createComment(): Crea un comentario 
-createTextNode(): Crea un nodo del tipo texto
-cloneNode(): Clonar un elemento 

Investigar los metodos para añadir, modificar y eliminar atributos. 

*/

//createElemet()
const creardiv = document.createElement("div");
const crearImagen = document.createElement("img");

//createTextNode()
const textNode = document.createTextNode(
    "Hola a todos, me gustan los chilaquiles verdes"
);


//cloneNode()
const parrafoAClonar = document.createElement("p");
parrafoAClonar.textContent = "Soy un parrafo, cloname";

const parrafoClon = parrafoAClonar.cloneNode(true);

const encabezadoOriginal = document.getElementById("encabezado");

const encabezadoClon1 = encabezadoOriginal.cloneNode();
const encabezadoClon2 = encabezado.cloneNode(true);

//Metodos para añadir, modificar y eliminar atributos
/*

Modificar elementos 

Son metodos que nos van a permitir hacer modificaciones a nuestros elementos dentro del 
documento HTML 
- textontent: nos permite mostrar el contenido en texto de un elemento 
-innerHTML: Modificar el contenido de un element 
-OuterHTML: Mostrar el contenido con todo y etiquetas 
*/

//textContent
encabezado.textContent;
parrafo.textContent;
parrafo2.textContent;

//innerHTML

parrafo.innerHTML = ("Lo siento, ahora yo soy el texto del parrafo 1");


//Ejemplo del PlayStation 

//nombreProducto.innerHTML = ("PlayStation 5");
//precioProducto.innerHTML =("15000");
//imagenProducto.innerHTML =("imagen.jpg");

//outerHTML
encabezado.outerHTML;
parrafo.outerHTML;

/*
INSERTAR ELEMENTOS 
Son metodos que nos permiten poner la informacion que estaba en una memoria virtual 
de forma visual en nuestro documento 

-.appendChild()
-.remove
-.removeChild (investigar)
-.replaceChild(investigar)

*/
//appendChild()
const appendImg = document.createElement("img");
appendImg.src = "https://cdns-images.dzcdn.net/images/artist/098ea0886f463cf48b75d2af855ad3b9/500x500.jpg";
appendImg.alt="Imagen Sorpresa";
document.body.appendChild(appendImg);

const appendParrafo = document.createElement("P");
appendParrafo.innerHTML = ("Hola, soy un parrafo hijo");

document.body.appendChild(appendParrafo); 

/*
Explicacion: Primero creamos un elemento (etiqueta) llamada img (existe de forma virtual), 
le agregamos atributos como src y alt, y por ultimo conectamos al DOM usando el appendChild
sobre nuestro document.body

*/
//Investigar remover child, replacer child y otras formas de agregarlos (antes, adyacente, a un lado, etc)

//.remove
const borrar = document.querySelector("#parrafo4"); 
borrar.remove();

const borrarRefactorizado = document.querySelector 
("#parrafo2").remove();

 
//MODIFICACION DE ESTILOS (EN LINEA) 

document.getElementById("temerarios").style.color = "green";
document.getElementById("temerarios").style.fontSize ="50px"
document.getElementById("temerarios").style.fontFamily =  "Arial"
document.getElementById("temerarios").style.fontWeight =  "bold"
document.getElementById("temerarios").style.fontStyle =  "italic"
document.getElementById("temerarios").style.textDecoration =  "underline"
document.getElementById("temerarios").style.letterSpacing = "2px";
document.getElementById("temerarios").style.wordSpacing = "2px";

/*
EVENTOS 

Una forma mucho mas facil de modificar el contenido de un elementro es usando eventos 
Los eventos son acciones que se pueden realizar en un elemento, para modificar los 
valores de los atributos, estilos, etc. 

Algunos de los eventos mas comunes son:

- Cuando un usuario hace clic con el raton
- Cuando se ha cargado una pagina web
- Cuando se ha cargado una imagen
- Cuando el raton se mueve sobre un elemento
- Cuando se cambia un campo de entrada
- Cuando se envia un formualrio HTML
- Cuando un usuario pulsa una tecla


-Evento mediante HTML (mala practica)
-Evento mediante el DOM (HTML + JS)(mas o menos una mala practica)
-EventListener (buena practica)

Es una forma alternativa de gestionar eventos, creando HTML desde la API DOM 
(Pero es una trampa porque seguuimos usando HTML para el uso del boton)

En lugar de agregar el atributo onclick al boton, lo localizamos mediante un querySelector. 
Luego le asignamos una funcion con el codigo deseado, en este caso, una alerta.


Eventos desde el JS (trampa)
const button = document.querySelector(".botonSaludo"); 
button.onclick = 

function(){
    alert ("Hola desde JS")
}

*/


/* EventListener (buena practica) 

Permite agregar una escucha del evento indicado (primer parametro), y en elcaso de que ocurra, se ejecuta la funcion asociada indicada (segundo parametro)

*/

const button = document.querySelector(".botonSaludo"); 
button.addEventListener("click", function(){
    alert("Hola, saludos con un Event Listener");
});