var usuario;
var contraseña;

document.querySelector('#bot').addEventListener('click', function() {
window.locationf="index.html";
    usuario=document.querySelector("#exampleInputEmail1").value;
    contraseña=document.querySelector("#exampleInputPassword1").value;
    verificar();
	});

function  verificar(){

if (usuario=="admin") {
  if (contraseña=="1234") {
    window.location.replace("http://sitioweb.com");
localStorage.setItem("Usuario",usuario);
window.location.replace("http://sitioweb.com");
location.href ="http://www.pagina1.com";
window.location="index.html";

  }else {
    alert("contraseña incorrecta");
  }
}else {
  alert("usuario No encontrado");
}
  		}
