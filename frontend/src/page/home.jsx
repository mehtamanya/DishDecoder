import { useState, useEffect } from "react";
import { getAllDishes, deleteDish } from "../services/api";
import DishList from "../components/DishList";
import AddDish from "../components/adddish";
import { toast } from "react-toastify";

const Home = () => {
  const [dishes, setDishes] = useState([]);
  const [showAddDishModal, setShowAddDishModal] = useState(false);
  const [editDishData, setEditDishData] = useState(null);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const { data } = await getAllDishes();
        setDishes(data.data);
      } catch (error) {
        console.error("Failed to fetch dishes:", error);
      }
    };
    fetchDishes();
  }, []);

  const handleDeleteDish = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this dish?"
    );
    if (confirmed) {
      try {
        await deleteDish(id);
        setDishes(dishes.filter((dish) => dish._id !== id));
        toast.success("Dish deleted successfully!");
      } catch (error) {
        toast.error("Failed to delete the dish.");
      }
    }
  };

  return (
    <div>
      <h1>Explore Delicious Dishes 🍴</h1>
      <DishList
        dishes={dishes}
        onEdit={setEditDishData}
        onDelete={handleDeleteDish}
      />
      {showAddDishModal && (
        <AddDish
          dishData={editDishData}
          onClose={() => setShowAddDishModal(false)}
        />
      )}
      <button onClick={() => setShowAddDishModal(true)}>Add Dish</button>
    </div>
  );
};

export default Home;
