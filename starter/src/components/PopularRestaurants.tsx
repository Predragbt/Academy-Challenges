import { useRestaurants } from "../context/RestaurantsContext";
import { useRestaurantStore } from "../store/restaurantStore";
import { RestaurantsCard } from "./RestaurantCard";

export const PopularRestaurants = () => {
  const { restaurants, loading, error } = useRestaurants();
  const { top10Restaurants } = useRestaurantStore();

  const popularRestaurants = top10Restaurants(restaurants || []);
  return (
    <div className="container px-0 py-5">
      <h2 className="text-center text-uppercase mb-5">
        Our Most Popular Restaurants
      </h2>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="row g-4">
          {popularRestaurants &&
            popularRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="custom-col-5">
                <RestaurantsCard restaurant={restaurant} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
