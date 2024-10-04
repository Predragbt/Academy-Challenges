import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="mx-5">
      <div className="container-fluid px-0 d-flex justify-content-between py-4 border-bottom">
        <Link to="/" className="fs-3 fw-bold text-decoration-none text-dark">
          RESTAURANT
        </Link>
        <Link to={"/favorites"} className="text-decoration-none">
          <FontAwesomeIcon icon={faHeart} className="text-danger fs-1" />
        </Link>
      </div>
    </div>
  );
};
