import { createBrowserRouter } from "react-router-dom";
import { ArtistsList } from "./components/ArtistsList";
import { ArtistPage } from "./components/ArtistPage";
import { AlbumPage } from "./components/AlbumPage";
import { ErrorPage } from "./components/ErrorPage";
import App from "./App";
import { ArtistTypes } from "./types";

export const createRouter = (artists: ArtistTypes[]) =>
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <ArtistsList artists={artists} />,
        },
        {
          path: "/artist/:id",
          element: <ArtistPage artists={artists} />,
        },
        {
          path: "/artist/:id/:albumId",
          element: <AlbumPage artists={artists} />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
