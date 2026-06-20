import { useParams } from "react-router-dom";
import useFetchFoods from "../hooks/useFetchFoods";

function FoodDetails() {
  const { id } = useParams();

  const { foods, loading } =
    useFetchFoods(
      "https://dummyjson.com/recipes"
    );

  if (loading)
    return <h2>Loading...</h2>;

  const food = foods.find(
    (item) =>
      item.id === Number(id)
  );

  if (!food)
    return (
      <h2>Food Not Found</h2>
    );

  return (
    <div className="page">
      <h1>{food.name}</h1>

      <img
        src={food.image}
        alt={food.name}
        width="300"
      />

      <h3>
        Cuisine :
        {food.cuisine}
      </h3>

      <h3>
        Rating :
        {food.rating}
      </h3>

      <h3>
        Difficulty :
        {food.difficulty}
      </h3>
    </div>
  );
}

export default FoodDetails;