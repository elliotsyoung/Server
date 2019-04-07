const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require(__dirname + "/server_files/config/socket.js")
const PORT = process.env.PORT || 8000;
const database = require("./server_files/config/database.js");

app.use(express.static(__dirname + "/client_files"));

app.get('/', (req, res) => {
  console.log('Visitor to home route:');
  res.send('anotherlike.me');
});

io.attach(server);

// only turn on server after database connection has been established
database.once('open', function() {
  console.log("Database connection established, starting server");
  server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});
