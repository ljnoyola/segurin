/*definir una funcion que determine si la cadena de texto que se le pasa como parámetro es un palindromo, es decir, si se lee de la misma forma
desde la izquierda y desde la derecha. ejemplo de palindromo complejo: "la ruta nos aporto otro paso natural".*/

mensaje=prompt("escribe un texto");
var concatenado=""
var concatenado_alrevez=""

var sin_espacios=mensaje.split(" ");	
for(i in sin_espacios){
	concatenado=concatenado+sin_espacios[i]		
}

//alert(concatenado);

var alreves = concatenado.split("").reverse();
for(i in alreves){
	concatenado_alrevez=concatenado_alrevez+alreves[i]
}

//alert(concatenado_alrevez);

if (concatenado==concatenado_alrevez){
	alert("es palindromo");
}
else{
	alert("no es palindromo");
}