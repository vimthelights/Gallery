const faker = require('faker');
const fs = require('fs');
//const {insertHomes, makeHomes} = require('./seedHomes.js');

//for homes table
const writeHomes = fs.createWriteStream('seedHomes.csv');
writeHomes.write('address, askingPrice, numBeds, numBaths, sqFt\n', 'utf8');


function writeTenMillionHomes(writer, encoding, callback) {
  let i = 10000000;
  function write() {
    let ok = true;
    do {
      i -= 1;
      const address = `"${faker.address.streetAddress()} , ${faker.address.city()} , ${faker.address.state()} , ${faker.address.zipCodeByState().slice(0,5)}"`;
      const askingPrice = Math.floor(Math.random() * 1000000) + 100000;
      const numBeds = Math.floor(Math.random() * 10);
      const numBaths = Math.floor(Math.random() * 10) + 0.5;
      const sqFt = Math.floor(Math.random() * 5000);
      const home = `${address},${askingPrice},${numBeds},${numBaths},${sqFt}\n`;
      if (i === 0) {
        writer.write(home, encoding, callback);
      } else {
        ok = writer.write(home, encoding);
      }
      if ( i === 9000000) {
        console.log('seeded the first million home records');
      } else if ( i === 5000000) {
        console.log('seeded the first 5 million home records');
      } else if ( i === 1000000) {
        console.log('seeding the last 1 million home records');
      } else if (i === 1000) {
        console.log('seeding the last 1000 home records');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionHomes(writeHomes, 'utf-8', () => {
  writeHomes.end();
});