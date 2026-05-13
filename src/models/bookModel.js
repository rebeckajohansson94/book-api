import pool from "../config/db.js";

// models, här körs samtliga sql queries

// få ut alla böcker med dess författare & kategori
export async function getAllBooks() {
  const [rows] = await pool.execute(`
    SELECT 
    b.bok_id,
    b.titel,
    b.utgivningsdatum,
    b.antal_sidor,
    CONCAT(f.förnamn, ' ', f.efternamn) AS författare,
    k.namn AS kategori
    FROM bok b
    JOIN författare f ON b.författare_id = f.författare_id
    JOIN kategori k ON b.kategori_id = k.kategori_id
    ORDER BY b.titel ASC
  `);

  return rows;
}

// få ut alla böcker som tillhör en viss kategori
// tar emot kategori som argument
export async function getBooksByCategory(category) {
  const [rows] = await pool.execute(
    `
    SELECT 
    b.bok_id,
    b.titel,
    b.utgivningsdatum,
    b.antal_sidor,
    CONCAT(f.förnamn, ' ', f.efternamn) AS författare,
    k.namn AS kategori
    FROM bok b
    JOIN författare f ON b.författare_id = f.författare_id
    JOIN kategori k ON b.kategori_id = k.kategori_id
    WHERE k.namn = ?
    ORDER BY b.titel ASC
    `,
    [category], // category anges separat från SQL-queryn och ersätts med ? för att skydda mot SQL-injektion för att göra koden säkrare.
  );

  return rows;
}

// få ut antal böcker per kategori
export async function getBookCountByCategory() {
  const [rows] = await pool.execute(`
    SELECT 
    k.namn AS kategori, 
    COUNT(b.bok_id) AS antal_böcker
    FROM kategori k
    JOIN bok b ON b.kategori_id = k.kategori_id
    GROUP BY k.namn
    ORDER BY antal_böcker DESC
  `);

  return rows;
}
