

DROP DATABASE IF EXISTS store_inventory_db;
CREATE DATABASE store_inventory_db;

USE store_inventory_db;

CREATE TABLE products(
    id INT NOT NULL,
    product_name VARCHAR(30), 
    category_name VARCHAR(100), 
    price INT,
    instock TINYINT(1) NOT NULL
);
CREATE TABLE category(
    id INT NOT NULL,
    category_name VARCHAR(100) 
);
DESCRIBE products;
DESCRIBE category;
