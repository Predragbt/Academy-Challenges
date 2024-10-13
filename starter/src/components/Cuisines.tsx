import { useNavigate } from "react-router";
import { useRestaurants } from "../context/RestaurantsContext";
import { useRestaurantStore } from "../store/restaurantStore";
import { Link } from "react-router-dom";

export const Cuisines = () => {
  const { restaurants, loading, error } = useRestaurants();

  // Create a set of unique restaurant types (cuisines)
  const uniqueTypes = Array.from(
    new Set(restaurants?.map((restaurant) => restaurant.restauranttype))
  );

  return (
    <div className="container px-0 py-4 border-top border-bottom">
      <h2 className="text-center text-uppercase mb-4">Cuisines</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Render one button for each unique cuisine type */}
      <div className="text-center">
        {uniqueTypes.map((type, index) => (
          <Link
            to={`/cuisine/${type}`}
            key={index}
            className="btn btn-warning m-2 px-3 text-white fw-bold"
          >
            {type}
          </Link>
        ))}
      </div>
    </div>
  );
};
