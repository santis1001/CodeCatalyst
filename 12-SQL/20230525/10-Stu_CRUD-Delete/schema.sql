DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE fiction (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);

source insert.sql
source update.sql
source get.sql