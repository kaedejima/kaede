var express = require("express");
var app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

//route page
app.get("/", function(req, res){
    // res.render("index.ejs");
    console.log("access to /");
});

app.get("/sayhelloto/:someNum", function(req, res){
    var someNum = req.params.someNum;
    console.log(req.params);
    res.render("home.ejs", {name: someNum});
    // res.send("Hello, world of the " + someNum + "!!");
    console.log("access to /sayhelloto/:someNum");
});

// undefined page
app.get("*", function(req, res){
    res.send("Sorry, this page do not exist...");
    console.log("access to unknown");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});