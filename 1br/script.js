var file;

var countries = [];

$('input').change(function (e) {
    file = e.target.files[0];
    var reader = new FileReader();
    var rows;
    reader.onload = function (ev) {
      rows = ev.target.result.split('\n');

        var max = 0;
        for(var i=0;i<rows.length;i++) {
            var row = rows[i].split(',');
            if(!countries[row[0]]) {
                countries[row[0]] = [];
                $('#countries').append('<option value="' + row[0] + '">' + row[0] + '</option>');
            }

            if(max < parseInt(row[3]) && parseInt(row[3]) < 1990) max= parseInt(row[3]);
            if(max < parseInt(row[4]) && parseInt(row[4]) < 1990) max= parseInt(row[4]);
            if(max < parseInt(row[5]) && parseInt(row[5]) < 1990) max= parseInt(row[5]);

            countries[row[0]].push([row[1],row[2],row[3],row[4],row[5]]);

        }

        console.log(max);
    };
    reader.readAsText(file);

});

var svg = document.getElementById('svg');




$('select').change(function () {
    svg.innerHTML = '';
    var country = $(this).val();
    $('#country').text(country);

    var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', 50);
    line.setAttribute('x2', 50);
    line.setAttribute('y1', 0);
    line.setAttribute('y2', 600);
    line.setAttribute('stroke', 'gray');
    svg.appendChild(line);

    line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', 50);
    line.setAttribute('x2', 1050);
    line.setAttribute('y1', 600);
    line.setAttribute('y2', 600);
    line.setAttribute('stroke', 'gray');
    svg.appendChild(line);



chart(country,2,'red');
chart(country,3,'blue');
chart(country,4,'green');

});

function chart(country,num,color) {
    var x1 = 50;
    var y1 = 0;
    var y2 = 0;

    countries[country].forEach(year => {
        var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');

        if (y1 === 0) {
            y1 = 600 - parseFloat(year[num]) * 2;
        }
        else
            line.setAttribute('stroke-width', 2);
        {
            if (y2 === 0) {
                y2 = 600 - parseFloat(year[num]) * 2;
                line.setAttribute('x1', x1);
                line.setAttribute('x2', x1 + 37);
                line.setAttribute('y1', y1);
                line.setAttribute('y2', y2);
                line.setAttribute('stroke', color);
                line.setAttribute('stroke-width', 2);
                x1 += 37;
                svg.appendChild(line);

                y1 = y2;
                y2 = 0;

            }
        }

    });
}