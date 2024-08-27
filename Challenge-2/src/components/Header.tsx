import {
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-white mx-3">
      <div className="container-fluid">
        <div className="navbar-nav d-flex justify-content-between w-100">
          <div>
            <a
              className="nav-link fw-bold text-uppercase"
              aria-current="page"
              href="#"
            >
              <img src="../img/logo.png" alt="Logo" />
            </a>
          </div>
          <div className="d-flex align-items-center">
            <a
              className="nav-link fw-bold text-uppercase active"
              aria-current="page"
              href="#"
            >
              Home
            </a>
            <a className="nav-link fw-bold opacity-75 text-uppercase" href="#">
              Bikes
            </a>
            <a className="nav-link fw-bold opacity-75 text-uppercase" href="#">
              Gear
            </a>
            <a className="nav-link fw-bold opacity-75 text-uppercase" href="#">
              Parts
            </a>
            <a className="nav-link fw-bold opacity-75 text-uppercase" href="#">
              Tires
            </a>
            <a className="nav-link fw-bold opacity-75 text-uppercase" href="#">
              Service-Info
            </a>
            <a className="nav-link fw-bold opacity-75 text-uppercase" href="#">
              Catalogues
            </a>
            <a className="nav-link fw-bold opacity-75 text-uppercase" href="#">
              Contact
            </a>
          </div>
          <div className="d-flex align-items-center ms-3 me-2">
            <a className="nav-link fw-bold opacity-75 text-uppercase" href="#">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
            <a className="nav-link fw-bold opacity-75 text-uppercase" href="#">
              <FontAwesomeIcon icon={faBagShopping} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
