//variables
const inputs = [...document.getElementsByClassName(".input")];
const checkoutInfo = document.querySelector(".checkout-info");
const checkoutTotal = document.querySelector(".checkout-total");
const retiroLocalBtn = document.querySelector("#retiroPorLocal");
const envioBtn = document.getElementById("envioDomicilio");
const infoExtra = document.querySelector(".info-extra");
const form = document.querySelector(".formularioCompra");
const email = document.querySelector("#email");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const dni = document.querySelector("#dni");
const telefono = document.querySelector("#telefono");
const calle = document.querySelector("#calle");
const numeracion = document.querySelector("#numeracion");

//COMPRA
let compraRealizada = localStorage.getItem("carroCompras") ? JSON.parse(localStorage.getItem("carroCompras")) : [];



console.log(compraRealizada)
const productosComprados = () => {
    compraRealizada.forEach((producto) => {
        let div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
        <div>
            <h3>${producto.nombre}</h4>
            <h4>$ ${producto.precio}</h5>
            <h5>Cantidad: ${producto.cantidad}</p>
        </div>
        `;
        checkoutInfo.appendChild(div);
    })
}

let sumaFinal = 0;
let costoEnvio = 350;
const precioFinal = () => {
    compraRealizada.map(prod => {
        sumaFinal += prod.precio * prod.cantidad;
    });
    checkoutTotal.innerText = sumaFinal;
    return sumaFinal
}

const realizarCompra = () => {
    productosComprados();
    precioFinal();
}

//metodo de entrega
const formaEntrega = () => {
    envioBtn.addEventListener("click", () => {
        if (envioBtn.checked) {
            infoExtra.innerHTML = `
            <h2 class="checkout-subtitle">Dirección de Envío</h2>
				<div class="mb-3 form-control">
					<label for="calle" class="form-label">Calle*</label>
					<input type="text" name="street" id="calle" class="input" required>
					<i class="fa-regular fa-circle-check"></i>
					<i class="fa-regular fa-circle-xmark"></i>
					<small>Error message</small>
			    </div>
			    <div class="mb-3 form-control">
				    <label for="numeracion" class="form-label">Número*</label>
					<input type="text" name="number" maxlength="5" id="numeracion" class="input" required>
					<i class="fa-regular fa-circle-check"></i>
					<i class="fa-regular fa-circle-xmark"></i>
					<small>Error message</small>
                </div>
                <p> Costo de envio: $350</p>
            `;
            let nuevaSumaFinal = sumaFinal += costoEnvio;
            checkoutTotal.innerText = nuevaSumaFinal;
        }
    });

    retiroLocalBtn.addEventListener("click", () => {
        if (retiroLocalBtn.checked) {
            infoExtra.innerHTML = "";
            let nuevaSumaFinalDos = sumaFinal -= costoEnvio;
            checkoutTotal.innerText = nuevaSumaFinalDos;
        }
    });
}

//validacion del formulario
const validateForm = () => {
    form.noValidate = true;
    form.addEventListener("submit", e => {
        e.preventDefault();	
        inputs.forEach(input => {
            checkInputs(input);
            console.log(inputs._prototye_)
        });
        if (form.checkValidity()) {
            Swal.fire({
                title: "Te estamos redirigiendo a Mercado Pago",
                text: "¡Gracias por elegirnos!",
                button: false
            }).then(setTimeout(() => {
                mercadopago();
            }, 3000));
        }
    });
    inputs.forEach(input => {
        input.addEventListener("blur", () => {
            checkInputs(input);
        });
    });
}

const checkInputs = input => {
    //variables
    const emailValue = email.value.trim();
    const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    const dniValue = dni.value.trim();
    const telefonoValue = telefono.value.trim();
    const calleValue = calle.value.trim();
    const numeroValue = numero.value.trim();

    //regex
    const lettersPattern = /^[A-ZÀ-Ú]+$/i;
    const numbersPattern = /^[0-9]+$/;

    //logic
    switch (input) {
        case email:
            if (emailValue === "") {
                setErrorFor(email, "Este campo es obligatorio.");
            } else if (!isEmail(emailValue)) {
                setErrorFor(email, "Introduzca un email válido.");
            } else {
                setSuccessFor(email);
            }
            break;

        case nombre:
            if (nombreValue === "") {
                setErrorFor(nombre, "Este campo es obligatorio.");
            } else if (!lettersPattern.test(nombreValue)) {
                setErrorFor(nombre, "Introduzca un nombre válido.");
            } else {
                setSuccessFor(nombre);
            }
            break;

        case apellido:
            if (apellidoValue === "") {
                setErrorFor(apellido, "Este campo es obligatorio.");
            } else if (!lettersPattern.test(apellidoValue)) {
                setErrorFor(apellido, "Introduzca un apellido válido.");
            } else {
                setSuccessFor(apellido);
            }
            break;

        case dni:
            if (dniValue === "") {
                setErrorFor(dni, "Este campo es obligatorio.");
            } else if ((!numbersPattern.test(dniValue)) || (dniValue.length < 6)) {
                setErrorFor(dni, "Introduzca un documento válido.");
            } else {
                setSuccessFor(dni);
            }
            break;
            
        case telefono:        
            if (telefonoValue === "") {
                setErrorForTelefono(telefono, "Este campo es obligatorio.");
            } else if ((!numbersPattern.test(telefonoValue)) || (telefonoValue.length < 8)) {
                setErrorForTelefono(telefono, "Introduzca un celular válido.");
            } else {
                const formControl = telefono.parentElement.parentElement;
                formControl.className = "form-control success";
            }
            break;

        case calle:
            if (calleValue === "") {
                setErrorFor(calle, "Este campo es obligatorio.");
            } else if (!lettersPattern.test(calleValue)) {
                setErrorFor(calle, "Introduzca una calle válida.");
            } else {
                setSuccessFor(calle);
            }
            break;

        case numeracion: 
            if (numeracionValue === "") {
                setErrorFor(numeracion, "Este campo es obligatorio.");
            } else if (!numeracionsPattern.test(numeracionValue)) {
                setErrorFor(numeracion, "Introduzca un número válido.");
            } else {
                setSuccessFor(numeracion);
            }
            break;

        default: 
            console.log("Switch error");
            break;
    }
}

//validate email
const isEmail = email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

//success-error messages
const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

const setSuccessFor = input => {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

const setErrorForTelefono = (input, message) => {
    const formControl = input.parentElement.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

//payment
const mercadopago = async () => {
    const carritoMap = compraRealizada.map(item => {
        let newItem =     
        {
            title: item.title,
            description: "",
            picture_url: item.image,
            category_id: item.id,
            quantity: item.amount,
            currency_id: "ARS",
            unit_price: item.price
        }
        return newItem;
    });

    try {
        let response = await fetch("https://api.mercadopago.com/checkout/preferences", {
            method: "POST",
            headers: {
                Authorization: "Bearer TEST-6296233006857925-060821-f03fa770269b05fac825bb2edd76f32f-46022354"
            },
            body: JSON.stringify({
                items: carritoMap,
                back_urls: {
                    "success": "http://127.0.0.1:5500/index.html",
                    "failure": "http://127.0.0.1:5500/index.html",
                    "pending": "http://127.0.0.1:5500/index.html"
                },
                auto_return: "approved"
            })
        });
        let data = await response.json();
        window.open(data.init_point, "_self");
    } catch (error) {
        console.log(error);
    }
}

//execution
realizarCompra();
formaEntrega();
validateForm();