// context/RestaurantsContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import { RestaurantsProps } from "../types/RestaurantsProps";
import { useRestaurantStore } from "../store/restaurantStore";

interface RestaurantsContextType {
  restaurants: RestaurantsProps[];
  loading: boolean;
  error: string | null;
}

export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: [],
  loading: false,
  error: null,
});

export const RestaurantsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { restaurants, setRestaurants } = useRestaurantStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/restaurants");
        if (!response.ok) {
          throw new Error("Failed to fetch restaurants");
        }
        const data = await response.json();
        setRestaurants(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setRestaurants]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, loading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

export const useRestaurants = () => useContext(RestaurantsContext);
