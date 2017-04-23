var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/img/:folder/:name', (req, res) => {
    res.sendFile(__dirname+'/public/assets/'+req.params.folder+'/'+req.params.name);
});

app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(3000, function () {
    console.log('Express server is up on port 3000');
});
