import { useState, useEffect } from "react";
import { createDish, updateDish } from "../services/api";

const AddDish = ({ dishData, onClose }) => {
  const [dish, setDish] = useState(
    dishData || { dishname: "", ingredients: [] }
  );

  const handleChange = (e) => {
    setDish({
      ...dish,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      if (dishData) {
        await updateDish(dishData._id, dish);
      } else {
        await createDish(dish);
      }
      onClose();
    } catch (error) {
      console.error("Failed to save dish:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        name="dishname"
        value={dish.dishname}
        onChange={handleChange}
        placeholder="Dish Name"
      />
      {/* Add other inputs for ingredients and calories */}
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AddDish;
