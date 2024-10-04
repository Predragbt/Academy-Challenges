import { useParams } from "react-router";
import { useRestaurants } from "../context/RestaurantsContext";
import { useRestaurantStore } from "../store/restaurantStore";
import { RestaurantsCard } from "./RestaurantCard";

export const CuisineDetail = () => {
  const { type } = useParams();
  const { restaurants, loading, error } = useRestaurants();
  const { filterByType } = useRestaurantStore();

  const filteredRestaurants = filterByType(restaurants || [], type || "");
  return (
    <div className="m-5">
      <h2 className="text-center text-uppercase mb-5">{type} Restaurants</h2>

      <div className="container-fluid px-0">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="row g-4">
          {filteredRestaurants &&
            filteredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="col-2">
                <RestaurantsCard restaurant={restaurant} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
