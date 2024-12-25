import { Box, Button, Container, Link, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
export default function NoMatch() {
  console.log("hi i am from no match");
  const navigate = useNavigate();
  return (
    <>
      <Box
        component="main"
        sx={{
          margin: 0,
          gap: "50px",
          display: "grid",
          height: "609px",
          minHeight: "100%",
          placeItems: "center",
          paddingX: "1.5rem",
          paddingY: "6rem",
          "@media (min-width: 640px)": {
            paddingY: "8rem",
          },
          "@media (min-width: 1024px)": {
            paddingX: "2rem",
          },
        }}
      >
        <Container
          sx={{
            textAlign: "center",
            gap: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography>404</Typography>
          <Typography variant="h2">Page not found</Typography>
          <Typography className="mt-6 text-base leading-7">
            Sorry, we couldn’t find the page you’re looking for.
          </Typography>
          <Box
            sx={{
              gap: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              name="go-to-home"
              onClick={() => navigate("/")}
            >
              Go back home
            </Button>
            <Link
              color="secondary"
              component={RouterLink}
              aria-label="contact-page"
              to="/contact"
              className="text-sm font-semibold"
            >
              Contact support
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
}
