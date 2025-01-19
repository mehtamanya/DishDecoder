import React from 'react';
import { Link } from 'react-router-dom';

const DishList = ({ dishes, onEdit, onDelete }) => {
  return (
    <div>
      {dishes.map((dish) => (
        <div key={dish._id}>
          <Link to={`/dish/${dish._id}`}>{dish.dishname}</Link>
          <button onClick={() => onEdit(dish)}>Edit</button>
          <button onClick={() => onDelete(dish._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DishList;
