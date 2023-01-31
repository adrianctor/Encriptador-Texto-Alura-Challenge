var area_default = document.querySelector("#salida-default");
var area_resultado = document.querySelector("#resultado");
var texto_resultado = document.querySelector("#texto-resultado");
var taTexto = document.querySelector("#texto-encriptar");
var diccionario = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

function informarCaracteresEspeciales(){
    document.querySelector("#informacion").style.color = "red";
    document.querySelector(".icono-informacion").style.color = "red";
    document.querySelector("#informacion").style.fontSize = "16px";
}

function encriptar(diccionario){
    var traduccion = "";
    const texto = taTexto.value;
    if(texto){
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                informarCaracteresEspeciales();
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_resultado.classList.add("invisible");
                return;
            }
            if(texto[i] == 'a'){
                traduccion += diccionario["a"] ;
            }
            else if(texto[i] == 'e'){
                traduccion += diccionario["e"];
            }
            else if(texto[i] == 'i'){
                traduccion += diccionario["i"]; 
            }
            else if(texto[i] == 'o'){
                traduccion += diccionario["o"]; 
            }
            else if(texto[i] == 'u'){
                traduccion += diccionario["u"]; 
            }
            else{
                traduccion += texto[i];
            }
        }
        area_default.classList.add("invisible");
        area_resultado.classList.remove("invisible");
        texto_resultado.innerHTML = traduccion;
    }
    else{
        alert("El mensaje no puede ir vacío");
    }
    return;
}
function desencriptar(diccionario){
    var texto = taTexto.value;
    if(texto){
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                informarCaracteresEspeciales();
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_resultado.classList.add("invisible");
                return;
            }
        }
        area_default.classList.add("invisible");
        area_resultado.classList.remove("invisible");
        texto = texto.replace(new RegExp(diccionario["a"], "g"), "a");
        texto = texto.replace(new RegExp(diccionario["e"], "g"), "e");
        texto = texto.replace(new RegExp(diccionario["i"], "g"), "i");
        texto = texto.replace(new RegExp(diccionario["o"], "g"), "o");
        texto = texto.replace(new RegExp(diccionario["u"], "g"), "u");
        texto_resultado.innerHTML = texto;
    }
    else{
        alert("El mensaje no puede ir vacío");
    }
    return;
}

function copiarTexto(){
    const texto_resultado = document.querySelector("#texto-resultado");
    navigator.clipboard.writeText(texto_resultado.value);
}

const btnEncriptar = document.querySelector('#btn_encriptar');
const btnDesencriptar = document.querySelector('#btn_desencriptar');
const btnCopiar = document.querySelector('#copiar');
btnEncriptar.addEventListener( 'click', function() {encriptar(diccionario);} );
btnDesencriptar.addEventListener( 'click', function() {desencriptar(diccionario);} );
btnCopiar.addEventListener( 'click', function() {copiarTexto();} );