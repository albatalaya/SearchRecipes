import "./App.css";
import { useState } from "react";
import Recipe from "./Recipe";

function App() {
  const app_id = "0a6ad3c8";
  const app_key = "2299e332cf1301100b176a27b6ce06cd";
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  async function requestRecipes() {
    console.log("kasdkabsdkbakjsd");
    const type = "public";
    const url = `https://api.edamam.com/api/recipes/v2?type=${type}&q=${search}&app_id=${app_id}&app_key=${app_key}`;
    const res = await fetch(url);
    const json = await res.json();

    setRecipes(json.hits);

    console.log(json.hits);
  }

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestRecipes();
        }}
      >
        <label htmlFor="search">
          Search Recipes by Key Words
          <input
            id="search"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {recipes.map((recipe) => (
        <Recipe
          calories={recipe.recipe.calories}
          cuisineType={recipe.recipe.cuisineType}
          dishType={recipe.recipe.dishType}
          image={recipe.recipe.image}
          label={recipe.recipe.label}
          mealType={recipe.recipe.mealType}
          totalTime={recipe.recipe.totalTime}
        />
      ))}
    </div>
  );
}

export default App;
