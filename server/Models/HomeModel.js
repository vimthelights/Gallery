// const db = require('../../database/index.js');
const db = require('../../SDCdb');


module.exports = {
  getHome: (homeId, callback) => {
    db.query(`SELECT * from homes WHERE id=${homeId}`, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results)
      }
    })
  },
  postHome: (home, callback) => {
    const qStr = `INSERT INTO Homes(address, askingPrice, numBeds, numBaths, sqFt) VALUES ('${home.address}', ${home.askingPrice}, ${home.numBeds}, ${home.numBaths}, ${home.sqFt})`;
    db.query(qStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
   },
   getHomeImages: (homeId, callback) => {
     const qStr = `select * from home_images where home_id=${homeId}`;
     db.query(qStr, (err, results) => {
       if(err) {
         callback(err);
       } else {
         callback(null, results);
       }
     })
   }
}






// INSERT INTO H(column1, column2, …)
// VALUES (value1, value2, …)
// RETURNING *;





// db.query('SELECT * FROM HomeInfo WHERE id = 1', callback);
// const getImages = (callback) => {
//   db.query('SELECT * FROM HomeImages WHERE Home_ID = 1', callback);
// };

// module.exports = {
//   getHome,
//   // getImages,
// };
