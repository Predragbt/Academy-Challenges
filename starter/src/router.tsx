import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Favorites } from "./components/Favorites";

import { RestaurantDetail } from "./components/RestaurantDetail";

import { HomePage } from "./components/HomePage";
import { CuisineDetail } from "./components/CuisineDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },

      { path: "favorites", element: <Favorites /> },

      { path: "/restaurant/:slug", element: <RestaurantDetail /> },

      {path: '/cuisine/:type', element: <CuisineDetail />},
    ],
  },
]);
