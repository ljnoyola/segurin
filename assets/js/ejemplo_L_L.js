

/*var parrafos=document.getElementsByTagName("p"); //traer elemmentos por etiqueta
console.log(parrafos);*/

/*var parrafos=document.getElementsByName("prueba"); //traer elemmentos por nombre name="prueba"
console.log(parrafos);*/

/*var parrafos=document.getElementById("prueba"); //traer elemmentos por id id="prueba" solamente un elemento
console.log(parrafos);*/

/*var parrafo=document.createElement("p"); //crea una etieueta <p> ...</p>
var contenido=document.createTextNode("Hola mundo!");
parrafo.appendChild(contenido); //agrega hola mundo a <p>Hola mundo!</p>
document.body.appendChild(parrafo); //agrega <p>Hola mundo!</p> al body de mi archivo*/

/*var parrafos=document.getElementById("prueba");
console.log(parrafos.className);//clases
console.log(parrafos.style.color);//estilos*/

/*muestre cuantos enlaces tiene la pagina*/

/*var parrafos=document.getElementsByTagName("a"); //traer elemmentos por etiqueta
contador=0

for(i=0; i<=parrafos.length-1; i++){
	//console.log(parrafos[i].href);
	if (parrafos[i].href!="" && parrafos[i].href!="#"){
		contador=contador+1
	}
}

console.log(contador);*/

var parrafo=document.getElementById("provisional");
parrafo.parentNode.removeChild(parrafo);
