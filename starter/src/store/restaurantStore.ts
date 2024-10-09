import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { RestaurantsProps } from "../types/RestaurantsProps"; // Assuming RestaurantsProps is in a separate file

interface Review {
  id: number;
  author: string;
  comment: string;
  stars: number;
}

interface RestaurantStoreState {
  restaurants: RestaurantsProps[]; // Store list of restaurants
  favorites: string[]; // Store favorite restaurant IDs
  toggleFavorite: (id: string) => void; // Toggle favorite restaurant
  isFavorite: (id: string) => boolean; // Check if restaurant is a favorite
  getAverageRating: (restaurant: RestaurantsProps) => string | number; // Calculate average rating
  top10Restaurants: (restaurants: RestaurantsProps[]) => RestaurantsProps[]; // Get top 10 restaurants
  filterByType: (
    restaurants: RestaurantsProps[],
    type: string
  ) => RestaurantsProps[]; // Filter restaurants by type
  addReview: (
    restaurants: RestaurantsProps[],
    restaurantId: string,
    newReview: Review
  ) => Promise<void>; // Add a review to a restaurant
}

export const useRestaurantStore = create<RestaurantStoreState>()(
  persist(
    (set, get) => ({
      // Initialize restaurants and favorites state
      restaurants: [],
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

      // Add a review to a restaurant
      addReview: async (
        restaurants: RestaurantsProps[],
        restaurantId: string,
        newReview: Review
      ) => {
        // Find the restaurant in the array
        const restaurant = restaurants.find((r) => r.id === restaurantId);
        if (!restaurant) return;

        // Update the restaurant's reviews list
        const updatedRestaurant = {
          ...restaurant,
          reviewsList: [...restaurant.reviewsList, newReview],
        };

        // Make a PUT request to update the restaurant on the backend
        await fetch(`http://localhost:5001/restaurants/${restaurantId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedRestaurant),
        });

        // Update the local state in Zustand
        set((state) => ({
          restaurants: state.restaurants.map((r) =>
            r.id === restaurantId ? updatedRestaurant : r
          ),
        }));
      },
    }),
    {
      name: "restaurant-favorites", // Key name in localStorage
      storage: createJSONStorage(() => localStorage), // Use localStorage for persistence
    }
  )
);
