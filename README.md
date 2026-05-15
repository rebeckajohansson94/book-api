# 📚 Book API

A REST API for a book catalog built with Node.js, Express and MySQL. Returns JSON data about books, authors and categories.

## Tech Stack

- Node.js
- Express
- MySQL

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rebeckajohansson94/book-api.git
cd book-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project and copy the contents of `.env.example` into it. Fill in your own database credentials.

### 4. Set up the database

Run `database.sql` in your MySQL client to create the database, tables and insert sample data.

### 5. Start the server

```bash
node --watch server.js
```

The server will run on `http://localhost:3000`

## Endpoints

### Get all books

```
GET /api/books
```

Returns all books with their author and category.

### Get books by category

```
GET /api/books/category/:category
```

Returns books filtered by category.

**Example:** `/api/books/category/Fantasy`

### Get book count per category

```
GET /api/books/category-count
```

Returns the number of books in each category.
