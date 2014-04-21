function palindromo(cadena){
  
 letras= promt
  cadena = cadena.toLowerCase();

  var letras = cadena.split("");
  
  var cadenaSinEspacios = "";
  
  for (i in letras) {
    if(letras[i] ! = " ") {
      cadenaSinEspacios + = letras[i];
    }
  }
  
  
