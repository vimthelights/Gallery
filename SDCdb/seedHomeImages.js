const faker = require('faker');
const fs = require('fs');

//for homes images
const writeHomeImages = fs.createWriteStream('./tmp/seedHomeImages.csv');
writeHomeImages.write('home_Id, imageUrl, displayOrder\n', 'utf8');


function writeTenMillionHomeImages(writer, encoding, callback) {
  let i = 10000000;
  function write() {
    let ok = true;
    do {
      i -= 1;
      const home_id = Math.floor((Math.random() * 1000000) + 1);
      const imageUrl = "https://loremflickr.com/g/320/240/house";
      const displayOrder = Math.floor((Math.random() * 10) + 1);
      const homeImage = `${home_id},${imageUrl},${displayOrder}\n`;
      if (i === 0) {
        writer.write(homeImage, encoding, callback);
      } else {
        ok = writer.write(homeImage, encoding);
      }
      if ( i === 9000000) {
        console.log('seeded the first million homeImage records');
      } else if ( i === 5000000) {
        console.log('seeded the first 5 million homeImage records');
      } else if ( i === 1000000) {
        console.log('seeding the last 1 million homeImage records');
      } else if (i === 1000) {
        console.log('seeding the last 1000 homeImage records');
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionHomeImages(writeHomeImages, 'utf-8', () => {
  writeHomeImages.end();
});