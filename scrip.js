function encriptado(){
    var frase = document.getElementById("txtEncriptado").value.toLowerCase();

    var txtEncriptado = frase.replace(/e/img, "enter");
    var txtEncriptado = txtEncriptado.replace(/o/img, "ober");
    var txtEncriptado = txtEncriptado.replace(/i/img, "imes");
    var txtEncriptado = txtEncriptado.replace(/a/img, "ai");
    var txtEncriptado = txtEncriptado.replace(/u/img, "ufat");

    document.getElementById("txtDesecriptado").innerHTML=txtEncriptado;
}

function desencriptado(){
    var frase = document.getElementById("txtEncriptado").value.toLowerCase();

    var txtEncriptado = frase.replace(/enter/img, "e");
    var txtEncriptado = txtEncriptado.replace(/ober/img, "o");
    var txtEncriptado = txtEncriptado.replace(/imes/img, "i");
    var txtEncriptado = txtEncriptado.replace(/ai/img, "a");
    var txtEncriptado = txtEncriptado.replace(/ufat/img, "u");

    document.getElementById("txtDesecriptado").innerHTML=txtEncriptado;
}

function copiando(){
    var txtArea = document.querySelector("#txtDesecriptado");
    txtArea.select();
    document.execCommand("copy");
}