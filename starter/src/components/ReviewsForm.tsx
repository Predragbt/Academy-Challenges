import { useState } from "react";

interface ReviewFormProps {
  onSubmit: (name: string, comment: string, stars: number) => void;
}

export const ReviewForm = ({ onSubmit }: ReviewFormProps) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [stars, setStars] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, comment, stars);

    // Clear the form fields after submission
    setName("");
    setComment("");
    setStars(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group d-flex flex-column">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="form-control w-100 rounded-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="comment" className="mt-4">
          Comment
        </label>
        <input
          type="text"
          name="comment"
          className="form-control w-100 rounded-2"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <label htmlFor="customRange2" className="form-label mt-4">
          Stars
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="5"
          id="customRange2"
          value={stars}
          onChange={(e) => setStars(Number(e.target.value))}
        />

        <button type="submit" className="btn btn-success rounded-2 mt-4">
          Leave a review
        </button>
      </div>
    </form>
  );
};
