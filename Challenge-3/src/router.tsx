import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import { ArtistsList } from "./components/ArtistsList";
import { ArtistPage } from "./components/ArtistPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ArtistsList />,
      },

      {
        path: "/artist/:id",
        element: <ArtistPage />,
      },
    ],
  },
]);
