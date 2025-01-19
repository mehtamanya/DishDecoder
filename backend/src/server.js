const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());

// Sample data
const dishes = [
  {
    name: "Pizza",
    calories: 300,
    ingredients: ["Cheese", "Tomato", "Flour"],
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Salad",
    calories: 150,
    ingredients: ["Lettuce", "Carrot", "Cucumber"],
    image: "https://via.placeholder.com/150",
  },
];

// API endpoint
app.get("/api/dishes", (req, res) => {
  res.json(dishes);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
