DROP DATABASE IF EXISTS homesdb;
CREATE DATABASE homesdb;
\connect homesdb;
-- USE gallery;

-- DROP TABLE IF EXISTS homes;
CREATE TABLE homes (
  id              SERIAL PRIMARY KEY,
  address    VARCHAR(150) NOT NULL,
  askingPrice     INT,
  numBeds         INT,
  numBaths        FLOAT,
  sqFt            INT
);

CREATE TABLE home_images (
  id          SERIAL PRIMARY KEY,
  home_id     INT NOT NULL,
  imageUrl    VARCHAR(100),
  displayOrder   INT,

  FOREIGN KEY (home_id)
      REFERENCES homes (id)
);

CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  userName    VARCHAR(30),
  email       VARCHAR(30)
);

CREATE TABLE user_favorites (
  id          SERIAL PRIMARY KEY,
  user_id     INT NOT NULL,
  home_id     INT NOT NULL,

  FOREIGN KEY (home_Id)
      REFERENCES Homes (id),

  FOREIGN KEY (user_Id)
      REFERENCES Users (id)
);

-- \COPY homes (address, askingPrice, numBeds, numBaths, sqFt) FROM '/Users/farnooshabz/Documents/HRSF132/sprints/SDC/Gallery/tmp/seedHomes.csv' DELIMITER ',' CSV HEADER;
-- \COPY home_images (home_id, imageUrl, displayOrder) FROM '/Users/farnooshabz/Documents/HRSF132/sprints/SDC/Gallery/tmp/seedHomeImages.csv' DELIMITER ',' CSV HEADER;


-- CREATE INDEX images_home_idx ON home_images (imageUrl) INCLUDE (home_id, displayOrder);

-- CREATE INDEX images_home_idx ON home_images (home_id) INCLUDE (imageUrl, displayOrder);

-- SELECT homesdb FROM pg_database;
