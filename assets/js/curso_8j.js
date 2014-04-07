/*Escribir el código de una función a la que se pasa como parámetro u nñumero entero y devuelver como resultado una cadena de texto que indica si el nùmero es pao o impar.

mostar en pantalla el resultado devuelto por la función
*/

function numero_par_impar(numerolocal){
	var res=numerolocal%2;

	if(res==0){
	mensaje=("Es par");
	}
	else {
	mensaje=("es impar");
	}
	
	return mensaje;
	
}
numero=prompt("Ingresa un numero");
mensaje=numero_par_impar(numero)
alert(mensaje);

