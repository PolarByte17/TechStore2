// se encierra en corchetes para encajar todo el array
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

for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre, productos[i].precio, productos[i].categoria);
}