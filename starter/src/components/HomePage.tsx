import { AllRestaurants } from "./AllRestaurants";
import { Cuisines } from "./Cuisines";
import { PopularRestaurants } from "./PopularRestaurants";

export const HomePage = () => {
  return (
    <div>
      <PopularRestaurants />
      <Cuisines />
      <AllRestaurants />
    </div>
  );
};
