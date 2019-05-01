'use strict';

var express = require("express");

var app = express();

app.get('/', function (req, res, next) {
  res.json({
    msg: 'this is the backend'
  });
});

app.listen(3000, function () {
  return console.log('server running on port: 3000');
});
//# sourceMappingURL=app.js.map