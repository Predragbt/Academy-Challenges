import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="error-page">
      <p>Page not found. Go back to <Link to="/">Home page</Link></p>
    </div>
  );
};
