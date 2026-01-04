const express = require("express");
const cors = require("cors");

const invoiceRoutes = require("./routes/invoices");
const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ ROOT ROUTE (ADD THIS)
app.get("/", (req, res) => {
  res.send("Invoice Management Backend is running");
});

app.use("/auth", authRoutes);
app.use("/invoices", invoiceRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
