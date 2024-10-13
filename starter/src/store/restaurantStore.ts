// store/restaurantStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { RestaurantsProps } from "../types/RestaurantsProps";

interface Review {
  id: number;
  author: string;
  comment: string;
  stars: number;
}

interface RestaurantStoreState {
  restaurants: RestaurantsProps[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  getAverageRating: (restaurant: RestaurantsProps) => number;
  top10Restaurants: () => RestaurantsProps[];
  filterByType: (type: string) => RestaurantsProps[];
  addReview: (restaurantId: string, newReview: Review) => Promise<void>;
  setRestaurants: (restaurants: RestaurantsProps[]) => void;
}

export const useRestaurantStore = create<RestaurantStoreState>()(
  persist(
    (set, get) => ({
      restaurants: [],
      favorites: [],

      setRestaurants: (restaurants: RestaurantsProps[]) => {
        set({ restaurants });
      },

      toggleFavorite: (id: string) => {
        const { favorites } = get();
        const updatedFavorites = favorites.includes(id)
          ? favorites.filter((favId) => favId !== id)
          : [...favorites, id];
        set({ favorites: updatedFavorites });
      },

      isFavorite: (id: string) => {
        const { favorites } = get();
        return favorites.includes(id);
      },

      getAverageRating: (restaurant: RestaurantsProps) => {
        const totalStars = restaurant.reviewsList.reduce(
          (total, review) => total + review.stars,
          0
        );
        return restaurant.reviewsList.length === 0
          ? 0
          : parseFloat((totalStars / restaurant.reviewsList.length).toFixed(1));
      },

      top10Restaurants: () => {
        const { restaurants } = get();
        return restaurants
          .slice()
          .sort((a, b) => get().getAverageRating(b) - get().getAverageRating(a))
          .slice(0, 10);
      },

      filterByType: (type: string) => {
        const { restaurants } = get();
        return restaurants.filter(
          (restaurant) => restaurant.restauranttype === type
        );
      },

      addReview: async (restaurantId: string, newReview: Review) => {
        const { restaurants } = get();
        const restaurant = restaurants.find((r) => r.id === restaurantId);
        if (!restaurant) return;

        const updatedRestaurant = {
          ...restaurant,
          reviewsList: [...restaurant.reviewsList, newReview],
        };

        // Update the local state immediately
        set((state) => ({
          restaurants: state.restaurants.map((r) =>
            r.id === restaurantId ? updatedRestaurant : r
          ),
        }));

        try {
          // Persist the new review with a PUT request
          const response = await fetch(
            `http://localhost:5001/restaurants/${restaurantId}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedRestaurant),
            }
          );

          if (!response.ok) {
            throw new Error(
              `Failed to update restaurant: ${response.statusText}`
            );
          }

          const updatedData = await response.json();

          // Update the local state again with the latest data from the server
          set((state) => ({
            restaurants: state.restaurants.map((r) =>
              r.id === restaurantId ? updatedData : r
            ),
          }));
        } catch (error) {
          console.error("Error updating restaurant review:", error);
          alert("Failed to add review. Please try again.");
        }
      },
    }),
    {
      name: "restaurant-favorites",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
