var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.get('/img/:folder/:name', (req, res) => {
    res.sendFile(__dirname+'/public/assets/'+req.params.folder+'/'+req.params.name);
});

app.get('*', (req, res) => {
    res.sendFile(__dirname+'/public/index.html');
});

app.listen(port, function () {
    console.log('Express server is up on port '+port);
});
