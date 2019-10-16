var express = require('express');
var socket = require('socket.io');

// App
var app = express();

// Now create the server
var server = app.listen(3000, function () {
    console.log('Listeneing to request on port 3000! ')
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        console.log('Server received data: ' + data);
        io.emit('chat', data);
    });

});