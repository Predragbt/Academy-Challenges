import { useParams } from "react-router-dom"; // Fixed import
import { useRestaurants } from "../context/RestaurantsContext";
import { useRestaurantStore } from "../store/restaurantStore";
import { RestaurantsCard } from "./RestaurantCard";

export const CuisineDetail = () => {
  const { type } = useParams();
  const { loading, error } = useRestaurants();
  const { filterByType } = useRestaurantStore();

  const filteredRestaurants = filterByType(type || "");

  return (
    <div className="container px-0 py-5">
      <h2 className="text-center text-uppercase mb-5">{type} Restaurants</h2>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="row g-4">
          {filteredRestaurants &&
            filteredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="custom-col-5">
                <RestaurantsCard restaurant={restaurant} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
