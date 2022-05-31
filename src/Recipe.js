import { Link } from "react-router-dom";

const Recipe = ({ cuisineType, dishType, image, label, mealType, uri }) => {
  const id = uri.split("_")[1];

  return (
    <Link style={{ textDecoration: "none" }} to={`details/${id}/`}>
      <div className="recipe">
        <div className="imageContainer">
          <img src={image}></img>
        </div>
        <div className="info">
          <h1>{label}</h1>
          <p>
            {cuisineType} - {dishType} - {mealType}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Recipe;
