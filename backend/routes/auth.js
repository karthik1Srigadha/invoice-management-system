const express = require("express");
const router = express.Router();
const db = require("../database/db");

// SIGN UP
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  db.run(
    `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
    [name, email, password],
    function (err) {
      if (err) {
        return res.status(400).json({ message: "User already exists" });
      }
      res.json({ message: "Signup successful" });
    }
  );
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get(
    `SELECT * FROM users WHERE email = ? AND password = ?`,
    [email, password],
    (err, user) => {
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      res.json({ message: "Login successful", user });
    }
  );
});

module.exports = router;
