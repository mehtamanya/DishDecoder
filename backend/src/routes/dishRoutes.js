const express = require("express");
const Dish = require("../models/dishModel");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { name, ingredients, calories, image } = req.body;

    const newDish = new Dish({
      name,
      ingredients,
      calories,
      image,
    });

    await newDish.save();
    res.status(201).json({ message: "Dish added successfully", dish: newDish });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding dish", error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.status(200).json(dishes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching dishes", error: error.message });
  }
});

module.exports = router;
