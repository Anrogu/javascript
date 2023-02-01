let impuesto_Btn = document.getElementById(`impuesto`)
impuesto_Btn.addEventListener(`click`, ()=>{
	modal.showModal();
})
let descuento_Btn = document.getElementById(`descuento`)
descuento_Btn.addEventListener(`click`, ()=>{
	modal1.showModal();
})
let cerrar_Modal = document.getElementById("cerrarmodal")
cerrar_Modal.addEventListener("click",() =>{
modal.close();
})
let cerrar_Modal1 = document.getElementById("cerrarmodal1")
cerrar_Modal1.addEventListener("click",() =>{
modal1.close();
})
let calculoImpuesto_Btn = document.getElementById("calculoimpuesto")
calculoImpuesto_Btn.addEventListener("click",() =>{
impuesto_neto();
})
let calculoDescuento_Btn = document.getElementById("calculodescuento")
calculoDescuento_Btn.addEventListener("click",() =>{
descuento_neto();
})
bienvenida();
function bienvenida(){

	let seleccion = alert("bienvenido a calculadora de impuestos y descuentos!")
}
function impuesto_neto (){
	let calculos = [
		" una vez ocurrido el descuento su objeto cuesta ", "una vez añadido el impuesto su objeto cuesta ", "el impuesto neto a su objeto es " , "el descuento neto a su objeto es "
	];
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
	localStorage.setItem("resultado", impuextra2);
	let prueba = localStorage.getItem("resultado")
	console.log(prueba)
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
	let calculos = [
		" una vez ocurrido el descuento su objeto cuesta ", "una vez añadido el impuesto su objeto cuesta ", "el impuesto neto a su objeto es " , "el descuento neto a su objeto es "
	];
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
	localStorage.setItem("resultado", descuextra2);
	let prueba = localStorage.getItem("resultado")
	console.log(prueba)
  let seleccion = prompt("¿desea calculcar el impuesto añadido a su objeto?").toUpperCase();
	while (seleccion != "SI" && seleccion != "NO") {
	alert("Dato incorrecto, por favor ingrese si o no").toUpperCase();

}if (seleccion === "SI"){
  alert(descuextra1+descuextra2);
}else{
  stop
}
}
