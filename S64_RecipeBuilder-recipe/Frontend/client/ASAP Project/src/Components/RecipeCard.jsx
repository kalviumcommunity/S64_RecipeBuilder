import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-80">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-40 object-cover rounded-xl"
      />
      <h2 className="text-xl font-bold mt-2">{recipe.name}</h2>
      <p className="text-gray-600">Cooking Time: {recipe.time} mins</p>
      <p className="text-yellow-500 font-semibold">Rating: {recipe.rating} ⭐</p>
      <p className="text-gray-700 font-medium">Difficulty: {recipe.difficulty}</p>
      <h3 className="font-semibold mt-2">Ingredients:</h3>
      <ul className="list-disc ml-4 text-gray-700">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          View Recipe
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
          Save Recipe
        </button>
      </div>
    </div>
  );
};

// Dummy Data
const dummyRecipe = {
  name: "Spaghetti Carbonara",
  image: "https://source.unsplash.com/400x300/?pasta",
  time: 25,
  rating: 4.5,
  difficulty: "Medium",
  ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese", "Black Pepper"],
};

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <RecipeCard recipe={dummyRecipe} />
    </div>
  );
};

export default App;
