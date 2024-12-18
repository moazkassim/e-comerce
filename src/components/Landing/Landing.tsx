import { Box, Container, Divider } from "@mui/material";
import CategoriesList from "./CategoriesList";
import Carousel from "./Carousel";
export default function Landing() {
  console.log("hi iam from landing");
  return (
    <Box sx={{}}>
      <Container maxWidth={false}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginTop: { md: "2.5rem" },
          }}
        >
          <CategoriesList />

          <Divider
            orientation="vertical"
            sx={{
              marginRight: "2.5rem",
              display: { xs: "none", lg: "flex" },
              width: "0.5px",
              backgroundColor: "black",
              opacity: 0.3,
            }}
            flexItem
          />
          <Carousel />
        </Box>
      </Container>
    </Box>
  );
}
