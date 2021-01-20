const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const HomeController = require('./controllers/HomeController.js');

app.use('/', express.static(path.join(__dirname, '../public')));

app.get('/api/homeinfo', (req, res) => {
  HomeController.getInfo(req, res);
});

app.get('/api/homeimages', (req, res) => {
  HomeController.getImages(req, res);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
