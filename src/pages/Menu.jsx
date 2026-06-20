import { Link, useSearchParams } from "react-router-dom";
// import useFetchFoods from "../hooks/useFetchFoods";
import useFetchFoods from "../hooks/useFetchFoods";

function Menu() {
  const { foods, loading, error } =
    useFetchFoods(
      "https://dummyjson.com/recipes"
    );

  const [searchParams, setSearchParams] =
    useSearchParams();

  const page =
    Number(searchParams.get("page")) || 1;

  const itemsPerPage = 5;

  const startIndex =
    (page - 1) * itemsPerPage;

  const currentFoods = foods.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(
    foods.length / itemsPerPage
  );

  if (loading)
    return <h2>Loading...</h2>;

  if (error)
    return <h2>{error}</h2>;

  return (
    <div className="page">
      <h1>Restaurant Menu</h1>

      <div className="food-grid">
        {currentFoods.map((food) => (
          <div
            key={food.id}
            className="food-card"
          >
            <img
              src={food.image}
              alt={food.name}
            />

            <h3>{food.name}</h3>

            <Link
              to={`/menu/${food.id}`}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() =>
            setSearchParams({
              page: page - 1
            })
          }
        >
          Previous
        </button>

        <span>
          Page {page}
        </span>

        <button
          disabled={
            page === totalPages
          }
          onClick={() =>
            setSearchParams({
              page: page + 1
            })
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Menu;