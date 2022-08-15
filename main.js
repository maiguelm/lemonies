const productos = [];
const saboresTortitas = ["lemon pie", "coco", "valeria", "ricota"];
const carrito = [];
const usuario = [];


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("carroCompras")){
        let carro = JSON.parse(localStorage.getItem("carroCompras"))
        console.log(carro);
        enElCarrito();
    }
}) 


class Pasteleria {
	constructor(id, imagen, nombre, precio, descripcion, cantidad){
        this.id = id;
        this.imagen = imagen;
		this.nombre = nombre.toUpperCase();
		this.precio = parseFloat(precio);
        this.descripcion = descripcion;
        this.cantidad = cantidad
	}
	mostrarPasteleria(){
		alert(this.nombre + " $ " +this.precio);
	}
}

class CajaTortas extends Pasteleria {
    constructor(id, imagen, nombre, precio, descripcion,cantidad, sabor){
        super(id, imagen, nombre, precio, descripcion, cantidad)
        this.sabor = sabor;
    }
}



const croissant = new Pasteleria (1,'./images/croissant.jpg', "Croissant", 250, "Un verdadero Croissant de manteca, con un proceso de elaboracion de tres días", 1);
const panChocolat = new Pasteleria (2, "./images/pain.jpg","Pan Chocolate", 280, "Un delicioso Pain Aux Chocolat, una especialidad verdaderamente hojaldrada", 1);
const chausson = new Pasteleria (3, "./images/chausson.jpg" ,"Chausson", 350, "Exisita Vionnoserie rellena de una compoa de manzanas y canela", 1);
const balcarce = new Pasteleria (4, "./images/balcarce.jpg","Postre Balcarce", 1250, "Clásico postre elaborado con merengue, crema de leche,dulce de leche, piononos y nueces. Extra-sweet!", 1);
const alfajor = new Pasteleria (5, "./images/alfajor.jpg","Alfajor", 300, "Otro clásico: el alfajor marplatense3, relleno de dulce de leche y bañado en chocolate cobretura semi-amargo", 1);
const cajaTortitas = new CajaTortas (6, "./images/cajatortitas.jpg","Caja de Tortitas", 1000, "Exclusiva Caja de Tortitas, de seis unidades a eleccion! Se puede elegir entre varios sabores! ", 1, saboresTortitas);


productos.push(croissant,panChocolat,chausson,balcarce,alfajor,cajaTortitas);
saboresTortitas.push("manzana", "frutilla");


const exhibirPrecios = productos.map ((prod) =>  {
    let exhibicion = prod.nombre + " $" + prod.precio;
    return exhibicion   
}) 

/* for (const nombreProductos of productos){
    console.log(nombreProductos.nombre);
} */

/* console.table(productos);
console.log(saboresTortitas);
 */
/* const nuevosPrecios = productos.map ((aumento) => {
    return {
        nombre: aumento.nombre,
        precio: (aumento.precio * 1.35).toFixed(2)
    }
})

console.log(nuevosPrecios); */


const cartas = document.getElementById("cartas");
const cargaCartas = document.createDocumentFragment();
const contenedorCarrito = document.getElementById("carritoContenedor");
const vaciarCarrito = document.getElementById("vaciar-carrito");
const itemsCarrito = document.getElementById("cart-items");
const precioFinal = document.getElementById("precioTotal");
const cantidad = document.getElementById("cantidad");

productos.forEach((producto) => {
    let carta = document.createElement("div")
    carta.classname = "card h-100";
    carta.innerHTML = `
    <img class="card-img-top" src=${producto.imagen} alt= 'imagen de ${producto.nombre}'>
    <div class="card-body">
        <h3 class="card-title tituloProductos">${producto.nombre}</h3>
        <p class="card-text descripcionProductos">${producto.descripcion}</p>
        <p class="precio">Precio: $ ${producto.precio}</p>
        <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-success btn-large buttonPropiedades" id="agregar${producto.id}" type="button">Agregar al carrito</button>
        </div>
    `;
    cargaCartas.appendChild(carta);
    cartas.appendChild(cargaCartas)


    const botonAgregar = document.getElementById(`agregar${producto.id}`);

    botonAgregar.addEventListener("click", () => {
        agregarAlCarrito(producto.id)
    })

})

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)
    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = productos.find ((prod) => prod.id === prodId);
        carrito.push(item);
    }

    enElCarrito();
/*     console.log(carrito); */
}

const enElCarrito = () => {
    contenedorCarrito.innerHTML = "";

    carrito.forEach((prod) => {
        const div = document.createElement("div")
        div.className = ("productoEnCarrito")
        div.innerHTML =  `
        <p class="pModal">${prod.nombre} </p>
        <p class="pModal">Precio: $ ${prod.precio}</p>
        <p class="pModal">Cantidad: <input id="cantidad-${prod.id}" type="number" value="${prod.cantidad}" min="1" max="1000" step="1" style="color: #000;"/></p>
        <button onclick="sacarCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i>Eliminar</button>
        `
        contenedorCarrito.appendChild(div)   

        let cantidadProductos = document.getElementById(`cantidad-${prod.id}`);
        cantidadProductos.addEventListener("change", (e) => {
            let nuevaCantidad = e.target.value;
            prod.cantidad = nuevaCantidad;
            enElCarrito();
        });

        itemsCarrito.innerText = carrito.length;
        localStorage.setItem("carroCompras", JSON.stringify(carrito));
    })


    precioFinal.innerText = carrito.reduce((acc, prod) => acc + (prod.precio*prod.cantidad), 0);
 
}


const sacarCarrito = (prodId) =>{
    const item = carrito.find ((prod) => prod.id === prodId);
    const i = carrito.indexOf(item);
    carrito.splice(i, 1)
    enElCarrito();
}

vaciarCarrito.addEventListener("click", () =>{
    carrito.length = 0;
    enElCarrito();
})



const botonBanner = document.querySelector(".banner-btn")

botonBanner.addEventListener ("mousedown", () => {
    location.href = "#productos";
})


const formularioNombre = document.querySelector(".nombreForm");
const telefonoFormulario = document.querySelector(".telForm");
const mensajes = document.getElementById("mensajes")

formularioNombre.onchange = function () {
    console.log(formularioNombre.value);
    usuario.push(formularioNombre.value)
}

formularioNombre.addEventListener ("select",(e) =>{
    let comienzo = e.target.selectionStart;
    let fin = e.target.sectionEnd;
    let nombreFinal = formularioNombre.value;
    mensajes.innerHTML = nombreFinal.substring(comienzo, fin);
})

telefonoFormulario.onchange = function () {
    console.log(telefonoFormulario.value);
    usuario.push(telefonoFormulario.value)
}

const openModal = document.querySelector('.abrirCarrito');
const modal = document.querySelector('.miModal');
const closeModal = document.querySelector('.cerrarCarrito');
const modalCarrito = document.querySelector('.modalContenedor')

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});
