	function comprarproducto(){
    let seleccion = prompt("bienvenido a calculadora de impuestos y descuentos! ingrese si o no").toUpperCase();
	while (seleccion != "SI" && seleccion != "NO") {
	alert("Dato incorrecto, por favor ingrese si o no").toUpperCase();
    };
	if (seleccion === "SI") {
alert("bienvenido!");
let impuestodescuento = true;
while (impuestodescuento) {
	do {
	calculo = prompt("¿necesitas calcular un descuento un impuesto?");

	switch (calculo) {
	case "descuento" || "DESCUENTO":
	break;
	case "impuesto" || "IMPUESTO":
	break;
	default:
	alert("no es una opcion elegible");
	if (alert= true ){
        stop
    }
    }
} while (calculo != "descuento" && calculo != "DESCUENTO" && calculo != "impuesto" && calculo != "IMPUESTO");{

if (calculo === "impuesto"){
	let cantidad = parseInt(prompt("ingrese su cantidad 1"));
	let cantidad1 = parseInt(prompt("ingrese su cantidad 2"));

	impuesto = cantidad1 * cantidad;
	alert("su impuesto es " + impuesto);
} else {
let cantidad21 = parseInt(prompt("ingrese su cantidad 1"));
let cantidad22= parseInt(prompt("ingrese su cantidad 2"));

descuento = cantidad21 / cantidad22;
alert("su descuento es " + descuento);
}}}}else{
    alert("gracias!")
}
}

comprarproducto();