/* const saludar = ()=> {
    let pregunta = prompt("Ingrese su nombre");
    let saludo = `Hola ${pregunta}! Bienvenido/a a Lemonies!`;
    alert(saludo);
} 

saludar() */

class Pasteleria {
	constructor(id, imagen, nombre, precio, descripcion){
        this.id = id;
        this.imagen = imagen;
		this.nombre = nombre.toUpperCase();
		this.precio = parseFloat(precio);
        this.descripcion = descripcion;
	}
	mostrarPasteleria(){
		alert(this.nombre + " $ " +this.precio);
	}
}

class CajaTortas extends Pasteleria {
    constructor(id, imagen, nombre, precio, descripcion, sabor){
        super(id, imagen, nombre, precio, descripcion, sabor)
        this.sabor = sabor;
    }
}

const productos = [];
const saboresTortitas = ["lemon pie", "coco", "valeria", "ricota"];

const croissant = new Pasteleria (1,'./images/croissant.jpg', "Croissant", 250, "Un verdadero Croissant de manteca, con un proceso de elaboracion de tres días");
const panChocolat = new Pasteleria (2, "./images/pain.jpg","Pan Chocolate", 280, "Un delicioso Pain Aux Chocolat, una especialidad verdaderamente hojaldrada");
const chausson = new Pasteleria (3, "./images/chausson.jpg" ,"Chausson", 350, "Exisita Vionnoserie rellena de una compoa de manzanas y canela");
const balcarce = new Pasteleria (4, "./images/balcarce.jpg","Postre Balcarce", 1250, "Clásico postre elaborado con merengue, crema de leche,dulce de leche, piononos y nueces. Extra-sweet!");
const alfajor = new Pasteleria (5, "./images/alfajor.jpg","Alfajor", 300, "Otro clásico: el alfajor marplatense3, relleno de dulce de leche y bañado en chocolate cobretura semi-amargo");
const cajaTortitas = new CajaTortas (6, "./images/cajatortitas.jpg","Caja de Tortitas", 1000, "Exclusiva Caja de Tortitas, de seis unidades a eleccion! Se puede elegir entre varios sabores! ", saboresTortitas);



/* croissant.mostrarPasteleria();
panChocolat.mostrarPasteleria();
chausson.mostrarPasteleria(); */

productos.push(croissant,panChocolat,chausson,balcarce,alfajor,cajaTortitas);
saboresTortitas.push("manzana", "frutilla");


const exhibirPrecios = productos.map ((prod) =>  {
    let exhibicion = prod.nombre + " $" + prod.precio;
    return exhibicion   
}) 

/* alert(exhibirPrecios.join("\n")); */


for (const nombreProductos of productos){
    console.log(nombreProductos.nombre);
}

console.table(productos);
console.log(saboresTortitas);

/* let valor = 0;

function carritoCompras() {
    while (Pasteleria != "S") {
        switch (Pasteleria) {
            case "CROISSANT":
                console.log("El croissant cuesta $250");
                valor += croissant.precio;
                break;
            case "PAN CHOCOLATE":
                console.log("El Pain aux chocolat cuesta $280");
                valor += panChocolat.precio;
                break;
            case "CHAUSSON":
                console.log("El Chausson aux Pommes cuesta $350");
                valor += chausson.precio;
                break;
            case "POSTRE BALCARCE":
                console.log("El Postre Balcarce cuesta $1.250");
                valor += balcarce.precio;
                break;
            case "ALFAJOR":
                console.log("El Alfajor Marplatense cuesta $300");
                valor += alfajor.precio;
                break;
            case "CAJA DE TORTITAS":
                console.log("La caja de tortitas cuesta $1.000");
                valor += cajaTortitas.precio;
                break;
            default:
                console.log("No elaboramos aún esa Factura o verifique el valor ingresado");
                break;
        }
        while (Pasteleria == "CAJA DE TORTITAS"){
            let saborElegido = prompt("Seleccione entre alguna de las siguientes opciones: \nlemon pie \ncoco \nvaleria \nricota \nmanzana \nfrutilla").toUpperCase();
            console.log("El sabor elegido para sus tortitas es " + saborElegido);
            break
        }
        Pasteleria = prompt("Ingresa el producto y cargalo en el carrito (s-para salir) \ncroissant \npan chocolate \nchausson \npostre Balrcarce \nalfajor \ncaja de tortitas").toUpperCase();
    }
}

carritoCompras();

let nuevaBusqueda = prompt("Que otro producto desea buscar?").toUpperCase();
let otroProducto = productos.some (producto =>producto.nombre === nuevaBusqueda);


if (otroProducto === false){
   alert("No elaboramos el producto solicitado o verifique el valor ingresado");
} else{
    alert("Lo que Ud. pide está en stock. Aguardamos su compra");
}

if (valor == 0){
    alert("Gracias por su visita!");
} else if (valor > 1800){
    let descuento = valor * 0.85;
    alert("Ud. recibe un descuento del 15%, por lo que abonará $ " + descuento +". Gracias por su compra!");
} else {
   alert("Total a pagar $ "+valor + ". Gracias por su compra!!");
}

console.log(exhibirPrecios)  // es un nuevo array que tiene el nombre del producto y el precio, todo junto como un unico string */

const nuevosPrecios = productos.map ((aumento) => {
    return {
        nombre: aumento.nombre,
        precio: (aumento.precio * 1.35).toFixed(2)
    }
})

console.log(nuevosPrecios);


let cartas = document.getElementById("cartas");
const fragment = document.createDocumentFragment();

for (const producto of productos){
    let carta = document.createElement("div")
    carta.classname = "card h-100";
    carta.innerHTML = `
    <img class="card-img-top" src=${producto.imagen}>
    <div class="card-body">
        <h3 class="card-title tituloProductos">${producto.nombre}</h3>
        <p class="card-text descripcionProductos">${producto.descripcion}</p>
        <p class="precio">Precio: $ ${producto.precio}</p>
        <div class="d-grid gap-2 col-6 mx-auto">
            <a href="#" class="btn btn-success btn-large buttonPropierties" type="button">Agregar al carrito</a>
        </div>
    `;
    fragment.appendChild(carta);
}
cartas.appendChild(fragment)