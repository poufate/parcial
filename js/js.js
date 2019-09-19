var jsonorigen = "js/cartas.json";
const peticion = new XMLHttpRequest();
var destinocontenido = document.querySelector("#Columnas");
var datos;
var campo=document.querySelector(".c");

inicio();





function inicio() {
  cargar();

}

function cargar() {
  peticion.open('GET', jsonorigen);
  peticion.send();
  peticion.onreadystatechange = function(){

		if(this.readyState == 4 ) {



  peticion.onload = function() {
    console.log("onload");

    datos = JSON.parse(this.responseText);
    if (localStorage.getItem("cartas") === null) {
      localStorage.setItem("cartas", JSON.stringify(datos));
      datos=localStorage.getItem("cartas");
     datos=JSON.parse(datos);
      console.log("yes");
    }else {
      console.log("nel");
      datos=localStorage.getItem("cartas");
     datos=JSON.parse(datos);
    }

    llenadoContenido(datos);

  }
}}}

$(".c").click(function () {

  var can=$(this).attr("id");

  sumar(can);
});

function sumar(numero) {
var data=localStorage.getItem("cartas");
data=JSON.parse(data);
var tempa=(parseInt(data[numero].cantidad)+1);
data[numero].cantidad=""+tempa;
localStorage.setItem("cartas",JSON.stringify(data));
console.log("antes de pintar sumando"+data);
removeAllChilds(destinocontenido);
llenadoContenido(data);
}

function llenadoContenido(objetoJson) {
  console.log(objetoJson);

  for (i = 0; i < objetoJson.length; i++) {

    var tr = document.createElement("tr");
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
function removeAllChilds(a)
 {
   if(a !== null){
          while (a.hasChildNodes()){
              a.removeChild(a.lastChild);
          }
 }
 else {
   console.log("no hay na");
 }
}
