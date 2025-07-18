CREATE DATABASE IF NOT EXISTS ajmart;
USE ajmart;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image VARCHAR(255) NOT NULL
);

INSERT INTO products (name, price, image) VALUES
('Tata Salt', 26.00, 'images/tatasalt.png'),
('Aashirwaad Atta', 410.00, 'images/atta.png'),
('Fortune Refined', 135.00, 'images/refined.png');