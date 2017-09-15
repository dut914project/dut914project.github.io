
var xmlhttp;
function loadJSON(url, cfunc) {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = cfunc;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
function testAjax() {
    loadJSON("http://localhost", function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("test").innerHTML = "Ajax success";
        }
    });
}
function test(msg){
    alert(msg)
}
function fillList() {
    for (i = 2; i < 10; i++) {
        document.getElementById("list1").innerHTML += '<tr><td>'+i+'</td>\
    <td><a href="vicePage.html" >15969845</a></td>\
    <td><a href="vicePage.html" >张三</a></td>\
    <td>78</td>\
    <td>没有钱</td>\
    <td>低保贫困户</td>\
    <td>15689754562</td>\
    <td>地球村</td>\
  </tr>';
    }
}