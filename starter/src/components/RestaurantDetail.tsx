import { useParams } from "react-router";
import { useRestaurants } from "../context/RestaurantsContext";
import { useRestaurantStore } from "../store/restaurantStore";

export const RestaurantDetail = () => {
  const { restaurants, loading, error } = useRestaurants();
  const { slug } = useParams();
  const { getAverageRating } = useRestaurantStore();

  const restaurant = restaurants?.find(
    (restaurant) => restaurant.slug === slug
  );

  if (!restaurant) {
    return <p>Restaurant not found</p>;
  }

  return (
    <div className="m-5">
      <h1 className="text-center text-uppercase mb-5">{restaurant.businessname}</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="card bg-light border-0 rounded-3">
        <img
          src={restaurant.image}
          alt={restaurant.businessname}
          className="card-img-top rounded-3"
          style={{ objectFit: "cover" }}
        />

        <div className="card-body">
          {restaurant.reviewsList.length > 0 && (
            <>
              <p className="mt-1">rating - {getAverageRating(restaurant)}</p>
              <p>Based on {restaurant.reviewsList.length} reviews</p>
            </>
          )}
          <p className="mt-2">{restaurant.phone}</p>
          <p className="mt-2">{restaurant.email}</p>
          <p className="mt-2">{restaurant.address}</p>

          {restaurant.parkinglot && (
            <p className="mt-2">We have a parking lot waiting for you.</p>
          )}
        </div>
      </div>
    </div>
  );
};
