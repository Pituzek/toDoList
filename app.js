const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];  // declare item in global scope (moved from post method)

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res) {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    //szuka plku list.ejs w folderze views
    res.render("list", {
        kindOfDay: day,
        newListItems: items
    });   

});
 
app.post("/", function(req, res) {

    var item = req.body.txt1;
    items.push(item);
    //console.log(num1);
    //res.send(num1);

    res.redirect("/"); //redirect item to home route, which will render new item through res.render

});

app.listen(port, function() {
    console.log("Server started on port " + port);
});