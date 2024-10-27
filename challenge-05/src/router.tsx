import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Welcome } from "./components/Welcome";
import { Navbar } from "./components/Navbar";
import { AllWorkouts } from "./components/AllWorkouts";
import { AddNewWorkout } from "./components/AddNewWorkout";
import { ErrorPage } from "./components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Welcome />,
      },
      {
        element: <Navbar />,
        children: [
          {
            path: "all-workouts",
            element: <AllWorkouts />,
          },
          {
            path: "add-new-workout",
            element: <AddNewWorkout />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
