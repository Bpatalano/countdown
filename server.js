let express = require('express');
let path = require('path');

let app = express();

app.use('/', express.static(path.join(__dirname, './app')));


var server = app.listen(1337, function(){
  console.log('Time is ticking away on port 1337');
});