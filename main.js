const saludar = ()=> {
    let pregunta = prompt("Ingrese su nombre");
    let saludo = `Hola ${pregunta}! Bienvenido/a a Lemonies!`;
    alert(saludo);
} 

saludar()

class Pasteleria {
	constructor(nombre, precio, relleno){
		this.nombre = nombre.toUpperCase();
		this.precio = parseFloat(precio);
        this.relleno = relleno;
	}
	mostrarPasteleria(){
		alert(this.nombre + " $ " +this.precio);
	}
}

class CajaTortas extends Pasteleria {
    constructor(nombre, precio, relleno, sabor){
        super(nombre, precio, relleno)
        this.sabor = sabor;
    }
}

const productos = [];

const croissant = new Pasteleria ("Croissant", 250, false);
const panChocolat = new Pasteleria ("Pan Chocolate", 280, "chocolate");
const chausson = new Pasteleria ("Chausson", 350, "manzana");
const balcarce = new Pasteleria ("Postre Balcarce", 1250, "dulce de leche, crema y nueces");
const alfajor = new Pasteleria ("Alfajor", 300, "dulce de leche");
const cajaTortitas = new CajaTortas ("Caja de Tortitas", 1000, "ricota, dulce de leche, limon", "lemon pie, coco, valeria, ricota, manzana, frutilla");



/* croissant.mostrarPasteleria();
panChocolat.mostrarPasteleria();
chausson.mostrarPasteleria(); */

productos.push(croissant,panChocolat,chausson,balcarce,alfajor,cajaTortitas);

const exhibirPrecios = productos.map ((prod) =>  {
    let exhibicion = prod.nombre + " $" + prod.precio;
    return exhibicion   
}) 

alert(exhibirPrecios.join("\n"));


for (const nombreProductos of productos){
    console.log(nombreProductos.nombre);
}

console.table(productos);


let valor = 0;

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

console.log(exhibirPrecios)  // es un nuevo array que tiene el nombre del producto y el precio, todo junto como un unico string

const nuevosPrecios = productos.map ((aumento) => {
    return {
        nombre: aumento.nombre,
        precio: (aumento.precio * 1.35).toFixed(2)
    }
})

console.log(nuevosPrecios);