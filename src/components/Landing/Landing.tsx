import { Box, Container, Divider } from "@mui/material";
import CategoriesList from "./CategoriesList";
import Carousel from "./Carousel";
export default function Landing() {
  console.log("hi iam from landing");
  return (
    <Box>
      <Container maxWidth={false}>
        <Box
          sx={{
            display: "flex",
            gap: "50px",
            width: "100%",
            marginTop: { md: "2.5rem" },
          }}
        >
          <CategoriesList />

          <Carousel />
        </Box>
      </Container>
    </Box>
  );
}
