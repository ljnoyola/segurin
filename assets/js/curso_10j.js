/*definir una funcion que determine si la cadena de texto que se le pasa como parámetro es un palindromo, es decir, si se lee de la misma forma
desde la izquierda y desde la derecha. ejemplo de palindromo complejo: "la ruta nos aporto otro paso natural".*/

mensaje=prompt("escribe un texto");

var separado=mensaje.split(" ");
var sin_espacios=separado.split("");

for(i in separado){
	alert(separado[i]);
	for(h in sin_espacios){
		alert(sin_espacios[h]);
	}

	
}