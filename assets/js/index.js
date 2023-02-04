const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const areaMensaje = document.querySelector(".area-mensaje");
const areaCopiar = document.querySelector(".area-copiar");
const matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

function btnCopiar(){
    navigator.clipboard.writeText(mensaje.value);
    alert("El mesaje fue copiado al portapapeles");
}

function btnEncriptar(){
    if (textArea.value) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        areaMensaje.classList.add('invisible');
    }
    else{
        alert("El mensaje no puede ir vacío");
    }
}
function btnDesencriptar(){
    if (textArea.value) {
        const textoDesencriptado = desencriptar(textArea.value);
        mensaje.value = textoDesencriptado;
        textArea.value = "";
        mensaje.style.backgroundImage = "none";
        areaMensaje.classList.add('invisible');
    }
    else{
        alert("El mensaje no puede ir vacío");
    }
}
function encriptar(stringEncriptar){
    stringEncriptar = stringEncriptar.toLowerCase();
    for (let varIndice = 0; varIndice < matrizCodigo.length; varIndice++) {
        if (stringEncriptar.includes(matrizCodigo[varIndice][0])){
           stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[varIndice][0],matrizCodigo[varIndice][1]);
        }
        areaCopiar.classList.remove("invisible");
    }
    return stringEncriptar;
}

function desencriptar(stringDesencriptar){
    stringDesencriptar = stringDesencriptar.toLowerCase();
    for (let varIndice = 0; varIndice < matrizCodigo.length; varIndice++) {
        if (stringDesencriptar.includes(matrizCodigo[varIndice][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[varIndice][1],matrizCodigo[varIndice][0]);
        }
        areaCopiar.classList.remove("invisible");
    }
    return stringDesencriptar;
}