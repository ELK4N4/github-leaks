const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const port = 3000;

app.use(express.static('public'));

app.get('/login', (req, res) => {
  const user = req.query.user;
  const pass = req.query.pass;
  // if(user === process.env.USER && pass === process.env.PASS) {
  if(user === "code" && pass === "leaks") {
      return res.sendFile(path.join(__dirname + '/html/success.html'));
  }
  res.sendFile(path.join(__dirname + '/html/failed.html'));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})