import { Button, Container, Grid, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Welcome = () => {
  const { user, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/all-workouts");
    }
  }, [user, navigate]);

  return (
    <Container
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Typography component="div">
            <img src="images/heroBanner.jpeg" alt="Hero Banner" />
          </Typography>
        </Grid>
        <Grid
          item
          xs={8}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography component="div">
            {" "}
            {/* Set component="div" here */}
            <h2>Your Fitness Journey Starts Here</h2>
            <Button variant="outlined" fullWidth onClick={loginWithGoogle}>
              Login
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
