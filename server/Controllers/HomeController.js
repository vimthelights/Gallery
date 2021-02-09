const HomeModel = require('../Models/HomeModel.js');



module.exports = {
  getHome: (req, res) => {
    const {homeId} = req.params;
    console.log(homeId)
    HomeModel.getHome(homeId, (err, success) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(success);
      }
    });
  },
  postHome: (req, res) => {
    const {address, askingPrice, numBeds, numBaths, sqFt} = req.body;
    const home = {
      address: address,
      askingPrice: askingPrice,
      numBeds: numBeds,
      numBaths: numBaths,
      sqFt: sqFt
    }
    HomeModel.postHome(home,(err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send(results);
      }
    })
  },
  getHomeImages:(req, res) => {
    const {homeId} = req.params;
    HomeModel.getHomeImages(homeId, (err, results) => {
      if(err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  }
}


// const getImages = (req, res) => {
//   HomeModel.getImages((err, success) => {
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.status(200).send(success);
//     }
//   });
// };




// module.exports = {
//   getHome,
//   // getImages,
// };
