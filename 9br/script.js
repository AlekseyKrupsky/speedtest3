
var cl = console.log;
var pI = parseInt;

var body = $('body');

var dX;
var dY;
var move = false;
body.on('mousedown','.crop',function (ev) {
    dX = ev.pageX-parseInt($(this).css('left'));
    dY = ev.pageY-parseInt($(this).css('top'));
    move = true;
});

addEventListener('mousemove',function (ev) {
    if(move) {
        $('.crop').css({
            left:ev.pageX-dX,
            top:ev.pageY-dY
        })

        $('#x').val(ev.pageX-dX);
        $('#y').val(ev.pageY-dY);
    }
});

body.on('mouseup','.crop',function (ev) {
    move = false;
});