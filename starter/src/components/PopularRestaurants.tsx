import { useRestaurants } from "../context/RestaurantsContext";
import { useRestaurantStore } from "../store/restaurantStore";
import { RestaurantsCard } from "./RestaurantCard";

export const PopularRestaurants = () => {
  const { restaurants, loading, error } = useRestaurants();
  const { top10Restaurants } = useRestaurantStore();

  const popularRestaurants = top10Restaurants(restaurants || []);
  return (
    <div className="m-5">
      <h2 className="text-center text-uppercase mb-5">
        Our Most Popular Restaurants
      </h2>
      <div className="container-fluid px-0">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="row g-4">
          {popularRestaurants &&
            popularRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="col-2">
                <RestaurantsCard restaurant={restaurant} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
