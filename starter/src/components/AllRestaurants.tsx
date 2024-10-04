import { useRestaurants } from "../context/RestaurantsContext";
import { RestaurantsCard } from "./RestaurantCard";

export const AllRestaurants = () => {
  const { restaurants, loading, error } = useRestaurants();

  return (
    <div className="m-5">
      <h2 className="text-center text-uppercase mb-5">All Restaurants</h2>
      <div className="container-fluid px-0">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="row g-4">
          {restaurants &&
            restaurants.map((restaurant) => (
              <div key={restaurant.id} className="col-2">
                <RestaurantsCard restaurant={restaurant} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
