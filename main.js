const saludar = ()=> {
    let pregunta = prompt("Ingrese su nombre");
    let saludo = `Hola ${pregunta}! Bienvenido/a a Lemonies!`;
    alert(saludo);
} 

saludar()

class Facturas {
	constructor(nombre, precio, relleno){
		this.nombre = nombre.toUpperCase();
		this.precio = parseFloat(precio);
        this.relleno = relleno;
	}
	mostrarFacturas(){
		alert(this.nombre + " $ " +this.precio);
	}
}

const productos = [];

const croissant = new Facturas ("Croissant", 250, false);
const panChocolat = new Facturas ("Pan Chocolate", 280, "chocolate");
const chausson = new Facturas ("Chausson", 350, "manzana");

croissant.mostrarFacturas();
panChocolat.mostrarFacturas();
chausson.mostrarFacturas();
productos.push(croissant,panChocolat,chausson);

for (const nombreProductos of productos){
    console.log(nombreProductos.nombre);
}

console.table(productos);

/* for (const croissantPrecio in croissant){
    console.log(croissant[croissantPrecio]);
}

let panChocolatPrecio = "precio" in panChocolat;
let chaussonPrecio = "precio" in chausson; */
let valor = 0;


while(Facturas!="s"){
    switch(Facturas){
         case "croissant":
            console.log("El croissant cuesta $250");
            valor=valor+croissant.precio;
            break;
        case "pan chocolate":
            console.log("El Pain aux chocolat cuesta $280");
            valor=valor+panChocolat.precio;
            break;
        case "chausson":
            console.log("El Chausson aux Pommes cuesta $350");
            valor=valor+chausson.precio;
            break;
        default:
            console.log("No elaboramos aún esa Factura o verifique el valor ingresado");
            break;
    }
    Facturas=prompt("Ingresa el producto y cargalo en el carrito (s-para salir) \ncroissant \npan chocolate \nchausson");
}

/* alert("Total a pagar $ "+valor); */

if (valor == 0){
    alert("Gracias por su visita!");
} else if (valor > 800){
    let descuento = valor * 0.85;
    alert("Ud. recibe un descuento del 15%, por lo que abonará $ " + descuento +"Gracias por su compra!");
} else {
   alert("Total a pagar $ "+valor + ". Gracias por su compra!!");
}