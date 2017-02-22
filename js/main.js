$(document).ready(function(){
    $("#submit").click(function(){
        
// Obtener los valores de los Inputs:
        var nombre = $('#name').val();
        var apellido = $('#lastname').val();
        var correo = $('#input-email').val();
        var contrasenia = $('#input-password').val();
        var selectBici = $('select')[0].selectedIndex; 
        
//para borrar los spans cada vez que se da click en registrar
        var spans = $('span');
        for(var i = 0; i < spans.length; i++){
            spans[i].remove(spans[i]);
        }
//------------------------------ValidateForm------------------------------ 
        var numero = (/[0-9]/g).test(nombre);
        if(numero == true){
            $('.name-container').append('<span>Escriba sólo letras en nombre</span>');
        }else if ( /[a-z]/.test( nombre[0])){
            $('.name-container').append('<span>Nombre debe comenzar con mayúsucula</span>');
        }
        var numero2 = (/[0-9]/g).test(apellido);
        if(numero2 == true){
            $('.lastname-container').append('<span>Escriba sólo letras en apellido</span>');
        }else if ( /[a-z]/.test( apellido[0])){
            $('.lastname-container').append('<span>Nombre debe comenzar con mayúsucula</span>');
        }
    // funcion para que el email sea valido (nombre@gmail.com):
        var expresion=/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
        if(!expresion.test(correo)){
            $('.email-container').append('<span>Email inválido</span>');
        }
    // funcion para validar contraseña:
        if(contrasenia == "098754" || contrasenia == "123456"){
            $('.password-container').append('<span>Contraseña no válida</span>');
        }else if(contrasenia.length<6){
            $('.password-container').append('<span>La contraseña debe tener al menos 6 caracteres</span>');
        }
    // funcion para verificar si se hizo la seleccion:
        if(selectBici==0){
           $('.select-container').append('<span>Seleccione un tipo de bici</span>');
        }
    });
});