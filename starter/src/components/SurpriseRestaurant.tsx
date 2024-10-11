import { useNavigate } from "react-router-dom";
import { useRestaurants } from "../context/RestaurantsContext";

export const SurpriseRestaurant = () => {
  const navigate = useNavigate();
  const { restaurants } = useRestaurants(); // Get restaurants from the store

  // Function to handle the surprise button click
  const handleSurpriseMe = () => {
    if (restaurants.length === 0) return;

    // Pick a random restaurant
    const randomRestaurant =
      restaurants[Math.floor(Math.random() * restaurants.length)];

    // Navigate to the selected random restaurant's detail page
    navigate(`/restaurant/${randomRestaurant.slug}`);
  };

  return (
    <div className="container px-0 py-5 border-bottom">
      <div>
        <h2 className="text-center text-uppercase">Don't know what to eat?</h2>
        <button
          className="btn btn-success w-100 mt-5"
          onClick={handleSurpriseMe}
        >
          Surprise me!
        </button>
      </div>
    </div>
  );
};
