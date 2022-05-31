import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const app_id = "0a6ad3c8";
  const app_key = "2299e332cf1301100b176a27b6ce06cd";

  const [recipe, setRecipe] = useState({ ingredientLines: [] });

  async function requestRecipe() {
    const type = "public";
    const url = `https://api.edamam.com/api/recipes/v2/${id}?type=${type}&app_id=${app_id}&app_key=${app_key}`;

    const res = await fetch(url);
    const json = await res.json();

    setRecipe(json.recipe);
  }

  useEffect(() => {
    requestRecipe();
  }, []);

  return (
    <div className="recipeContainer">
      <div className="recipeFlex">
        <img src={recipe.image}></img>

        <div className="extraInfo">
          <h1>{recipe.label}</h1>
          {recipe.cuisineType} - {recipe.dishType} - {recipe.mealType}
          <br />
          {recipe.totalTime}min
        </div>
      </div>

      <div className="recipeFlex">
        <div className="ingredients">
          <h3>Ingredients:</h3>
          {recipe.ingredientLines.map((ingredient) => (
            <p key={ingredient}>{ingredient}</p>
          ))}
        </div>

        <div className="instructions">
          <h3>Instructions:</h3>
          <a href={recipe.url}>Click here</a>
        </div>
      </div>
    </div>
  );
};

export default Details;
