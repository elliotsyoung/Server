const express = require('express');
const PORT = process.env.PORT || 8000
const app = express();

app.get('/', (req, res) => {
  console.log('Visitor to home route:');
  res.send('Home Page');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
