var fs = require('fs');
var data;

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "js/books.json", true);
oReq.send();

function reqListener(e) {
    data = JSON.parse(this.responseText);
    console.log(data[0].book1);
}