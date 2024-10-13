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
  addReview: (restaurantId: string, newReview: Review) => void;
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

      addReview: (restaurantId: string, newReview: Review) => {
        const { restaurants } = get();
        const restaurant = restaurants.find((r) => r.id === restaurantId);
        if (!restaurant) return;

        const updatedRestaurant = {
          ...restaurant,
          reviewsList: [...restaurant.reviewsList, newReview],
        };

        // Update the state with the new review
        set((state) => ({
          restaurants: state.restaurants.map((r) =>
            r.id === restaurantId ? updatedRestaurant : r
          ),
        }));
      },
    }),
    {
      name: "restaurant-favorites",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
