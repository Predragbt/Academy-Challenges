import { create } from "zustand";
import { RestaurantsProps } from "../context/RestaurantsContext";

interface RestaurantStoreState {
  getAverageRating: (restaurant: RestaurantsProps) => string | number;
}

export const useRestaurantStore = create<RestaurantStoreState>((set) => ({
  getAverageRating: (restaurant: RestaurantsProps) => {
    const totalStars = restaurant.reviewsList.reduce(
      (total, review) => total + review.stars,
      0
    );
    const average = totalStars / restaurant.reviewsList.length;
    return Number.isInteger(average) ? average : average.toFixed(1);
  },
}));
