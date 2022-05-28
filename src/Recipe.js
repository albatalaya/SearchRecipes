const Recipe = ({ cuisineType, dishType, image, label, mealType }) => {
  return (
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
  );
};

export default Recipe;
