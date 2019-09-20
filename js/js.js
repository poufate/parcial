var jsonorigen = "js/cartas.json";
const peticion = new XMLHttpRequest();
var destinocontenido = document.querySelector("#Columnas");
var datos;
var campo = document.querySelector(".c");
inicio();
function inicio() {
  if(localStorage.getItem("cartas") === null){
  peticion.open('GET', jsonorigen);
  peticion.send();
  peticion.onreadystatechange = function() {
    if (this.readyState == 4) {

      peticion.onload = function() {

        datos = JSON.parse(this.responseText);
          localStorage.setItem("cartas", JSON.stringify(datos));
          datos = localStorage.getItem("cartas");
          datos = JSON.parse(datos);
          ordenar();
      }
    }
    }
  }else{

    datos = localStorage.getItem("cartas");
    datos = JSON.parse(datos);
    ordenar();
  }
}
function ordenar() {
removeAllChilds(destinocontenido);
          var ordenado = datos.sort(function(a, b) {
            if (a.cantidad > b.cantidad) {
              return -1;
            }
          });
        llenadoContenido(datos);
       }
$(".c").click(function() {

  var can = $(this).attr("id");

  sumar(can);
});

function sumar(numero) {
  var data = localStorage.getItem("cartas");
  data = JSON.parse(data);
  var tempa=0;
  tempa= (parseInt(data[numero].cantidad) + 1);
  data[numero].cantidad = "" + tempa;
  localStorage.setItem("cartas", JSON.stringify(data));

  datos=data;
ordenar();

}

function llenadoContenido(objetoJson) {

  var tr = document.createElement("tr");
  var th =document.createElement("th");
  var th2 =document.createElement("th");
  var th3 =document.createElement("th");
  th.textContent="#";
  tr.appendChild(th);
  th2.textContent="Carta";
  tr.appendChild(th2);
  th3.textContent="Cantidad";
  tr.appendChild(th3);
  destinocontenido.appendChild(tr);
  for (i = 0; i < objetoJson.length; i++) {
    tr = document.createElement("tr");
    var id = document.createElement("td");
    id.textContent = objetoJson[i].numero;
    tr.appendChild(id);
    var carta = document.createElement("td");
    carta.textContent = objetoJson[i].carta;
    tr.appendChild(carta);
    var cantidad = document.createElement("td");
    cantidad.textContent = objetoJson[i].cantidad;
    tr.appendChild(cantidad);
    destinocontenido.appendChild(tr);
  }
}
function removeAllChilds(a) {
  if (a !== null) {
    while (a.hasChildNodes()) {
      a.removeChild(a.lastChild);
    }
  } else {
    console.log("no hay na");
  }
}
function ingresarNueva() {
var numero=document.querySelector("#carta").value;
var carta=document.querySelector("#numero").value;
if (carta=="" || numero=="") {
alert("error, verifique los campos");
}else {

  datos.push({
    numero: numero,
    carta: carta,
    cantidad: "0",
});

localStorage.setItem("cartas", JSON.stringify(datos));
ordenar();
}


}
