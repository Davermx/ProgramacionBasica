var peso;
var pesoEnMarte; //camelcase
alert("Quieres saber tu peso en marte");
peso= prompt("Cual es tu peso" , "70");
peso= parseInt(peso);

pesoEnMarte=(peso/9.81) * 3.711;

alert("Tu peso en Marte es: " + pesoEnMarte + " kg.");

//alert: funcion
		//() : Parametros de la funcion
		// "" : Cadenas de Texto
	//var nombre = "David";
	//var apellido = "Aguilera"
	//var edad = 28;
	//alert(nombre + " " + apellido + "\n" + edad + "años.");
	//alert("2" + 5*8)
