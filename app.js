const express = require('express');

const app = express();

app.get('/', (req, res) =>
{
  console.log('Visitor to home route:');
  res.send('Home Page');
});

app.listen(8000, () =>
{
  console.log('listening on port 8000');
});
