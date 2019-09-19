var jsonorigen = "js/cartas.json";
const peticion = new XMLHttpRequest();
var destinocontenido = document.querySelector("#Columnas");
var datos;
inicio();





function inicio() {
  cargar();
}

function cargar() {
  peticion.open('GET', jsonorigen);
  peticion.send();
  peticion.onreadystatechange = function(){

		if(this.readyState == 4 ) {

  let datos1 = JSON.parse(this.responseText);
console.log(datos1);
  localStorage.setItem("cartas", JSON.stringify(datos));
  peticion.onload = function() {
    datos = JSON.parse(this.responseText);

    llenadoContenido(datos);

  }
}}}

function sumar(numero) {
console.log(numero);
}

function llenadoContenido(objetoJson) {

  for (i = 0; i < datos.length; i++) {
    var tr = document.createElement("tr");
    var id = document.createElement("td");
    id.textContent = datos[i].numero;
    tr.appendChild(id);
    var carta = document.createElement("td");
    carta.textContent = datos[i].carta;
    tr.appendChild(carta);
    var cantidad = document.createElement("td");
    cantidad.textContent = datos[i].cantidad;
    tr.appendChild(cantidad);
    destinocontenido.appendChild(tr);

  }
}
