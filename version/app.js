const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

<<<<<<< HEAD
    response = 'This is version 2 of the app.' + '\n';
=======
    response = 'This is version 5 of the app.' + '\n';
>>>>>>> ba0cd3475cc7d755602bf9a99e1f4a158823350c

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
