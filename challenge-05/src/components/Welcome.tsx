import { Button, Container, Grid, Grid2, Typography } from "@mui/material";
// Use Grid2 from the next version

export const Welcome = () => (
  <Container
    sx={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Grid2 container spacing={2} columns={16}>
      <Grid item xs={8}>
        <Typography>
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
        <Typography>
          <h2>Your Fitness Journey Starts Here</h2>
          <Button variant="outlined" fullWidth>
            Login
          </Button>
        </Typography>
      </Grid>
    </Grid2>
  </Container>
);
