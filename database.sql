CREATE DATABASE onlinebokhandel;
USE onlinebokhandel;

CREATE TABLE författare (
  författare_id INT AUTO_INCREMENT PRIMARY KEY,
  förnamn VARCHAR(50) NOT NULL,
  efternamn VARCHAR(50) NOT NULL
);

CREATE TABLE kategori (
  kategori_id INT AUTO_INCREMENT PRIMARY KEY,
  namn VARCHAR(50) NOT NULL
);

CREATE TABLE bok (
  bok_id INT AUTO_INCREMENT PRIMARY KEY,
  titel VARCHAR(100) NOT NULL,
  språk VARCHAR(50),
  format VARCHAR(50),
  pris DECIMAL(6,2) NOT NULL,
  utgivningsdatum DATE,
  lagersaldo INT,
  antal_sidor INT,
  kategori_id INT NOT NULL,
  författare_id INT NOT NULL,
  FOREIGN KEY (kategori_id) REFERENCES kategori(kategori_id),
  FOREIGN KEY (författare_id) REFERENCES författare(författare_id)
);