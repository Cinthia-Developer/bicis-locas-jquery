$(document).ready(function(){
    $("#submit").click(function(){
        
// Obtener los valores de los Inputs:
        var name = $('#name').val();
        var lastName = $('#lastname').val();
        var email = $('#input-email').val();
        var password = $('#input-password').val();
        var selectBici = $('select')[0].selectedIndex; 
        
