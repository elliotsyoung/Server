const mongoose = require('mongoose');
const keys = require("../../keys/index.js");
const devConnection = "mongodb://localhost/test";

if (process.env.DEV === "true") {
  console.log("In development mode, connecting to local database");
  mongoose.connect('mongodb://localhost/anotherlikeme', {
    useNewUrlParser: true
  });
} else {
  console.log("In production mode, connecting to digitalocean MongoDB instance");
  mongoose.connect(`mongodb://admin:${keys.mongodbpassword}@localhost:27017/anotherlikeme`, {
    useNewUrlParser: true
  });
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'database error:'));
module.exports = db;
