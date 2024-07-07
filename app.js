const d = document;
const textArea = d.querySelector(".form-input");
const imgLupa = d.querySelector(".encriptado-img")
const loaderCarga = d.querySelector(".loader");
const encripTitulo = d.querySelector(".encriptado-titulo");
const encripTexto = d.querySelector(".encriptado-texto");
const btnEncriptar = d.querySelector(".btn-format");
const btnDesencriptar = d.querySelectorAll(".btn-format");
const btnCopiar = d.querySelector(".btn-copiar");

const claves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];
function mensajeEncrip(mensaje){
    let encriptarMens = "";
    for(let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptado = letra;
        for(let j = 0; j < claves.length; j++) {
            if (letra === claves[j][0]) {
                encriptado = claves[j][1];
                break;
            }
        }
        encriptarMens += encriptado;
    }
    return encriptarMens;
};
function mensajeDesenc(mensaje){
    let desencMens = mensaje;
    for(let i = 0; i < claves.length; i++){
        let regex = new RegExp(claves[i][1], 'g');
        desencMens = desencMens.replace(regex, claves[i][0]);
    }
    return desencMens;
};
textArea.addEventListener("input", (e)=>{
    imgLupa.style.display = "none";
    loaderCarga.classList.remove("hidden");
    encripTitulo.textContent = "Capturando mensaje";
    encripTexto.textContent = "";
});
btnEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = mensajeEncrip(mensaje);
    encripTexto.textContent = mensajeEncriptado;
    btnCopiar.classList.remove("hidden");
    encripTitulo.textContent = "El resultado es: ";
});
btnDesencriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = mensajeDesenc(mensaje);
    encripTexto.textContent = mensajeDesencriptado;
    encripTitulo.textContent = "El resultado es: ";
    btnCopiar.classList.remove("hidden");
});
btnCopiar.addEventListener('click', ()=>{
    let textoCopiado = encripTexto.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=> {
        imgLupa.style.display = "block";
        loaderCarga.classList.add("hidden");
        encripTitulo.textContent = "El texto se copio con exito";
        btnCopiar.classList.add("hidden");
        encripTexto.textContent = "";
    })
});