var cv = document.getElementById('cv');
var context = cv.getContext('2d');


context.strokeStyle = 'black';


$('.color').click(function () {
    context.strokeStyle = $(this).attr('id');
    $('.color').removeClass('active');
    $(this).addClass('active');
});

var draw = false;

cv.addEventListener('mousedown',function (ev) {
   var dX = ev.pageX-$(cv).offset().left;
   var dY = ev.pageY-$(cv).offset().top;
    context.beginPath();
    context.moveTo(dX,dY);
    draw = true;

});

addEventListener('mousemove',function (ev) {
    if(draw) {
        context.lineTo(ev.pageX-$(cv).offset().left,ev.pageY-$(cv).offset().top);
        context.stroke();
    }
});

cv.addEventListener('mouseup',function (ev) {
    if(draw) {
        draw=false;
    }
});

$('#size').change(function () {
   var size = $(this).val();
    $('.size').text(size);
    context.lineWidth = size;

});

$('.rubber').click(function () {
    context.strokeStyle = 'white';

    // var dX = ev.pageX-$(cv).offset().left;
    // var dY = ev.pageY-$(cv).offset().top;
    // context.beginPath();
    // context.moveTo(dX,dY);
    // draw = true;
});