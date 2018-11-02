var express = require('express');
var app = express();
app.use(express.static('../lea-ui/dist'));
app.listen(8082);

