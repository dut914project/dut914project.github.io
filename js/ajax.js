
var xmlhttp;
function loadJSON(sendJSON,cfunc) {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = cfunc;
    xmlhttp.open("POST", "http://192.168.1.57:8080/user_information/ConnectToFuping", true);//待修改成正确的地址
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(sendJSON);
}
function testAjax() {
    loadJSON(function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("test").innerHTML = "Ajax success";
        }
    });
}
function test(msg) {
    alert(msg)
}
function JSONBuilder(orderCode, msg) {
    sendJSON = {
        "orderCode": orderCode,
        "msg": msg
    };
    return sendJSON;
}
function getHelpList() {
    console.info("run get Help List");
    sendJSON = JSONBuilder(1110, "msg from getHelpList");
    loadJSON(sendJSON,function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.info(xmlhttp.responseText)
            responseJSON = JSON.parse(xmlhttp.responseText);
            if (responseJSON.stateCode == 200) {
                document.getElementById("listBody").innerHTML = "";//clear old data
                for (item in responseJSON.data) {
                    num=parseInt(item)+1
                    document.getElementById("listBody").innerHTML += '<tr>' +
                        '<td>' + num + '</td>' +
                        '<td><a href="list2.html" >' + responseJSON.data[item].户主id + '</a></td>' +
                        '<td><a href="list2.html" >' + responseJSON.data[item].户主姓名 + '</a></td>' +
                        '<td>' + responseJSON.data[item].户码 + '</td>' +
                        '<td>' + responseJSON.data[item].贫困原因 + '</td>' +
                        '<td>' + responseJSON.data[item].农户属性 + '</td>' +
                        '<td>' + responseJSON.data[item].联系电话 + '</td>' +
                        '<td>' + responseJSON.data[item].家庭住址 + '</td>' +
                        '</tr>'
                }
            }

        }
    });
}