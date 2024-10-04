// src/index.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Adding Bootstrap
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router"; // Import your router setup
import { RestaurantsProvider } from "./context/RestaurantsContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <RestaurantsProvider>
      <RouterProvider router={router} />
    </RestaurantsProvider>
  </StrictMode>
);
