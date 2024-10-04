import { Link } from "react-router-dom";
import { RestaurantsProps } from "../context/RestaurantsContext";
import { useRestaurantStore } from "../store/restaurantStore"; // Import Zustand store

export const RestaurantsCard = ({
  restaurant,
}: {
  restaurant: RestaurantsProps;
}) => {
  const { getAverageRating } = useRestaurantStore(); // Get rating function from Zustand

  return (
    <Link
      to={`/restaurants/${restaurant.slug}`}
      className="card h-100 bg-light border-0 rounded-3 overflow-hidden text-decoration-none"
    >
      <img
        src={restaurant.image}
        className="card-img-top rounded-3"
        alt={restaurant.businessname}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body ">
        <h5 className="card-title fw-bold">{restaurant.businessname}</h5>
        <p className="card-text text-danger fw-bold">
          {restaurant.restauranttype}
        </p>

        {restaurant.reviewsList.length > 0 && (
          <>
            <p className="mt-4 fs-5">
              Rating - {getAverageRating(restaurant)},
            </p>
            <p>Based on {restaurant.reviewsList.length} reviews</p>
          </>
        )}
      </div>
    </Link>
  );
};
