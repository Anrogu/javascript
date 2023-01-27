let impuesto_Btn = document.getElementById(`impuesto`)
impuesto_Btn.addEventListener(`click`, bienvenida)
let descuento_Btn =document.getElementById("impuesto")
descuento_Btn.addEventListener("click", descuento_neto)
function bienvenida(){
	let calculos = [
		" una vez ocurrido el descuento su objeto cuesta ", "una vez añadido el impuesto su objeto cuesta ", "el impuesto neto a su objeto es " , "el descuento neto a su objeto es "
	];

	let seleccion = prompt("bienvenido a calculadora de impuestos y descuentos! ingrese si o no").toUpperCase();
	while (seleccion != "SI" && seleccion != "NO") {
	alert("Dato incorrecto, por favor ingrese si o no").toUpperCase();

}if (seleccion === "SI") {
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
		if (calculo === "impuesto") {
			impuesto_neto();
		}else{
			descuento_neto()
		};
function impuesto_neto (){
  let datosImpuesto = {
    tipodeoperacionimpu1:"division",
    tipodeoperacionimpu2:"multiplicacion",
    impuesto1 : parseInt(prompt("ingrese el impuesto a sumar")),
    impuesto2: parseInt(prompt("ingrese el precio de su objeto")),
  }
  let operacionesimpuesto = [
    impuestoR1 = datosImpuesto.impuesto1 / 100,
    impuestoR2 = datosImpuesto.impuesto2 * impuestoR1,
    impuestoR3 = datosImpuesto.impuesto2 + impuestoR2,
    ];
    
		let impu1= calculos [2]
		let impu2= operacionesimpuesto [1]
    let impuextra1=calculos[1]
    let impuextra2=operacionesimpuesto[2] 
		alert(impu1+impu2)
    let seleccion = prompt("¿desea calculcar el impuesto añadido a su objeto?").toUpperCase();
	while (seleccion != "SI" && seleccion != "NO") {
	alert("Dato incorrecto, por favor ingrese si o no").toUpperCase();

}if (seleccion === "SI"){
  alert(impuextra1+impuextra2);
}else{
  stop
}
}
function descuento_neto (){
	let datosdescuento = {
		tipodeoperaciondescu1:"division",
		tipodeoperaciondescu2:"multiplicacion",
		descuento1: parseInt(prompt("ingrese el descuento a restar")),
		descuento2: parseInt(prompt("ingrese el precio de su objeto")),
	}
	let operacionesdescuento = [
	descuentoR1 = datosdescuento.descuento1 / 100,
	descuentoR2 = datosdescuento.descuento2 * descuentoR1,
  descuentoR3 = descuentoR2+datosdescuento.descuento2
	];
	let descu1= calculos [3]
	let descu2= operacionesdescuento [1]
  let descuextra1= calculos[0]
  let descuextra2=operacionesdescuento[2]
	alert(descu1+descu2)
  let seleccion = prompt("¿desea calculcar el impuesto añadido a su objeto?").toUpperCase();
	while (seleccion != "SI" && seleccion != "NO") {
	alert("Dato incorrecto, por favor ingrese si o no").toUpperCase();

}if (seleccion === "SI"){
  alert(descuextra1+descuextra2);
}else{
  stop
}
}
}}}}
bienvenida()