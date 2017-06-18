/*aquí va tu código*/

//Llamar el navegador
window.addEventListener("load", begin, false);

function begin() {
    var button = document.getElementById("record");//Identificar el boton
    button.addEventListener("click", newItem, false);//crea un nuevo item con los valores del formulario
    hide(document.getElementById("comment-appear")); //le agrego la clase hide a la caja
}
function newItem() { //guardar nombre y comentario
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    sessionStorage.setItem(name, comment);//guardar informaciòn; busca los elementos; GUARDAME LA INFORMACION
    //Crea un nuevo item con la informaciòn que se ha guardado
    showInformation(name);
}
function showInformation(name) {//lee la informacion guardada, utilizando la api web storage
    var showData = document.getElementById("comment-appear");//donde quiero que aparezcan mis datos;
    var storage = sessionStorage.getItem(name); //rescatar info almacenada que se ha almacenado

    var text = " Nombre: " + name + '\n' + "Comentario:" + '\n' +storage;

    var create_div = document.createElement('DIV'); //creo el div que me va a contener la informacion
    var textnode = document.createTextNode(text); // creo el nodo del texto
    create_div.appendChild(textnode); //creo un hijo del div q sera textnote
    showData.appendChild(create_div); //creo un hijo de la caja principal que me va a contener el div
    show(showData);
}


function hide(element) { //Esconder elementos
    element.classList.add('hide');
}

function show(element) { //Mostrar elementos
    element.classList.remove('hide');
}


//Limpiar los comentarios
var cleanData = document.getElementById("clean-data");//Busco el elemento
cleanData.addEventListener("click", clean);// elemento sobre el cual quiero que actue


function clean(){//Esta funciòn busca el contenedor sobre el cual va a limpiar el elemnto, llamese PADRE 
	var container = document.getElementById("comment-appear");
	container.innerHTML = "";
}

// limpiar el almacenamiento generado por el localStorage
function cleanAll(){
	localStorage.clear();
	showInformation();//llamo a showinformation para que use esta funcion en el boton usado para borrar datos
}

//SET ITEM: Crear item
//SESSION STORAGE

//CREATED BY LAUREENPE


