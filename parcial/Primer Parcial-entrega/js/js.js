
var jsonorigen="js/cartas.json";
var peticion= new XMLHttpRequest();
var destinocontenido=document.querySelector("#Columnas");
cargar();

inicio();



function inicio(){
  cargar();
}

function cargar(){
  peticion.open('GET', jsonorigen);

peticion.responseType='json';
peticion.send();
peticion.onload=function(){
  var datos=peticion.response;
  localStorage.setItem("json",datos.response.stringify);


  llenadoContenido(datos);


  function llenadoContenido(objetoJson){
   for(i=0;i<datos.length;i++){
     var tr=document.createElement("tr");
     var id=document.createElement("td");
     id.textContent=datos[i].numero;
     tr.appendChild(id);
     var carta=document.createElement("td");
     carta.textContent=datos[i].carta;
     tr.appendChild(carta);
     var cantidad=document.createElement("td");
     cantidad.textContent=datos[i].cantidad;
     tr.appendChild(cantidad);
     destinocontenido.appendChild(tr);

   }
  }
}}
