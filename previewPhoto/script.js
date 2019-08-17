$('input').change(function (ev) {

    var file = ev.target.files[0];
    var reader = new FileReader();

    reader.onload = function (ev) {
        $('img').attr('src',ev.target.result);
        console.log(ev.target.result);
    };

    reader.readAsDataURL(file);

});