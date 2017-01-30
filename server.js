let express = require('express');
let path = require('path');

const PORT = process.env.PORT || 1337;

let app = express();

app.use('/', express.static(path.join(__dirname, './app')));

app.get('*', function (req, res){
    res.sendFile(path.resolve(__dirname, './app', 'index.html'));
});

var server = app.listen(PORT, function(){
  console.log('Time is ticking away on port: ', PORT);
});