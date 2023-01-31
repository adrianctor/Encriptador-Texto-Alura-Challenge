function encriptar(diccionario){
    var taTexto = document.querySelector("#texto-encriptar");
    var traduccion = "";
    const texto = taTexto.value;
    var area_default = document.querySelector("#salida-default");
    var area_resultado = document.querySelector("#resultado");
    var texto_resultado = document.querySelector("#texto-resultado");
    if(texto){
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#informacion").style.color = "red";
                document.querySelector(".icono-informacion").style.color = "red";
                document.querySelector("#informacion").style.fontSize = "16px";
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
function desencriptar(resultado){
    var texto = document.querySelector("#texto-encriptar");
    return;
}

function copiarTexto(){
    const texto_resultado = document.querySelector("#texto-resultado");
    navigator.clipboard.writeText(texto_resultado.value);
}

var diccionario = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};
const btnEncriptar = document.querySelector('#btn_encriptar');
const btnDesencriptar = document.querySelector('#btn_desencriptar');
const btnCopiar = document.querySelector('#copiar');
btnEncriptar.addEventListener( 'click', function() {encriptar(diccionario);} );
btnDesencriptar.addEventListener( 'click', function() {desencriptar(diccionario);} );
btnCopiar.addEventListener( 'click', function() {copiarTexto();} );