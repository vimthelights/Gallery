DROP DATABASE IF EXISTS Homes;

CREATE DATABASE Homes;
USE Homes;

CREATE TABLE HomeInfo (
  id              INT unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  AddressLine1    VARCHAR(150) NOT NULL,
  AddressLine2    VARCHAR(150) NOT NULL,
  AskingPrice     INT,
  NumBeds         INT,
  NumBaths        FLOAT,
  SqFt            INT,
  Saved           BOOLEAN
);

CREATE TABLE HomeImages (
  id          INT unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Home_ID     INT unsigned NOT NULL AUTO_INCREMENT,
  ImageURL    VARCHAR(150),
  INDEX (Home_ID),
  FOREIGN KEY (Home_ID) REFERENCES HomeInfo(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

INSERT INTO HomeInfo (AddressLine1, AddressLine2, AskingPrice, NumBeds, NumBaths, SqFt, Saved)
  VALUES ('435 Marina Blvd', 'San Francisco, CA 94123', 25000000, 5, 8, 7039, 0);

INSERT INTO HomeImages (Home_ID, ImageURL)
  VALUES (1, 'testURL');