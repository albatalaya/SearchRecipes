const Recipe = ({
  calories,
  cuisineType,
  dishType,
  image,
  label,
  mealType,
  totalTime,
}) => {
  return (
    <div>
      <img src={image}></img>
      <h1>{label}</h1>
    </div>
  );
};

export default Recipe;
