var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello Jared!  You are one cool dude.  Cowabunga!\n');
});

app.get('/IBM', function(req, res) {
  res.send('Welcome to Red Hat Open Shift Container Platform provided by IBM!\n');
});

app.get('/PearlJam', function(req, res) {
  res.send('Pearl Jam is the best band in the world!\n');
});

app.get('/version', function(req, res) {
  res.send('Running OpenShift Local v2.15.0 and OpenShift v4.12.5!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

