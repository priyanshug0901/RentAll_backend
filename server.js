const express = require('express')
const app = express();
const port = 3000;
require('./db/conn');

app.get('/', (req, res) => {
  res.send('Hello backend!')
});

app.listen(port, () => {
  console.log(`backend app listening at http://localhost:${port}`);
});
