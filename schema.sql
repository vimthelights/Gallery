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
  Home_ID     INT unsigned NOT NULL,
  ImageURL    VARCHAR(150)
);

ALTER TABLE HomeImages ADD FOREIGN KEY (Home_ID) REFERENCES HomeInfo(id);