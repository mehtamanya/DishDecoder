import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDishDetails } from '../services/api';
import { calculateCalories } from '../calculator/caloriescalculator';
import QRGenerator from './QRGenerator';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DishDetails = () => {
  const { id } = useParams();
  const [dish, setDish] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data } = await getDishDetails(id);
        setDish(data.data);
        const initialQuantities = {};
        data.data.ingredients.forEach((_, idx) => (initialQuantities[idx] = 1));
        setQuantities(initialQuantities);
      } catch (error) {
        console.error('Failed to fetch dish details:', error);
      }
    };
    fetchDetails();
  }, [id]);

  const handleQuantityChange = (index, change) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: Math.max(1, (prev[index] || 1) + change),
    }));
  };

  const totalCalories = dish ? calculateCalories(dish.ingredients, quantities) : 0;

  const chartData = {
    labels: dish.ingredients.map((ingredient) => ingredient.name),
    datasets: [
      {
        data: dish.ingredients.map(
          (ingredient, idx) => ingredient.calories * quantities[idx]
        ),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <div className="p-6">
      {/* Render the dish details */}
      <Doughnut data={chartData} />
    </div>
  );
};

export default DishDetails;
