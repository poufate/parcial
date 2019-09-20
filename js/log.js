var usuario;
var contraseña;
cambia_de_pagina();
function  verificar(){

if (usuario=="admin") {
  if (contraseña=="1234") {

localStorage.setItem("Usuario",usuario);

location.href="home.html"

  }else {

  }
}else {

}

  		}
      function cambia_de_pagina(){
        usuario=document.querySelector("#exampleInputEmail1").value;
        contraseña=document.querySelector("#exampleInputPassword1").value;
        console.log("comp");

        if(localStorage.getItem("Usuario") === null){
          console.log("no existe");
                    verificar();
      }else{
        console.log("existe");
      location.href="home.html"}
      }
    
