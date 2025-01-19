const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dishRoutes = require("./routes/dishRoutes");
const connectDB = require("./db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/dishes", dishRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
