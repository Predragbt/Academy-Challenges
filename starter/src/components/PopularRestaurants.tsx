// components/PopularRestaurants.tsx
import { useEffect, useState } from "react";
import { useRestaurantStore } from "../store/restaurantStore";
import { RestaurantsCard } from "./RestaurantCard";
import { RestaurantsProps } from "../types/RestaurantsProps";

export const PopularRestaurants = () => {
  const { top10Restaurants, restaurants } = useRestaurantStore();
  const [popularRestaurants, setPopularRestaurants] = useState<
    RestaurantsProps[]
  >([]);

  useEffect(() => {
    setPopularRestaurants(top10Restaurants());
  }, [restaurants]);

  return (
    <div className="container px-0 py-5">
      <h2 className="text-center text-uppercase mb-5">
        Our Most Popular Restaurants
      </h2>
      <div className="row g-4">
        {popularRestaurants.length > 0 ? (
          popularRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="custom-col-5">
              <RestaurantsCard restaurant={restaurant} />
            </div>
          ))
        ) : (
          <p className="text-center w-100">
            No popular restaurants available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};
