import { Link } from "react-router-dom";
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
    <div className="container px-0 py-5">
      <h2 className="text-center text-uppercase mb-5">
        Your favorite restaurants
      </h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {favoriteRestaurants.length > 0 ?  favoriteRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="mb-4">
            <RestaurantsCard restaurant={restaurant} />
          </div>
        )) : (
          <div className="text-center">Chose your favorite <Link to="/">restaurants!</Link></div>
        )
       }
    </div>
  );
};
