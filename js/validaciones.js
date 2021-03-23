function campoRequerido(input) {
    // console.log("Se perdio el foco");
    // console.log(input)
    // let input = document.querySelector('#nombre');
    if (input.value.trim() === "") {
        input.className = "form-control is-invalid";
        return false
    } else {
        input.className = "form-control is-valid"
        return true
    }
}

function validarMail(email) {
    // mitremauricio@gmail.com
    let expresion = /\w+@\w+\.[a-z]{2,}$/;
    if (email.value.trim() != '' && expresion.test(email.value)) {
        email.className = 'form-control is-valid';
        return true
    } else {
        email.className = "form-control is-invalid";
        return false
    }
}

function validarNumeros(numero) {
    // isNaN('entrada') is not a number , devuelve un T or F
    // ! not cambia T a F y viceversa 
    // console.log(numero)
    if (numero.value.trim() != '' && !isNaN(numero.value)) {
        numero.className = 'form-control is-valid';
        return true
    } else {
        numero.className = "form-control is-invalid";
        return false
    }
}

let checkTerminos = document.getElementById('checkTerminos')

checkTerminos.addEventListener('change', validarTerminos);

function validarTerminos() {
    // console.log('desde la funcion validar terminos')
    if (checkTerminos.checked == true) {
        checkTerminos.className = 'form-control is-valid';
        return true
    } else {
        checkTerminos.className = 'form-control is-invalid';
        return false
    }
}

function validarGeneral(event) {
    event.preventDefault();
    console.log('funciona flaco')
    // Volver a validar los campos
    if (campoRequerido(document.getElementById('nombre')) === true &&
        validarMail(document.getElementById('email')) === true &&
        validarNumeros(document.getElementById('telefono')) === true &&
        validarTerminos()) {
        // mostrar cartel con campos correctos
        enviarMail()
    } else {
        // mostrar cartel con campos incorrectos
        console.log('Datos incorrectos')
    }
}

function enviarMail(){
    emailjs.send("service_6s5k39f","template_7p5v3hx",{
        from_name: document.getElementById('nombre').value,
        to_name: "Administrador",       
        message: `Email: ${document.getElementById('email').value} - Telefono: ${document.getElementById('telefono').value} - 
        Consulta: `,
        }).then(function (response){
            console.log(response)
            let alerta = document.getElementById('exito')
            alerta.className = 'alert alert-success mt-4'

            document.getElementById()
        }, function (error){
            console.log(error);
           document.getElementById('respuesta').className = "alert alert-danger mt-4"
        })

}