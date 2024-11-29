"use strict";

const tituloPrincipal = document.getElementById("tituloP");
const title = document.getElementById("title");
const div = document.querySelector("div");
const oldiv = document.querySelector(".old-div");
const imagen = document.querySelector("img");
const comentario = document.querySelector(".image-comment"); // Seleccionamos el comentario
const boton = document.getElementById("button");
const boton2 = document.getElementById("JavaScript");
const boton3 = document.getElementById("eliminar");


function verPython() {
    title.innerText = "Python";
    tituloPrincipal.innerText = "Python";
    title.innerHTML = "<em>Python</em>";
    div.style.background = "yellow";
    div.style.color = "white";
    div.style.borderColor = "gray";
    

    // Cambiamos la imagen
    imagen.setAttribute("src", "images/What-is-Python-3.12_11zon.webp");
    imagen.setAttribute("alt", "Python");
    imagen.setAttribute("width", 200);

    // Cambiamos el comentario y su color
    comentario.innerText = "Python es un lenguaje versátil y poderoso.";
    comentario.style.color = "white"; // Color específico para Python
}

function verJavaScript() {
    title.innerText = "Javascript";
    tituloPrincipal.innerText = "Javascript";
    title.innerHTML = "<em>Javascript</em>";
    div.style.background = "#F7DF1E";
    div.style.color = "black";
    div.style.borderColor = "black";

    // Cambiamos la imagen
    imagen.setAttribute("src", "images/descarga.webp");
    imagen.setAttribute("alt", "Javascript");
    imagen.setAttribute("width", 100);

    // Cambiamos el comentario y su color
    comentario.innerText = "Javascript es clave para el desarrollo web.";
    comentario.style.color = "black"; // Color específico para Javascript
}

function eliminarDiv() {
    document.body.removeChild(oldiv);
    const botonEliminar = document.getElementById("eliminar");
    botonEliminar.remove();
}

boton.addEventListener("click", verPython);
boton2.addEventListener("click", verJavaScript);
boton3.addEventListener("mouseenter", eliminarDiv)

