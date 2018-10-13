DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(45) NULL,
  departmentName VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stockQuantity INT NULL,
  PRIMARY KEY (id)
);


INSERT INTO products ( productName,departmentName, price,  stockQuantity )
VALUES ("shirt", "clothing", 10.00, 10);

INSERT INTO products ( productName,departmentName, price,  stockQuantity )
VALUES  ("pant", "clothing", 15.00, 9);

INSERT INTO products ( productName,departmentName, price,  stockQuantity )
VALUES ("hat", "clothing", 25.00, 88);

INSERT INTO products ( productName,departmentName, price,  stockQuantity )
VALUES ("scarf", "sportswear", 55.00, 8);

INSERT INTO products ( productName,departmentName, price,  stockQuantity )
VALUES ("shoes", "sportswear", 35.00, 55);

INSERT INTO products ( productName,departmentName, price,  stockQuantity )
VALUES ("football", "kids", 75.00, 77);

INSERT INTO products ( productName,departmentName, price,  stockQuantity )
VALUES ("baseballs", "kids", 2.00, 10);

INSERT INTO products ( productName,departmentName, price,  stockQuantity )
VALUES ("bat", "kids", 5.00, 99);

INSERT INTO products ( productName,departmentName, price,  stockQuantity )
VALUES ("cards", "games", 5.00, 99);

INSERT INTO products ( productName,departmentName, price,  stockQuantity )
VALUES ("controller", "game", 5.00, 8);