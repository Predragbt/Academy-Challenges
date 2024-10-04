import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { RestaurantsProps } from "../types/RestaurantsProps"; // Assuming RestaurantsProps is in a separate file

interface RestaurantStoreState {
  favorites: string[]; // Store favorite restaurant IDs
  toggleFavorite: (id: string) => void; // Toggle favorite restaurant
  isFavorite: (id: string) => boolean; // Check if restaurant is a favorite
  getAverageRating: (restaurant: RestaurantsProps) => string | number; // Calculate average rating
  top10Restaurants: (restaurants: RestaurantsProps[]) => RestaurantsProps[]; // Get top 10 restaurants
  filterByType: (
    restaurants: RestaurantsProps[],
    type: string
  ) => RestaurantsProps[]; // Filter restaurants by type
}

export const useRestaurantStore = create<RestaurantStoreState>()(
  persist(
    (set, get) => ({
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

      // Check if a restaurant is a favorite
      isFavorite: (id: string) => {
        const { favorites } = get();
        return favorites.includes(id);
      },

      // Calculate average rating for a restaurant
      getAverageRating: (restaurant: RestaurantsProps) => {
        const totalStars = restaurant.reviewsList.reduce(
          (total, review) => total + review.stars,
          0
        );
        const average = totalStars / restaurant.reviewsList.length;
        return Number.isInteger(average) ? average : average.toFixed(1);
      },

      // Get top 10 restaurants based on average rating
      top10Restaurants: (restaurants: RestaurantsProps[]) => {
        return restaurants
          .slice() // Make a shallow copy of the array
          .sort(
            (a, b) =>
              Number(get().getAverageRating(b)) -
              Number(get().getAverageRating(a))
          )
          .slice(0, 10); // Get the top 10 restaurants
      },

      // Filter restaurants by type
      filterByType: (restaurants: RestaurantsProps[], type: string) => {
        return restaurants.filter(
          (restaurant) => restaurant.restauranttype === type
        );
      },
    }),
    {
      name: "restaurant-favorites", // Key name in localStorage
      storage: createJSONStorage(() => localStorage), // Use localStorage for persistence
    }
  )
);
