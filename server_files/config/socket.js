const io = require('socket.io')();

io.on('connection', function(socket) {
  console.log('a user connected to anotherlike.me websocket server');
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
});

module.exports = io;
console.log("Socket Config File Loaded");
