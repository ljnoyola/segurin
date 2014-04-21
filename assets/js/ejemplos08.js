

/*
var contenido = document.createTextNode("hola mundo");

parrafo.appendChild(contenido);

document.body.appendChild(parrafo);*/

/*var parrafos =document.createTextNode("prueba");
console.log(parrafos.className)
console.log(parrafos.style.color)*/


var enlaces = document.getElementsByTagName("a");
console.log(enlaces)

var contador = 0;
  for(i=0; i<enlaces.length; i++)  {

    if(enlaces[i].href==""){
      contador++;
}
}