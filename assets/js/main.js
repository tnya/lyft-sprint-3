//VALIDACION NUMERO TELEFONO

function validNumber(){
	var number = document.getElementById("validPhone");

	if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test("number"));
		alert("Debe ingresar un numero de telefono válido");
}


/* JUEGO */

//Crear clase (constructor)

function Auto(posicion_x, posicion_y){
	this.avanzar = avanzar;
	this.ir_izquierda = izquierda;
	this.ir_derecha = derecha;
	this.retroceder = retroceder;


}

/* Hacer un constructor y un arreglo de 10x6. 

-Desde el arreglo, llamar los metodos del constructor 
para hacer que el auto se mueva dentro del arreglo.
-Se recorre mediante el uso de "for" 
-Recorriendo el arreglo puedo saber cuando completo todas las posiciones posibles de mi tablero
