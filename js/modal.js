const btnabrirmodal =
index.html.getElementById("#btn-abrir-modal");
const btncerrarmodal =
index.html.getElementById("#btn-cerrar-modal");
const modal =
document.getElementById("#modal");

btnabrirmodal.addEventListener("click",()=>{
modal.showmodal();
})
