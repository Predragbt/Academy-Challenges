import { Link } from "react-router-dom";
import { useRestaurantStore } from "../store/restaurantStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { RestaurantsProps } from "../types/RestaurantsProps";

export const RestaurantsCard = ({
  restaurant,
}: {
  restaurant: RestaurantsProps;
}) => {
  const { getAverageRating, isFavorite, toggleFavorite } = useRestaurantStore();

  const isFav = isFavorite(restaurant.id);

  return (
    <Link
      to={`/restaurant/${restaurant.slug}`}
      className="card h-100 bg-light border-0 rounded-3 overflow-hidden text-decoration-none"
    >
      <div
        className="position-absolute top-0 start-0 fs-2 text-danger ms-2"
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(restaurant.id);
        }}
      >
        <FontAwesomeIcon icon={isFav ? faSolidHeart : faRegularHeart} />{" "}
      </div>

      <img
        src={restaurant.image}
        className="card-img-top rounded-3"
        alt={restaurant.businessname}
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{restaurant.businessname}</h5>
        <p className="card-text text-danger fw-bold">
          {restaurant.restauranttype}
        </p>

        {restaurant.reviewsList.length > 0 && (
          <div className="mt-auto">
            <p className="mt-4 fs-5">
              Rating - {getAverageRating(restaurant)},
            </p>
            <p>Based on {restaurant.reviewsList.length} reviews</p>
          </div>
        )}
      </div>
    </Link>
  );
};
