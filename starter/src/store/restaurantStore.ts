import { create } from "zustand";
import { RestaurantsProps } from "../context/RestaurantsContext";

interface RestaurantStoreState {
  getAverageRating: (restaurant: RestaurantsProps) => string | number;
  favorites: string[]; // Array to store favorite restaurant IDs
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useRestaurantStore = create<RestaurantStoreState>((set, get) => ({
  // Get average rating function
  getAverageRating: (restaurant: RestaurantsProps) => {
    const totalStars = restaurant.reviewsList.reduce(
      (total, review) => total + review.stars,
      0
    );
    const average = totalStars / restaurant.reviewsList.length;
    return Number.isInteger(average) ? average : average.toFixed(1);
  },

  // Favorites state management
  favorites: [],

  // Toggle favorite by adding/removing restaurant ID from favorites array
  toggleFavorite: (id: string) => {
    const { favorites } = get();
    if (favorites.includes(id)) {
      set({ favorites: favorites.filter((favId) => favId !== id) });
    } else {
      set({ favorites: [...favorites, id] });
    }
  },

  // Check if restaurant is a favorite
  isFavorite: (id: string) => {
    const { favorites } = get();
    return favorites.includes(id);
  },
}));
