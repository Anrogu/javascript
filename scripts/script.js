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
function impuesto_neto (){
	let calculos = [
		" una vez ocurrido el descuento su objeto cuesta ", "una vez añadido el impuesto su objeto cuesta ", "el impuesto neto a su objeto es " , "el descuento neto a su objeto es "
	];
  let datosImpuesto = {
    tipodeoperacionimpu1:"division",
    tipodeoperacionimpu2:"multiplicacion",
    impuesto1 : parseInt(document.getElementById("calcimpu1").value),
    impuesto2: parseInt(document.getElementById("calcimpu2").value),
  }
  let operacionesimpuesto = [
	impuestoR1 = datosImpuesto.impuesto1 / 100,
	impuestoR2 = datosImpuesto.impuesto2 * impuestoR1,
  	impuestoR3 = datosImpuesto.impuesto1 + impuestoR2
    ];
    let impuextra2=operacionesimpuesto[2] 
	let resultadofinalimpu=(document.getElementById("resultado1").value)=impuextra2
	localStorage.setItem("resultado", impuextra2);
	let prueba = localStorage.getItem("resultado")
	console.log(prueba)

}
function descuento_neto (){
	let calculos = [
		" una vez ocurrido el descuento su objeto cuesta ", "una vez añadido el impuesto su objeto cuesta ", "el impuesto neto a su objeto es " , "el descuento neto a su objeto es "
	];
	let datosdescuento = {
		tipodeoperaciondescu1:"division",
		tipodeoperaciondescu2:"multiplicacion",
		descuento1:parseInt(document.getElementById("calcdesc1").value),
		descuento2:parseInt(document.getElementById("calcdesc2").value),
	}
	let operacionesdescuento = [
	descuentoR1 = datosdescuento.descuento1 / 100,
	descuentoR2 = datosdescuento.descuento2 * descuentoR1,
  	descuentoR3 = datosdescuento.descuento1 - descuentoR2
	];

  let descuextra2=operacionesdescuento[2]
  let resultadofinaldescu=(document.getElementById("resultado2").value)=descuextra2 
	localStorage.setItem("resultado", descuextra2);
	let prueba = localStorage.getItem("resultado")
	console.log(prueba)
}