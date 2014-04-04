/*definir uan función que muestre información sobre una cadena de texto
que se le pasa como argumento. A partir de la cadena que se le pasa, 
la funcón determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas*/

function informacion_de_texto(textolocal){
	

if (textolocal==(mensaje1.toUpperCase())){
	informacion=("solo tiene mayúsculas")
}
else if(textolocal==(mensaje1.toLowerCase())){
	informacion=("solo tine minúsculas")
}
else{
	informacion=("Es mezcla")
}

return informacion;
}

mensaje1=prompt("escribe un texto");

alert(informacion_de_texto(mensaje1));


