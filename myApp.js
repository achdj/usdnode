let express = require('express');
let dotenv = require('dotenv').config();
let app = express();
console.log('Hello World');


//path = __dirname + "/public";

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {

    absolutePath = __dirname + "/views/index.html";

    res.sendFile(absolutePath);
});

app.get("/json", function(req, res) {

    let msg = "Hello json";
    (process.env.MESSAGE_STYLE === "uppercase") ? msg = msg.toUpperCase() : msg = msg;
    res.json({"message": msg});
});






































 module.exports = app;
