// db.js

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create or connect to the SQLite database file
const dbPath = path.resolve(__dirname, 'yoga.db');
const db = new sqlite3.Database(dbPath);

// Create 'submissions' table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    selectedBatch TEXT,
    joinDate DATE
  );
`);

module.exports = db;
