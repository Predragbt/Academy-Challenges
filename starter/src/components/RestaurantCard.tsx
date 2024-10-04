import { Link } from "react-router-dom";
import { RestaurantsProps } from "../context/RestaurantsContext";
import { useRestaurantStore } from "../store/restaurantStore"; // Import Zustand store
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons"; // Regular heart for not favorited

export const RestaurantsCard = ({
  restaurant,
}: {
  restaurant: RestaurantsProps;
}) => {
  const { getAverageRating, isFavorite, toggleFavorite } = useRestaurantStore(); // Get Zustand store functions

  const isFav = isFavorite(restaurant.id); // Check if this restaurant is a favorite

  return (
    <Link
      to={`/restaurants/${restaurant.slug}`}
      className="card h-100 bg-light border-0 rounded-3 overflow-hidden text-decoration-none"
    >
      <div
        className="position-absolute top-0 start-0 fs-2 text-danger ms-2"
        onClick={(e) => {
          e.preventDefault(); // Prevent the Link from firing when clicking the heart
          toggleFavorite(restaurant.id); // Toggle favorite status
        }}
      >
        <FontAwesomeIcon icon={isFav ? faSolidHeart : faRegularHeart} />{" "}
        {/* Show filled heart if favorited, regular heart if not */}
      </div>

      <img
        src={restaurant.image}
        className="card-img-top rounded-3"
        alt={restaurant.businessname}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body">
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
