let mensaje = "";

function encriptar(mensaje) {
    mensaje = document.getElementById("mensajeUsuario").value;
    let restriccion = validarMensaje(mensaje);
    let resultado = "";
    if (!restriccion) {
        resultado = "El mensaje no puede contener mayúsculas, caracteres especiales ni tildes."
    } else {
        let newChar;
        for (char of mensaje) {
            newChar = char;
            if (char === 'a') {
                newChar = 'ai';
            }
            if (char === 'e') {
                newChar = 'enter';
            }
            if (char === 'i') {
                newChar = 'imes';
            }
            if (char === 'o') {
                newChar = 'ober';
            }
            if (char === 'u') {
                newChar = 'ufat';
            }
            resultado += newChar;
        }
    }
    ocultar(resultado);
}

function desencriptar(mensaje) {
    mensaje = document.getElementById("mensajeUsuario").value;
    let restriccion = validarMensaje(mensaje);
    let resultado = "";
    if (!restriccion) {
        resultado = "El mensaje no puede contener mayúsculas, caracteres especiales ni tildes."
    } else {
        for (let i = 0; i < mensaje.length; i++) {
            let char = mensaje[i];
            if (char === 'a' && mensaje[i + 1] === 'i') {
                char = 'a';
                i++;
            }
            if (char === 'e' && mensaje[i + 1] === 'n' && mensaje[i + 2] === 't' && mensaje[i + 3] === 'e' && mensaje[i + 4] === 'r') {
                char = 'e';
                i += 4;
            }
            if (char === 'i' && mensaje[i + 1] === 'm' && mensaje[i + 2] === 'e' && mensaje[i + 3] === 's') {
                char = 'i';
                i += 3;
            }
            if (char === 'o' && mensaje[i + 1] === 'b' && mensaje[i + 2] === 'e' && mensaje[i + 3] === 'r') {
                char = 'o';
                i += 3;
            }
            if (char === 'u' && mensaje[i + 1] === 'f' && mensaje[i + 2] === 'a' && mensaje[i + 3] === 't') {
                char = 'u';
                i += 3;
            }
            resultado += char;
        }
    }
    ocultar(resultado);
}

function validarMensaje(mensaje) {
    const regex = /[A-ZÁÉÍÓÚÜÑ¡!@#$%^&*()_+={}\[\]:;"'<>,.?/|\\]/;
    let valido = true;
    if (mensaje.match(regex)) {
        valido = false;
    }
    return valido;
}

function ocultar(resultado) {
    document.querySelector(".respuesta p").textContent = resultado;
    document.querySelector(".respuesta img").style.display = "none";
    document.getElementById("botonCopiar").style.display = "block";
    document.getElementById("mensajeUsuario").value = "";
    document.getElementById('respuesta').style.backgroundColor = 'white';
}

function copiarMensaje() {
    let mensajeEncriptado = document.querySelector(".respuesta p");
    let copia = document.createElement("textarea");
    copia.value = mensajeEncriptado.textContent;
    document.body.appendChild(copia);
    copia.select();
    document.execCommand("copy");
    document.body.removeChild(copia);
}

