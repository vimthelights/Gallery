const HomeModel = require('../Models/HomeModel.js');

const getInfo = (req, res) => {
  HomeModel.getInfo((err, success) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(success);
    }
  });
};

module.exports = {
  getInfo,
};
