var express = require('express');
var app = express();
app.use(express.static('../lea-ui/dist'));
app.listen(8082);


let mqtt = require('mqtt');
let os = require("os");

/*let strPlayload = { "message": "coucou la sncf" }
var payLoad = strPlayload.toString();
console.log(strPlayload);
console.log(strPlayload.message);
console.log(payLoad.message);*/

