/*El factorial de un número n es una operaciòn matemática que consiste en multiplicar todos los factores 
n x (n-1) x (n-2) x ... x 1. Asím el factorial de 5 (escrito como 5!) es igual a: 5!=5 x 4 x 3 x 2 x 1= 120
utilizando la estructura for, crear un script que calcule el factorial de un numero entero*/

var num=prompt("Introduce un número entero");
fact=1
for(var i=num; i>1; i=i-1){
	var fact=fact*i;
	}
alert(fact);