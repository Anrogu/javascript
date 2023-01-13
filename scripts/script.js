	function calculos(){
		let: calculos = [
			" una vez ocurrido el descuento su objeto cuesta ", "una vez añadido el impuesto su objeto cuesta "
		];

    let seleccion = prompt("bienvenido a calculadora de impuestos y descuentos! ingrese si o no").toUpperCase();
	while (seleccion != "SI" && seleccion != "NO") {
	alert("Dato incorrecto, por favor ingrese si o no").toUpperCase();
    };
	if (seleccion === "SI") {
alert("bienvenido!");
let impuestoDescuento = true;
while (impuestoDescuento) {
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
var impuesto1 = parseInt(prompt("ingrese el impuesto a sumar"));
var impuesto2 = parseInt(prompt("ingrese el precio de su objeto"));
let: operacionesImpuesto = [
	impuestoR1 = impuesto1 / 100,
	impuestoR2 = impuesto2 * impuestoR1,
	impuestoR3 = impuesto2 + impuestoR2,
]
	let impu = calculos [1]
	let opimpu = operacionesImpuesto [2]
	alert((impu) + opimpu);

} else {
let descuento1 = parseInt(prompt("ingrese el descuento a recibir"));
let descuento2= parseInt(prompt("ingrese el precio de su objeto"));
let: operacionesDescuento = [
descuentoR1 = descuento1 / 100,
descuentoR2 = descuento2 * descuentoR1,
descuentoR3 = descuento2 - descuentoR2,
]
let desc = calculos [0]
opdescu = operacionesDescuento [2]
alert((desc) + opdescu);
}}}}else{
    alert("gracias!")
	
}
}
calculos();