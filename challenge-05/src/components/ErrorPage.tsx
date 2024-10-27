import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const ErrorPage = () => (
  <Container
    sx={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "column",
    }}
  >
    <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
      Page Not Found
    </Typography>
    <Typography variant="body1" sx={{ mb: 4 }}>
      Oops! The page you are looking for does not exist.
    </Typography>
    <Button variant="contained" component={Link} to="/" color="primary">
      Go Back to Home
    </Button>
  </Container>
);
