function calculaPrecioTotal(precio){
	var impuestos=1.16;
	var gastosEnvio=10;
	var precioTotal=(precio * impuestos)+gastosEnvio;
	return precioTotal;
}

var precioTotal=calculaPrecioTotal(23.34);

alert(precio);