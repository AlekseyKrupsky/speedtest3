var cal = $('.calendar');
var days = $('.days');
$('input').click(function () {
    cal.css('display','flex');
});

var test = new Date(2019,8,20,17);
var m = test.getMonth();
console.log(new Date(test.setMonth(m)));

var cl = console.log;

var now = new Date();

var year;
var month;
var day;
var longmonth;

var firstweekday;
var number;

show();

function show() {
    year = now.getFullYear();
    month = now.getMonth();
    day = now.getDate();
    longmonth = now.toLocaleString('EN', { month: 'long' });

    firstweekday = new Date(year,month,1).getDay();
    number = 1- firstweekday ;
    $('.month').text(longmonth);
    $('.year').text(year);



    days.text('');
    for(var i = 0; i<6;i++) {
        for(var j = 0; j < 7; j++) {
            var date = new Date(year,month,number);
            var today = '';
            var thismonth = '';

            if(date.getMonth() === month) {
                thismonth='thismonth';
                if(date.getFullYear()===year && date.getDate()===day) {
                    today = 'today';
                }
            }

            days.append('<div data-date="'+number+'/'+(month+1)+'/'+year+'" class="day '+today+' '+thismonth+'">'+date.getDate()+'</div>');
            number++;
        }
    }
}


$('body').on('click','.day',function () {
   var sel = $(this).attr('data-date');
    $('.day').removeClass('selected');
    $(this).addClass('selected');

   $('input').val(sel);
});

$('.left').click(function () {
    month--;
    now = new Date(year,month);
    show();
});

$('.right').click(function () {
    month++;
    now = new Date(year,month);
    show();
});