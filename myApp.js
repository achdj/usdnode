let express = require('express');
let dotenv = require('dotenv').config();
let bodyParser = require('body-parser');
let app = express();
console.log('Hello World');


//path = __dirname + "/public";

app.use(express.static(__dirname + "/public"));

app.use(function(req, res, next) {
    console.log(req.method +' '+ req.path +' - '+ req.ip);
    next();
});

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", function(req, res) {

    absolutePath = __dirname + "/views/index.html";

    res.sendFile(absolutePath);
});

app.get("/json", function(req, res) {

    let msg = "Hello json";
    (process.env.MESSAGE_STYLE === "uppercase") ? msg = msg.toUpperCase() : msg = msg;
    res.json({"message": msg});
});

var dalayInmilliseconds = 1000;
app.get("/now", function(req, res, next) {
    req.time = new Date().toString();
    next()
}, (req, res) => {
    setTimeout(function() {
        res.json({"time": req.time})
    }, dalayInmilliseconds);
});

app.get("/:word/echo", function(req, res) {
    const { word } = req.params;
    res.json({echo: word});
});

app.get("/name", function(req, res) {
    var firstName = req.query.first;
    var lastName = req.query.last;

    var { first: firstName, last: lastName} = req.query;
    res.json({name: `${firstName} ${lastName}`})
});

app.post('/name', function(req, res) {
    var firstName = req.body.first;
    var lastName = req.body.last;

    res.json({name: `${firstName} ${lastName}`})
});



































 module.exports = app;
