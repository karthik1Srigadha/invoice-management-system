const express = require("express");
const router = express.Router();
const db = require("../database/db");

router.post("/", (req, res) => {
  const { invoiceNumber, clientName, date, amount, status } = req.body;
  db.run(
    `INSERT INTO invoices VALUES (NULL, ?, ?, ?, ?, ?)`,
    [invoiceNumber, clientName, date, amount, status],
    function (err) {
      if (err) return res.status(400).json(err);
      res.json({ id: this.lastID });
    }
  );
});

router.get("/", (req, res) => {
  db.all("SELECT * FROM invoices", [], (err, rows) => {
    res.json(rows);
  });
});

router.put("/:id", (req, res) => {
  const { clientName, date, amount, status } = req.body;
  db.run(
    `UPDATE invoices SET clientName=?, date=?, amount=?, status=? WHERE id=?`,
    [clientName, date, amount, status, req.params.id],
    () => res.json({ message: "Updated" })
  );
});

router.delete("/:id", (req, res) => {
  db.run(`DELETE FROM invoices WHERE id=?`, req.params.id, () =>
    res.json({ message: "Deleted" })
  );
});

module.exports = router;
