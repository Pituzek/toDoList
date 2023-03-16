const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res) {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    //szuka plku list.ejs w folderze views
    res.render("list", {
        kindOfDay: day
    });   

});

app.post("/", function(req, res) {
    var num1 = req.body.txt1;
    console.log(num1);
    //res.send(num1);
});

app.listen(port, function() {
    console.log("Server started on port " + port);
});