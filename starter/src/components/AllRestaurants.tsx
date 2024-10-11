import { useRestaurants } from "../context/RestaurantsContext";
import { RestaurantsCard } from "./RestaurantCard";

export const AllRestaurants = () => {
  const { restaurants, loading, error } = useRestaurants();

  return (
    <div className="py-5 container px-0">
      <h2 className="text-center text-uppercase mb-5">All Restaurants</h2>
      <div className="">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="row g-4">
          {restaurants &&
            restaurants.map((restaurant) => (
              <div key={restaurant.id} className="custom-col-5">
                <RestaurantsCard restaurant={restaurant} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
