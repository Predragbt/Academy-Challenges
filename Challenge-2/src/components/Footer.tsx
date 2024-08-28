import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer d-flex justify-content-between p-4">
      <div className="footer-section flex-1">
        <h5 className="fw-bold">Social share</h5>
        <div className="footer-icons d-flex align-items-center">
          <div className="footer-icon-box d-flex justify-content-center align-items-center me-2s p-2  ">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="footer-icon text-white"
            />
          </div>
          <div className="footer-icon-box d-flex justify-content-center align-items-center me-2 p-2">
            <FontAwesomeIcon
              icon={faInstagram}
              className="footer-icon text-white"
            />
          </div>
          <div className="footer-icon-box d-flex justify-content-center align-items-center me-2 p-2">
            <FontAwesomeIcon
              icon={faTwitter}
              className="footer-icon text-white"
            />
          </div>
          <div className="footer-icon-box d-flex justify-content-center align-items-center p-2">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="footer-icon text-white"
            />
          </div>
        </div>
      </div>
      <div className="footer-section">
        <h5 className="fw-bold">Event info</h5>
        <ul className="list-unstyled m-0">
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Enter Now
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Event Info
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Course Maps
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Race Pack
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Results
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              FAQs
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Am I Registered?
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h5 className="fw-bold">Registration</h5>
        <ul className="list-unstyled m-0">
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Volunteers
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Gallery
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Press
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Results
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Privacy Policy
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Service Plus
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Contacts
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h5 className="fw-bold">Schedule</h5>
        <ul className="list-unstyled m-0">
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Gallery
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              About
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Videos
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Results
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              FAQs
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Results
            </a>
          </li>
          <li className="m-0">
            <a
              href="#"
              className="text-decoration-none text-dark footer-hover-effect"
            >
              Volunteers
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
