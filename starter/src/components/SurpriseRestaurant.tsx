import { useNavigate } from "react-router-dom";
import { useRestaurants } from "../context/RestaurantsContext";

export const SurpriseRestaurant = () => {
  const navigate = useNavigate();
  const { restaurants } = useRestaurants();

  const handleSurpriseMe = () => {
    if (restaurants.length === 0) return;

    const randomRestaurant =
      restaurants[Math.floor(Math.random() * restaurants.length)];

    navigate(`/restaurant/${randomRestaurant.slug}`);
  };

  return (
    <div className="container px-0 py-4 border-bottom">
      <div>
        <h2 className="text-center text-uppercase">Don't know what to eat?</h2>
        <button
          className="btn btn-success w-100 mt-4 "
          onClick={handleSurpriseMe}
        >
          Surprise me!
        </button>
      </div>
    </div>
  );
};
