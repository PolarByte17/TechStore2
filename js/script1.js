const productos = [
    {
        nombre: "laptop",
        precio: 2800,
        categoria: "laptops",
        stock: 10
    },

    {
        nombre: "mouse",
        precio: 120,
        categoria: "accesorios",
        stock: 10,
    },
    {
        nombre: "monitor Lg",
        precio: 3200,
        categoria: "monitores",
        stock: 15
    }
]
const listaproductos = document.getElementById("listaproductos")
for (let i = 0; i < productos.length; i++) {
    const producto = document.createElement("p")

    producto.textContent = `${productos[i].nombre} - s/. ${productos[i].precio}`

    listaproductos.appendChild(producto)
}