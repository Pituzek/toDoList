const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const app = express();

app.set('view engine', 'ejs');


app.get("/", function(req, res) {

    //res.write("<p>Hello<br>");

    var today = new Date();
    var currentDay = today.getDay();;
    //var day = "";
    var dayName = nameOfDay(currentDay);

    //if (currentDay === 6 || currentDay === 0) {

        //res.sendFile("<h1>Yay it's the weekend!</h1>");

        //day = "Weekend"

    //} else {

        //res.write("<p>It is not the weekend.</p>");
        //res.write("<h1>Boo! I have to work!</h1>");

        //res.sendFile(__dirname + "/index.html");

        //day = "Weekday";
    
    //}

    //szuka plku list.ejs w folderze views
    res.render("list", {
        kindOfDay: dayName
    });   

});


function nameOfDay(dayNumber) {
    return weekday[dayNumber];
}



app.listen(port, function() {
    console.log("Server started on port " + port);
});