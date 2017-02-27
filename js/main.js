$("#submit").click(function(){
//para borrar los spans cada vez que se da click en registrar
        var spans = $('span');
        for(var i = 0; i < spans.length; i++){
            spans[i].remove(spans[i]);
        }
//-- Llamando funciones:
    validateName();
    validateLastName();
    validateEmail();
    validatePassword();
    validateSelect();
});
//------------------------------ValidateForm------------------------------ 
//-- Funcion que valida el nombre:
function validateName(evt){
    var nombre = $('#name').val();
    var numero = (/[0-9]/g).test(nombre);
        if(numero == true){
            $('.name-container').append('<span>Escriba sólo letras en nombre</span>');
        }else if ( /[a-z]/.test( nombre[0])){
            $('.name-container').append('<span>Nombre debe comenzar con mayúsucula</span>');
        }
}
//-- Funcion que valida el apellido:
function validateLastName(evt){
    var apellido = $('#lastname').val();
    var numero2 = (/[0-9]/g).test(apellido);
        if(numero2 == true){
            $('.lastname-container').append('<span>Escriba sólo letras en apellido</span>');
        }else if ( /[a-z]/.test( apellido[0])){
            $('.lastname-container').append('<span>Nombre debe comenzar con mayúsucula</span>');
        }
}
//-- Funcion que valida el e-mail:
function validateEmail(evt){
    var correo = $('#input-email').val();
    var expresion=/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
        if(!expresion.test(correo)){
            $('.email-container').append('<span>Email inválido</span>');
        }
}
//-- Funcion que valida la contraseña:
function validatePassword(evt){
    var contrasenia = $('#input-password').val();
    if(contrasenia == "098754" || contrasenia == "123456"){
        $('.password-container').append('<span>Contraseña no válida</span>');
    }else if(contrasenia.length<6){
        $('.password-container').append('<span>La contraseña debe tener al menos 6 caracteres</span>');
    }
}
//-- Funcion que valida el selector:
function validateSelect(){
    var selectBici = $('select')[0].selectedIndex;
    if(selectBici==0){
        $('.select-container').append('<span>Seleccione un tipo de bici</span>');
    }
}
