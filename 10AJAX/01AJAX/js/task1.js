var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var toDo = JSON.parse(xmlhttp.responseText);
        var out = '';
        for(var i = 0; i < toDo.length; i++) {
            out += '<div> ' +toDo[i].id + '. ' +
            toDo[i].todo + '</div>';
        }
        document.querySelector('[class="first"]').innerHTML = out;
    }
};

var xmlhttp2 = new XMLHttpRequest();
xmlhttp2.onreadystatechange = function() {
    if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
        var toDo = JSON.parse(xmlhttp2.responseText);
        var out = '';
        for(var i = 0; i < toDo.length; i++) {
            out += '<div> ' +toDo[i].id + '. ' +
            toDo[i].todo + '</div>';
        }
        document.querySelector('[class="second"]').innerHTML = out;
    }
};

var xmlhttp3 = new XMLHttpRequest();
xmlhttp3.onreadystatechange = function() {
    if (xmlhttp3.readyState == 4 && xmlhttp3.status == 200) {
        var toDo = JSON.parse(xmlhttp3.responseText);
        var out = '';
        for(var i = 0; i < toDo.length; i++) {
            out += '<div> ' +toDo[i].id + '. ' +
            toDo[i].todo + '</div>';
        }
        document.querySelector('[class="third"]').innerHTML = out;
    }
};

var xmlhttp4 = new XMLHttpRequest();
xmlhttp4.onreadystatechange = function() {
    if (xmlhttp4.readyState == 4 && xmlhttp4.status == 200) {
        var toDo = JSON.parse(xmlhttp4.responseText);
        var out = '';
        for(var i = 0; i < toDo.length; i++) {
            out += '<div> ' +toDo[i].id + '. ' +
            toDo[i].todo + '</div>';
        }
        document.querySelector('[class="forth"]').innerHTML = out;
    }
};

xmlhttp.open("GET", "app/data1.json", true);
xmlhttp2.open("GET", "app/data2.json", true);
xmlhttp3.open("GET", "app/data3.json", true);
xmlhttp4.open("GET", "app/data4.json", true);

setTimeout(function () {
  xmlhttp.send();
}, 1000);

setTimeout(function () {
  xmlhttp2.send();
}, 2000);

setTimeout(function () {
  xmlhttp3.send();
}, 3000);

setTimeout(function () {
  xmlhttp4.send();
}, 4000);
