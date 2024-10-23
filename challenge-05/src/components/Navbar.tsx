import { Link, Outlet, useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "25px",
          backgroundColor: "#2979ff",
          color: "white",
          fontSize: "20px",
        }}
      >
        <Link
          to={"/all-workouts"}
          style={{ cursor: "pointer", textDecoration: "none", color: "white" }}
        >
          <FitnessCenterIcon style={{ scale: "1.3" }} />
        </Link>
        <Link
          to={"/add-new-workout"}
          style={{ cursor: "pointer", textDecoration: "none", color: "white" }}
        >
          <AddIcon style={{ scale: "1.5" }} />
        </Link>
        <span
          onClick={handleLogout}
          style={{ cursor: "pointer", textDecoration: "none", color: "white" }}
        >
          Logout
        </span>
      </div>

      <Outlet />
    </>
  );
};
