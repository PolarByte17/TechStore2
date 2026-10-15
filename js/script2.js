const botonmenu = document.getElementById("botonmenu")
const menunavegacion = document.getElementById("menunavegacion")
botonmenu.addEventListener("click", function () {
    menunavegacion.classList.toggle("menu-visible")
})
localStorage.setItem("nombreusuario", "carlos")
const nombre = localStorage.getItem("nombreusuario")
const mensajeusuario = document.getElementById("mensajeusuario")
mensajeusuario.textContent = `Bienvenido a Tech Store, estimado@ ${nombre}`

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []

for (let i = 0; i < favoritos.length; i++) {
    const elemento = document.createElement("li")
    elemento.textContent = favoritos[i]
    listafavoritos.appendChild(elemento)
}

btnguardar.addEventListener("click", function () {
    const producto = productoinput.value.trim()
    if (producto === "") {
        return
    }
    favoritos.push(producto)

    localStorage.setItem("favoritos", JSON.stringify(favoritos))

    const elemento = document.createElement("li")
    elemento.textContent = producto
    listafavoritos.appendChild(elemento)
    productoinput.value = ""
})
