import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useRestaurants } from "../context/RestaurantsContext";
import { useRestaurantStore } from "../store/restaurantStore";
import { ReviewForm } from "./ReviewsForm";
import { RestaurantsProps } from "../types/RestaurantsProps";

export const RestaurantDetail = () => {
  const { restaurants, loading, error } = useRestaurants();
  const { slug } = useParams();
  const { getAverageRating, addReview } = useRestaurantStore();
  const [restaurant, setRestaurant] = useState<RestaurantsProps | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const foundRestaurant = restaurants.find((r) => r.slug === slug);
    setRestaurant(foundRestaurant || null);
  }, [restaurants, slug]);

  if (!restaurant) {
    return <p>Restaurant not found</p>;
  }

  const handleReviewSubmit = async (
    name: string,
    comment: string,
    stars: number
  ) => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const newReview = {
        id: +new Date(),
        author: name,
        comment,
        stars,
      };

      await addReview(restaurants, restaurant.id, newReview);

      setRestaurant((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          reviewsList: [...prev.reviewsList, newReview],
        };
      });
    } catch (error) {
      setErrorMessage("Failed to add the review.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container px-0 py-5">
      <h2 className="text-center text-uppercase mb-5">
        {restaurant.businessname}
      </h2>

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
              <p className="mt-1">Rating - {getAverageRating(restaurant)}</p>
              <p>Based on {restaurant.reviewsList.length} reviews</p>
            </>
          )}
          <p className="mt-2">Phone: {restaurant.phone}</p>
          <p className="mt-2">Email: {restaurant.email}</p>
          <p className="mt-2">Address: {restaurant.address}</p>

          {restaurant.parkinglot && (
            <p className="mt-2">We have a parking lot waiting for you.</p>
          )}
        </div>
      </div>

      {restaurant.reviewsList.length > 0 && (
        <>
          <h2 className="text-center text-uppercase my-5">Reviews</h2>
          <ul className="list-group">
            {restaurant.reviewsList.map((review) => (
              <li
                key={review.id}
                className="list-group-item list-group-item-light border-0 mb-4 rounded-3"
              >
                <p>
                  <span className="fw-bold">Author:</span> {review.author}
                </p>
                <p>
                  <span className="fw-bold">Message:</span> {review.comment}
                </p>
                <p>
                  <span className="fw-bold">Stars:</span> {review.stars}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}

      <h2 className="text-center text-uppercase my-5">Review Form</h2>
      <ReviewForm onSubmit={handleReviewSubmit} />

      {isSubmitting && <p>Submitting your review...</p>}
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
    </div>
  );
};
