// const saludar = ()=> {
//     let pregunta = prompt("Ingrese su nombre");
//     let saludo = `Hola ${pregunta}! Bienvenido/a a Lemonies!`;
//     alert(saludo);
// } 

// saludar()

// class Pasteleria {
// 	constructor(nombre, precio, relleno){
// 		this.nombre = nombre.toUpperCase();
// 		this.precio = parseFloat(precio);
//         this.relleno = relleno;
// 	}
// 	mostrarPasteleria(){
// 		alert(this.nombre + " $ " +this.precio);
// 	}
// }

// class CajaTortas extends Pasteleria {
//     constructor(nombre, precio, relleno, sabor){
//         super(nombre, precio, relleno)
//         this.sabor = sabor;
//     }
// }

// const productos = [];

// const croissant = new Pasteleria ("Croissant", 250, false);
// const panChocolat = new Pasteleria ("Pan Chocolate", 280, "chocolate");
// const chausson = new Pasteleria ("Chausson", 350, "manzana");
// const balcarce = new Pasteleria ("Postre Balcarce", 1250, "dulce de leche, crema y nueces");
// const alfajor = new Pasteleria ("Alfajor Marplatense", 300, "dulce de leche");
// const cajaTortitas = new CajaTortas ("Cajita de Tortitas", 1000, "ricota, dulce de leche, limon", "lemon pie, coco, valeria, ricota, manzana, frutilla");



// /* croissant.mostrarPasteleria();
// panChocolat.mostrarPasteleria();
// chausson.mostrarPasteleria(); */

// productos.push(croissant,panChocolat,chausson,balcarce,alfajor,cajaTortitas);

// const exhibirPrecios = productos.map ((prod) =>  {
//     let exhibicion =prod.nombre + " $" + prod.precio + "\n "
//     return exhibicion   
// }) 

// alert(exhibirPrecios);


// for (const nombreProductos of productos){
//     console.log(nombreProductos.nombre);
// }

// console.table(productos);


// let valor = 0;

// while(Pasteleria!="s"){
//     switch(Pasteleria){
//         case "croissant":
//             console.log("El croissant cuesta $250");
//             valor+=croissant.precio;
//             break;
//         case "pan chocolate":
//             console.log("El Pain aux chocolat cuesta $280");
//             valor+=panChocolat.precio;
//             break;
//         case "chausson":
//             console.log("El Chausson aux Pommes cuesta $350");
//             valor+=chausson.precio;
//             break;
//         case "postre balcarce":
//             console.log("El Postre Balcarce cuesta $1.250");
//             valor+=balcarce.precio;
//             break;
//         case "alfajor":
//             console.log("El Alfajor Marplatense cuesta $300");
//             valor+=alfajor.precio;
//             break;
//         case "caja de tortitas":
//             console.log("La caja de tortitas cuesta $1.000");
//             valor+=cajaTortitas.precio;
//             break;
//         default:
//             console.log("No elaboramos aún esa Factura o verifique el valor ingresado");
//             break;
//     }
//     Pasteleria=prompt("Ingresa el producto y cargalo en el carrito (s-para salir) \ncroissant \npan chocolate \nchausson \npostre Balrcarce \nalfajor \ncaja de tortitas");
// }

// if (valor == 0){
//     alert("Gracias por su visita!");
// } else if (valor > 800){
//     let descuento = valor * 0.85;
//     alert("Ud. recibe un descuento del 15%, por lo que abonará $ " + descuento +". Gracias por su compra!");
// } else {
//    alert("Total a pagar $ "+valor + ". Gracias por su compra!!");
// }