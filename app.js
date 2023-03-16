const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const app = express();

app.set('view engine', 'ejs');


app.get("/", function(req, res) {

    var today = new Date();
    var currentDay = today.getDay();;
    var dayName = nameOfDay(currentDay);

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US");

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