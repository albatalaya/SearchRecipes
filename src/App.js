import "./App.css";
import { useState, useEffect } from "react";
import Recipe from "./Recipe";

function App() {
  const app_id = "0a6ad3c8";
  const app_key = "2299e332cf1301100b176a27b6ce06cd";

  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [currentSearch, setCurrentSearch] = useState("lunch"); //example of the first recepies you see at the start

  async function requestRecipes() {
    const type = "public";
    const url = `https://api.edamam.com/api/recipes/v2?type=${type}&q=${currentSearch}&app_id=${app_id}&app_key=${app_key}`;
    const res = await fetch(url);
    const json = await res.json();

    setRecipes(json.hits);
    setSearch("");
  }

  useEffect(() => {
    requestRecipes();
  }, []);

  return (
    <div className="searchScreen">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestRecipes();
        }}
      >
        <label htmlFor="search">
          <h3>Search Recipes by Key Words</h3>
          <input
            id="search"
            value={search}
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentSearch(e.target.value);
            }}
          />
        </label>
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>

      <div className="list">
        {recipes.map((recipe) => (
          <div key={`recipe-${recipe.recipe.uri}`} className="item">
            <Recipe
              cuisineType={recipe.recipe.cuisineType}
              dishType={recipe.recipe.dishType}
              image={recipe.recipe.image}
              label={recipe.recipe.label}
              mealType={recipe.recipe.mealType}
              uri={recipe.recipe.uri}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
