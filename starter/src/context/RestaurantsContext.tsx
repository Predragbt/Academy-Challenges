import { createContext, useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { RestaurantsProps } from "../types/RestaurantsProps";

interface RestaurantsContextType {
  restaurants: RestaurantsProps[] | null;
  loading: boolean;
  error: string | null;
}

export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: null,
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
    <RestaurantsContext.Provider value={{ restaurants, error, loading }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

export const useRestaurants = () => useContext(RestaurantsContext);
