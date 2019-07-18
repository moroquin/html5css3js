
console.log("hola");

const nombre = document.getElementById("nombre");
const listado = document.getElementById("listado");

function saludar(){
	
	listado.innerHTML = listado.innerHTML + "<li class=\"list-group-item\">"+nombre.value+"</li>";
	console.log(listado);
	alert("hola "+nombre.value);
} 