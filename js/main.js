// funcion para crear span:
function showMessage(_idInput, _mensaje){
    var elemento = document.getElementById(_idInput);
    var span = elemento.parentNode.getElementsByTagName("span");
    if (span.length === 0) {
        span = document.createElement("span");
        elemento.parentNode.appendChild(span);
    }
    span.innerHTML = _mensaje;
}
// funcion reutilizable para validar y convertir a mayuscula la primera letra:
function firstNameChanges(_variable, _idInput, _mensaje){
    var _variable = document.getElementById(_idInput);
    _variable.value = _variable.value.charAt(0).toUpperCase() + _variable.value.slice(1);
    var numero = (/[0-9]/g).test(_variable.value);
    if(numero == true){
        showMessage(_idInput, "No se permiten números en el " + _mensaje);
    }
}
function name(){
    firstNameChanges("nombreElemento", "name", "nombre");
}
function lastName(){
    firstNameChanges("apellidoElemento", "lastname", "apellido");
}
// funcion para que el email sea valido (nombre@gmail.com):
function validateEmail(){
    var correo = document.getElementById("input-email");
    var expresion=/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    if(!expresion.test(correo)){
        showMessage("input-email", "Correo inválido.");
    }
}
// funcion para validar contraseña:
function validatePassword(){
    var password = document.getElementById("input-password").value;
    if(password == "098754" || password == "123456"){
        showMessage("input-password", "Contraseña no admitida.");
    }else if(password.length<6){
        showMessage("input-password", "Su contraseña debe tener al menos 6 caractéres.");
    }
}
// funcion para verificar si se hizo la seleccion:
function selectOption(){
    var seleccion = document.getElementsByClassName("form-control")[4].value;
    if(seleccion==0){
       showMessage("selector", "Debe seleccionar al menos una opción.");
    }
}
    var mensajeTotal = document.getElementById("boton");
    var div = document.createElement("div");
    mensajeTotal.parentNode.appendChild(div);
// funcion que da apariencia de validacion mostrando un mensaje.
function restaurarForm(){
        var nombre = document.getElementById("name").value;
        var apellido = document.getElementById("lastname").value;
        var correo = document.getElementById("input-email").value;
        var contrasenia = document.getElementById("input-password").value;
        var seleccion = document.getElementsByClassName("form-control")[4].value;
    
    if(nombre=="" || apellido=="" || correo=="" || contrasenia=="" || seleccion==0){
        div.innerHTML = "Debe llenar todos los campos";
        div.style.color="red";
        div.style.fontSize = "20px";
    }else{
        document.getElementById("formulario").reset();
        div.innerHTML = "Ya esta registrado";
        div.style.color="green";
        div.style.fontSize = "30px";
    }
}
// funcion principal:
function validateForm(){
    name();
    lastName();
    validateEmail();
    validatePassword();
    selectOption();
    restaurarForm();
}