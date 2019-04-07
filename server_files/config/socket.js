const io = require('socket.io')();

io.on('connection', function(socket) {
  console.log('a user connected to anotherlike.me websocket server');

  socket.on("subscribe", room => {
    socket.join(room);
  })

  socket.on("to room", ({
    room,
    type,
    data
  }) => {
    console.log(`${socket.id} has joined ${room}`);
    io.to(room).emit(type, data);
  })

  socket.on('disconnect', function() {
    console.log('user disconnected');
  }); // end of disconnect event


}); // end of io connection event handler

module.exports = io;
console.log("Socket Config File Loaded");
