import { Box, Container, Typography } from "@mui/material";
import Sales from "../../../public/aboutImg/sales.jpg";
export default function About() {
  return (
    <Box
      component="section"
      sx={{
        marginY: "7rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "30px",

          "@media (min-width: 768px)": {
            flexDirection: "row",
          },
        }}
      >
        <Box
          sx={{
            "@media (min-width: 768px)": {
              maxWidth: "45%",
            },
          }}
        >
          <Typography
            component="h2"
            sx={{
              marginY: "1.5rem",
              fontSize: "1.5rem",
              fontWeight: 800,
            }}
          >
            About us
          </Typography>

          <Typography
            component="p"
            sx={{
              textAlign: "justify",
            }}
          >
            At SHOPLAND, we're passionate about redefining your shopping
            experience. Our mission is simple: to provide you with a seamless,
            secure, and enjoyable way to discover and purchase the products you
            love. With a commitment to quality, convenience, and customer
            satisfaction, we're here to make your online shopping journey
            memorable. Explore a world of possibilities at SHOPLAND, where your
            satisfaction is our top priority. Join us in shaping the future of
            e-commerce and let's embark on a shopping adventure together.
          </Typography>
        </Box>

        <Box
          sx={{
            "@media (min-width: 768px)": {
              maxWidth: "45%",
            },
          }}
        >
          <img src={Sales} alt="about-us-image" />
        </Box>
      </Container>
    </Box>
  );
}
