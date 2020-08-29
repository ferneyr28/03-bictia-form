let formulario = document.getElementById("formulario");

formulario.onsubmit = function(e){
    e.preventDefault();
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let clave = document.getElementById("clave");
    let edad = document.getElementById("edad");
    let tYc = document.getElementById("tYc");
    let mensajeNombre = document.getElementById('mensajeAlertaNombre');
    //console.log(name.value);
    res(nombre, mensajeNombre);
    res(apellido, mensajeNombre);
    res(correo, mensajeNombre);
    res(clave, mensajeNombre);
    res(edad, mensajeNombre);
    inputCheck(tYc);

    if(res(nombre) && res(apellido) && res(correo) && res(clave) && res(edad) && inputCheck(tYc)){
        swal("Muy Bien", "Registro exitoso", "success");
        setTimeout(function(){
            window.location.href = "https://ferneyr28.github.io/Bictia-JS-II/";
        }, 2000)
    }

    
}

function res(campo){
    if(campo.value === ''){
        console.log(campo.value);
        mensaje(campo, 1);
        swal("Error", "Debe llenar el campo "+ campo.id, "error");
    }else {
        mensaje(campo, 0);
        return true;
    }
}

function inputCheck(campo) {
    if(!campo.checked ){
        mensaje(campo, 1);
        swal("Error", "Debe aceptar los terminos "+ campo.id, "error");
    }else {
        mensaje(campo, 0);
        return true;
    }
}

function mensaje(campo, alerta) {
    let estilo = document.getElementById('mensaje_alerta_'+campo.id);
    if(alerta){
        estilo.innerText = "Por favor llena el campo "+ campo.id; 
    }else{
        estilo.innerText = '';
    }
    
}