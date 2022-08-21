/* const saludar = ()=> {
    let pregunta = prompt("Ingrese su nombre");
    let saludo = `Hola ${pregunta}! Bienvenido/a a Lemonies!`;
    alert(saludo);
} 

saludar() */



/* croissant.mostrarPasteleria();
panChocolat.mostrarPasteleria();
chausson.mostrarPasteleria(); */


/* alert(exhibirPrecios.join("\n")); */
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



