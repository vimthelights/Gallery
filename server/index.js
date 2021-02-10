const newrelic = require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const HomeController = require('./Controllers/HomeController.js');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../public')));


//home:
app.get('/api/home/:homeId',HomeController.getHome);

app.post('/api/home', (req, res) => {
  HomeController.postHome(req, res);
});
app.patch('api/home/:homeId', (req, res) => {
  res.send('hello from patch homes');
});
app.delete('api/home/:homeId', (req, res) => {
  res.send('hello from delete');
});

//home_images:

app.get('/api/home/:homeId/images', (req, res) => {
  HomeController.getHomeImages(req, res);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
