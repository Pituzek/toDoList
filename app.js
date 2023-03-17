const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];  // declare item in global scope (moved from post method)
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")); // specify location of static files


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
        listTitle: day,
        newListItems: items
    });   

});
 
app.post("/", function(req, res) {

    //console.log(req.body);

    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/"); //redirect item to home route, which will render new item through res.render
    }
});

app.get("/work", function(req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });   
});

app.get("/about", function(req, res) {
   res.sendFile(__dirname + "/about.html"); // sending single html file
});

//app.post("/work", function(req,res) {
    //let item = req.body.newItem;
    //workItems.push(item);
    //res.redirect("/work");
//});

app.listen(port, function() {
    console.log("Server started on port " + port);
});