const placehold = document.getElementById("numero2")
const txt = document.getElementById("numero3")
const formulario = document.getElementById("numero")
const checkbox  = document.getElementById("checkbox")
const div = document.querySelector("div")

    formulario.addEventListener("submit", (event)=>{
    
     const textoInput = placehold.value
     if(!isNaN(textoInput) && textoInput !== ""){
     alert (textoInput*10)} else{
        alert ("escriba un numero")
    }
})
const link = document.createElement("a")
    link.href="/index.html";
     link.textContent= "Click aqui" 

function agregarLink (){     
     
     div.appendChild(link)
   
}

function borrarLink(){
    div.removeChild(link)
}
checkbox.addEventListener("change", ()=>{
        if (checkbox.checked){ agregarLink()
    } else {
        borrarLink()
    }})
 