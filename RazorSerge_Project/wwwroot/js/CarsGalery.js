document.addEventListener("DOMContentLoaded", function () {
    var size1 = 200;

    var carsData = [
        { caption: "Tesla Car", path: "/Images/1.jpg", size: size1 },
        { caption: "Ferrari", path: "/Images/2.jpg", size: size1 },
        { caption: "Suzuki", path: "/Images/3.jpg", size: size1 },
        { caption: "Smart", path: "/Images/4.jpg", size: size1 },
        { caption: "Hyundai", path: "/Images/5.jpg", size: size1 },
        { caption: "BMW", path: "/Images/6.jpg", size: size1 }
    ];

    function showTableHeader(arrData) {
        var TableHeader = "<table> <tr>";
        for (var i = 0; i < arrData.length; i++) {
            TableHeader += "<th>" + arrData[i].caption + "</th>";
        }
        TableHeader += "</tr>";
        return TableHeader;
    }

    function CreateTextAndImageTable2(arrData) {
        var tbl = showTableHeader(arrData) + " <tr>";
        for (var i = 0; i < arrData.length; i++) {
            tbl += "<td><img src='" + arrData[i].path + "' width='" + arrData[i].size + "' /><br>";
            tbl += "<button onclick='increaseSize(" + i + ")'>+</button>";
            tbl += "<button onclick='decreaseSize(" + i + ")'>-</button></td>";
        }
        tbl += "</tr></table>";
        return tbl;
    }

    document.getElementById("tbl3").innerHTML = CreateTextAndImageTable2(carsData);

    window.increaseSize = function (index) {
        carsData[index].size += 10;
        updateTable();
    }

    window.decreaseSize = function (index) {
        carsData[index].size -= 10;
        updateTable();
    }

    function updateTable() {
        document.getElementById("tbl3").innerHTML = CreateTextAndImageTable2(carsData);
    }
});
