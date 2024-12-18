import { Box, Container, Typography } from "@mui/material";
import { useAppStore } from "../stores/app-store";

export const DividingHead = () => {
  const selectedCategory = useAppStore((state) => state.selectedCategory);
  return (
    <Box sx={{ marginY: "100px" }}>
      <Container maxWidth={false}>
        <Box
          sx={{
            alignItems: "flex-start",
            justifyContent: "space-between",
            borderBottom: "1px solid",
            opacity: "0.8",
            paddingY: "1rem",
            display: { xs: "block", md: "flex" },
          }}
        >
          <Box sx={{ maxWidth: "32rem" }}>
            <Typography variant="h6">
              {selectedCategory.toUpperCase()}
            </Typography>
            <Typography
              sx={{
                marginTop: "0.5rem",
              }}
            >
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assortment in categories
              ranging from consumer.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
//  {props.title.toUpperCase()}
