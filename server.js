const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');

const app = express();
const port = 5000;


const db = new sqlite3.Database('yoga.db');


db.run(`
  CREATE TABLE IF NOT EXISTS yoga_admissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    selectedBatch TEXT,
    joinDate TEXT
  )
`);

app.use(bodyParser.json());


app.post('/submit-form', (req, res) => {
  const { name, age, selectedBatch, joinDate } = req.body;

  
  db.run(
    'INSERT INTO yoga_admissions (name, age, selectedBatch, joinDate) VALUES (?, ?, ?, ?)',
    [name, age, selectedBatch, joinDate],
    function (err) {
      if (err) {
        console.error('Error inserting data into yoga_admissions table:', err.message);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      } else {
        console.log('Data inserted into yoga_admissions table. Record ID:', this.lastID);
        res.json({ success: true, id: this.lastID });
      }
    }
  );
});


app.get('/submit-form', (req, res) => {
  res.send('Hello from GET /submit-form');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
