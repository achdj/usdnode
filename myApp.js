let express = require('express');
let app = express();
console.log('Hello World');


//path = __dirname + "/public";

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {

    absolutePath = __dirname + "/views/index.html";

    res.sendFile(absolutePath);
});






































 module.exports = app;
