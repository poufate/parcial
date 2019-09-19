var usuario;
var contraseña;

function  verificar(){

if (usuario=="admin") {
  if (contraseña=="1234") {

localStorage.setItem("Usuario",usuario);

location.href="index.html"

  }else {
    alert("contraseña incorrecta");
  }
}else {
  alert("usuario No encontrado");
}

  		}
      function cambia_de_pagina(){
        usuario=document.querySelector("#exampleInputEmail1").value;
        contraseña=document.querySelector("#exampleInputPassword1").value;
        verificar();
      }
