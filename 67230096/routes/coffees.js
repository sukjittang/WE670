const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/', (req, res) => {
  db.all("SELECT * FROM coffees", (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

router.get('/:id', (req, res) => {
  db.get("SELECT * FROM coffees WHERE id = ?", [req.params.id], (err, row) => {
    if (err) return res.status(500).json(err);
    if (!row) return res.status(404).send('ไม่พบข้อมูลกาแฟ');
    res.json(row);
  });
});

router.post('/', (req, res) => {
  const { name, size, price } = req.body;
  db.run(
    "INSERT INTO coffees (name, size, price) VALUES (?, ?, ?)",
    [name, size, price],
    function (err) {
      if (err) return res.status(500).json(err);
      res.json({ id: this.lastID, name, size, price });
    }
  );
});

router.put('/:id', (req, res) => {
  const { name, size, price } = req.body;
  db.run(
    "UPDATE coffees SET name = ?, size = ?, price = ? WHERE id = ?",
    [name, size, price, req.params.id],
    function (err) {
      if (err) return res.status(500).json(err);
      if (this.changes === 0) return res.status(404).send('ไม่พบข้อมูลเพื่ออัปเดต');
      res.send('อัปเดตกาแฟเรียบร้อยแล้ว');
    }
  );
});

router.delete('/:id', (req, res) => {
  db.run("DELETE FROM coffees WHERE id = ?", [req.params.id], function (err) {
    if (err) return res.status(500).json(err);
    if (this.changes === 0) return res.status(404).send('ไม่พบข้อมูลที่จะลบ');
    res.send('ลบข้อมูลกาแฟสำเร็จแล้ว');
  });
});

module.exports = router;