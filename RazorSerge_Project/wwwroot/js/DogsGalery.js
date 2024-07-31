
    var dog1 = {
        Name: "standart shnautzer",
    Description: "Ideal companion, smart and active",
    Image: '/Images/Standart-Shnautzer.jpg',
    MoreInfo: 'https://en.wikipedia.org/wiki/Standard_Schnauzer'
      };

    var dog2 = {
        Name: "labrador",
    Description: "helps blind people",
    Image: '/Images/Labrador-Retriever.jpg',
    MoreInfo: "https://www.smallanimalclinic.com/services/dogs/breeds/labrador-retriever"
      };
    var dog3 = {
        Name: "german sheperd", Description: "watch dog",
    Image: '/Images/German-Shepherd.jpg',
    MoreInfo: "https://www.akc.org/dog-breeds/german-shepherd-dog/"
      };
    var dog4 = {
        Name: "border collie",
    Description: "smart and kind",
    Image: '/Images/Border-Collie.jpg',
    MoreInfo: "http://www.vetstreet.com/dogs/border-collie#1_izc4ixoo"
      };




    //===============
    var dogsArray = [dog1, dog2, dog3,dog4];
    var header = ["Name", "description", "picture", "link to more info"];
    //=======================
    function showTableHeader(header) {
          var TableHeader = "<table border='1' cellpadding='0' cellspacing='0'><tr>";
        for (var i = 0; i < header.length; i++) {
            TableHeader += "<th width='25%'>" + "  " + header[i] + "  " + "</th>";
          }
        TableHeader += "</tr>";//</table>";
    return (TableHeader);
      }
    //document.write(showTableHeader);
    function showTable(dogsArray) {

        tbl = showTableHeader(header);

    for (var i = 0; i < dogsArray.length; i++) {
        tbl += "<tr align='center'><td>" + "  " + dogsArray[i].Name + "  " + "</td><td>"
        + dogsArray[i].Description + "</td><td>" + "<img src='" + dogsArray[i].Image +
        "' width='200' />" + "</td><td><a href='" +
        dogsArray[i].MoreInfo + "'/a> look more info </td><tr>";
          }
    tbl += "</table>";
console.log(tbl);
return tbl;
      }
console.log("test");
document.write(showTable(dogsArray));





