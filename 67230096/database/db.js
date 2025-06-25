const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/coffee.db');

db.serialize(() => {
  db.run(\`
    CREATE TABLE IF NOT EXISTS coffees (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      size TEXT,
      price REAL
    )
  \`);
});

module.exports = db;