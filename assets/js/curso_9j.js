/*definir uan función que muestre información sobre una cadena de texto
que se le pasa como argumento. A partir de la cadena que se le pasa, 
la funcón determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas*/

function informacion_de_texto(texto){
	

if (texto==(mensaje1.toUpperCase())){
	resultado=("solo tiene mayusculas")
}
else if(texto==(mensaje1.toLowerCase())){
	resultado=("solo tiene minusculas")
}
else{
	resultado=("es mezcla")
}

return resultado;
}

mensaje1=prompt("escribe un texto");

alert(informacion_de_texto(mensaje1));


