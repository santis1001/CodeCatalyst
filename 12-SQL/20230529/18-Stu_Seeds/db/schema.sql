DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE products(
  id INT AUTO_INCREMENT PRIMARY KEY  NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(30) NOT NULL
);

Source ./db/seeds.sql;

SELECT * FROM products;
