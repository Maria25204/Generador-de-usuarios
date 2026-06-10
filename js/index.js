const cajita = document.getElementById("cajita")
const boton = document.createElement("button")


async function user() {
const peticion = await fetch("https://randomuser.me/api/")   
const respuesta = await peticion.json()

const imagen = document.createElement("img")
const nombre = document.createElement("h3")
const correo = document.createElement("h4")
const pais = document.createElement("p")


imagen.src =  respuesta.results[0].picture.large
nombre.textContent =  respuesta.results[0].name.first +  respuesta.results[0].name.last
correo.textContent =  respuesta.results[0].email
pais.textContent =  respuesta.results[0].location.country
boton.textContent = "Random";

const imagenVieja = document.querySelector("img")
const nombreViejo = document.querySelector("h3")
const correoViejo = document.querySelector("h4")
const paisViejo = document.querySelector("p")



cajita.appendChild(imagen);
if(imagenVieja){
    imagenVieja.remove()
}


cajita.appendChild(nombre);
if(nombreViejo){
    nombreViejo.remove()
}
cajita.appendChild(correo);
if(correoViejo){
    correoViejo.remove()
}
cajita.appendChild(pais); 
if(paisViejo){
    paisViejo.remove()
}

cajita.appendChild(boton);

}
user();
boton.addEventListener("click", user)