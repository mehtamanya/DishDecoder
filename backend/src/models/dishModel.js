const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  calories: { type: Number, required: true },
  image: { type: String }, 
});

const Dish = mongoose.model("Dish", dishSchema);

module.exports = Dish;
