import { createContext, useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { RestaurantsProps } from "../types/RestaurantsProps";

interface RestaurantsContextType {
  restaurants: RestaurantsProps[];
  loading: boolean;
  error: string | null;
}

// Always default restaurants to an empty array
export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: [], // Ensure restaurants is an empty array by default
  loading: false,
  error: null,
});

export const RestaurantsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    data: restaurants,
    error,
    loading,
  } = useFetch<RestaurantsProps[]>("http://localhost:5001/restaurants");

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants: restaurants || [], // Fallback to an empty array if data is null
        error,
        loading,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

export const useRestaurants = () => useContext(RestaurantsContext);
