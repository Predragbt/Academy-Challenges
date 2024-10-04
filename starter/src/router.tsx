import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Favorites } from "./components/Favorites";
import { AllRestaurants } from "./components/AllRestaurants";
import { RestaurantDetail } from "./components/RestaurantDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "favorites", element: <Favorites /> },
      { path: "/", element: <AllRestaurants /> },
      { path: "/restaurants/:slug", element: <RestaurantDetail /> },
    ],
  },
]);
