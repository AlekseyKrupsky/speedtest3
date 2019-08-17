$('input').change(function () {

    var red = $('#red').val();
    var green = $('#green').val();
    var blue = $('#blue').val();

    $('.slider').css('background','rgb('+red+','+green+','+blue+')');

});