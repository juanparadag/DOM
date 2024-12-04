"use strict";
const tituloPrincipal = document.getElementById("tituloP"); // Título del documento (etiqueta <title>)
const title = document.getElementById("title"); // Encabezado principal dentro del <h1>
const div = document.getElementById("main-block"); // Contenedor principal que incluye la imagen y el comentario
//const imagen = document.querySelector("img"); // Imagen que se encuentra dentro del contenedor principal
const comentario = document.querySelector(".image-comment"); // Texto debajo de la imagen (clase "image-comment")
const boton = document.getElementById("button"); // Botón "Ver Python"
const boton2 = document.getElementById("JavaScript"); // Botón "Ver Javascript"
const favicon = document.getElementById("logo");// Ícono de la página (favicon, etiqueta <link>)
const imagenDelContenedor = document.createElement("img")
const contenedorImagen = document.getElementById("div-imagen")



function verPython() {
    
   
    imagenDelContenedor.src = "images/What-is-Python-3.12_11zon.webp"
    imagenDelContenedor.width = "180"
    contenedorImagen.appendChild(imagenDelContenedor)
    imagenDelContenedor.setAttribute("alt", "Python");
    title.innerText = "Python";
    tituloPrincipal.innerText = "Python";
    title.innerHTML = "<em>Python</em>";
  
    div.style.background = "black";
    div.style.color = "white";
    div.style.borderColor = "#5790E6";
    favicon.href = "/images/python-sign-3d-rendering-illustration-png.png"

    // Cambiamos la imagen
    

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
    imagenDelContenedor.src = "/images/descargajs.jpg"
    imagenDelContenedor.width = "100"
    p.innerText = "JavaScript"
    favicon.href = "/images/descargajs.jpg" 
    // Cambiamos el comentario y su color
    comentario.innerText = "Javascript es clave para el desarrollo web.";
    comentario.style.color = "black"; // Color específico para Javascript
}



boton.addEventListener("click", verPython);
boton2.addEventListener("click", verJavaScript);


