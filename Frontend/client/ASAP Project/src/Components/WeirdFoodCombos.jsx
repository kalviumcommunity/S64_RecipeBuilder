import React from "react";

const WeirdFoodCombo = ({ name, ingredients, rating, color }) => {
  return (
    <div className={`rounded-xl p-4 shadow-lg transform transition hover:scale-105 ${color} text-white`}>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-200">Ingredients: {ingredients.join(", ")}</p>
      <p className="text-yellow-300 font-semibold">⭐ {rating} / 5</p>
    </div>
  );
};

export default WeirdFoodCombo;