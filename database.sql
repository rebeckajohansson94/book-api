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

INSERT INTO författare (förnamn, efternamn) VALUES
('Sarah J.', 'Maas'),
('Colleen', 'Hoover'),
('Stephen', 'King'),
('George', 'Orwell'),
('Agatha', 'Christie'),
('Rebecca', 'Yarros'),
('Jane', 'Austen'),
('Leigh', 'Bardugo'),
('Holly', 'Jackson'),
('Suzanne', 'Collins'),
('Fredrik', 'Backman'),
('Taylor', 'Jenkins Reid'),
('Matt', 'Haig'),
('Ali', 'Hazelwood'),
('Delia', 'Owens'),
('Nisha', 'J. Tuli'),
('Callie', 'Hart'),
('Keri', 'Lake'),
('Madeline', 'Miller'),
('Toshikazu', 'Kawaguchi'),
('S.T.', 'Gibson'),
('Emily', 'Henry'),
('Lucy', 'Foley'),
('Frank', 'Herbert'),
('Taylor', 'Adams');

INSERT INTO kategori (namn) VALUES
('Fantasy'),
('Romantik'),
('Thriller'),
('Science Fiction'),
('Deckare'),
('Skräck'),
('Klassiker');

INSERT INTO bok (titel, språk, format, pris, utgivningsdatum, lagersaldo, antal_sidor, kategori_id, författare_id) VALUES
('A Court of Thorns and Roses', 'Engelska', 'Pocket', 129.00, '2015-05-05', 17, 432, 1, 1),
('It Ends with Us', 'Svenska', 'Pocket', 119.00, '2016-08-02', 20, 384, 2, 2),
('The Shining', 'Engelska', 'Inbunden', 159.00, '1977-01-28', 8, 447, 6, 3),
('1984', 'Engelska', 'Pocket', 99.00, '1949-06-08', 11, 328, 7, 4),
('Mordet på Orientexpressen', 'Svenska', 'Pocket', 109.00, '1934-01-01', 6, 256, 5, 5),
('Fourth Wing', 'Engelska', 'Inbunden', 189.00, '2023-05-02', 13, 512, 1, 6),
('Pride and Prejudice', 'Engelska', 'Pocket', 89.00, '1813-01-28', 9, 279, 7, 7),
('Six of Crows', 'Engelska', 'Pocket', 135.00, '2015-09-29', 12, 491, 1, 8),
('A Good Girl\'s Guide to Murder', 'Svenska', 'Pocket', 125.00, '2019-05-02', 16, 433, 5, 9),
('The Hunger Games', 'Engelska', 'Pocket', 115.00, '2008-09-14', 18, 374, 4, 10),
('En man som heter Ove', 'Svenska', 'Pocket', 95.00, '2012-08-27', 10, 337, 7, 11),
('The Seven Husbands of Evelyn Hugo', 'Engelska', 'Pocket', 129.00, '2017-06-13', 15, 400, 2, 12),
('The Midnight Library', 'Engelska', 'Pocket', 119.00, '2020-08-13', 17, 288, 7, 13),
('The Love Hypothesis', 'Svenska', 'Pocket', 124.00, '2021-09-14', 14, 383, 2, 14),
('Where the Crawdads Sing', 'Svenska', 'Pocket', 134.00, '2018-08-14', 7, 384, 3, 15),
('Trial of the Sun Queen', 'Engelska', 'Inbunden', 189.00, '2022-08-30', 11, 446, 1, 16),
('Quicksilver', 'Engelska', 'Pocket', 199.00, '2024-06-04', 9, 624, 1, 17),
('Anathema', 'Engelska', 'Inbunden', 195.00, '2024-10-01', 8, 468, 1, 18),
('Circe', 'Engelska', 'Pocket', 139.00, '2018-04-10', 13, 393, 7, 19),
('Before the Coffee Gets Cold', 'Svenska', 'Pocket', 119.00, '2015-12-06', 10, 272, 7, 20),
('A Dowry of Blood', 'Engelska', 'Inbunden', 179.00, '2021-01-31', 7, 304, 6, 21),
('Book Lovers', 'Engelska', 'Pocket', 129.00, '2022-05-03', 12, 377, 2, 22),
('The Paris Apartment', 'Engelska', 'Pocket', 134.00, '2022-02-22', 10, 360, 3, 23),
('Dune', 'Engelska', 'Inbunden', 209.00, '1965-08-01', 6, 688, 4, 24),
('No Exit', 'Engelska', 'Pocket', 125.00, '2017-06-20', 33, 304, 3, 25),
('A Court of Mist and Fury', 'Engelska', 'Pocket', 139.00, '2016-05-03', 10, 624, 1, 1),
('A Court of Wings and Ruin', 'Engelska', 'Pocket', 149.00, '2017-05-02', 8, 699, 1, 1),
('A Court of Frost and Starlight', 'Engelska', 'Pocket', 129.00, '2018-05-01', 12, 272, 1, 1),
('A Court of Silver Flames', 'Engelska', 'Pocket', 159.00, '2021-02-16', 9, 757, 1, 1);