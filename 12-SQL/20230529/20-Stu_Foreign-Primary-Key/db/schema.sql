-- Write your Schema Here -- 
DROP DATABASE IF EXISTS store_db;
CREATE DATABASE store_db;

USE store_db;

CREATE TABLE customers(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL
);
CREATE TABLE customer_order(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    customer_id INT,
    order_details TEXT,
    FOREIGN KEY(customer_id)
    REFERENCES customers(id)
    ON DELETE SET NULL
);

INSERT INTO customers (first_name, last_name) 
VALUES 
    ('John', 'Doe'),
    ('John1', 'Doe1');

INSERT INTO customer_order (customer_id, order_details) 
VALUES (1, 'Order details for John Doe'),
(2, 'Order details for John1 Doe1');

SELECT * FROM customers;

SELECT * FROM customer_order;

DESCRIBE customers;
DESCRIBE customer_order;