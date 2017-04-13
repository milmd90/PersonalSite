var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/public/assets/logo_black.png', (req, res) => {
    res.sendFile(__dirname+'/public/assets/logo_black.png');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
