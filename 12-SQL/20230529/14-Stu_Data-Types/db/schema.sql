DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

USE customer_db;

CREATE TABLE customers (
  id INT NOT NULL,
  first_name VARCHAR(40) NOT NULL,
  last_name text(40) NOT NULL,
  value_card_member VARBINARY(20)
);

DESCRIBE customers