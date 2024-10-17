import { Link, Outlet } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

export const Navbar = () => {
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
        <Link
          to={"/"}
          style={{ cursor: "pointer", textDecoration: "none", color: "white" }}
        >
          Logout
        </Link>
      </div>

      <Outlet />
    </>
  );
};
