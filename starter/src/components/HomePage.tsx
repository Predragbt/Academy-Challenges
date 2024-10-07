import { AllRestaurants } from "./AllRestaurants";
import { Cuisines } from "./Cuisines";
import { PopularRestaurants } from "./PopularRestaurants";
import { SurpriseRestaurant } from "./SurpriseRestaurant";

export const HomePage = () => {
  return (
    <div>
      <SurpriseRestaurant />
      <PopularRestaurants />
      <Cuisines />
      <AllRestaurants />
    </div>
  );
};
