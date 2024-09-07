import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Link
      to={"/"}
      className="header-container d-flex justify-content-center align-items-center width-480"
    >
      <h1>MUSIC DB</h1>
    </Link>
  );
};
