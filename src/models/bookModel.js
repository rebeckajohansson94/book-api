import pool from "../config/db.js";

// model file: handles all communication with the database, all SQL queries are run here

// get all books with their author and category
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

// get all books belonging to a specific category
// receives category as an argument
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
    [category], // category is passed separately from the SQL query and replaces ? to protect against SQL injection.
  );

  return rows;
}

// get number of books per category
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
