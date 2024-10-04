import { useRestaurants } from "../context/RestaurantsContext";
import { useRestaurantStore } from "../store/restaurantStore";
import { RestaurantsCard } from "./RestaurantCard";

export const Favorites = () => {
  const { restaurants, loading, error } = useRestaurants();
  const { favorites } = useRestaurantStore();

  const favoriteRestaurants = restaurants?.filter((restaurants) =>
    favorites.includes(restaurants.id)
  );
  return (
    <div className="m-5">
      <h2 className="text-center text-uppercase mb-5">
        Your favorite restaurants
      </h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {favoriteRestaurants &&
        favoriteRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="mb-4">
            <RestaurantsCard restaurant={restaurant} />
          </div>
        ))}
    </div>
  );
};
