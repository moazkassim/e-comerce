import { Facebook, GitHub, Instagram, X } from "@mui/icons-material";
import {
  BottomNavigation,
  Box,
  Container,
  Link,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "black", paddingY: "50px" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "25px",
            justifyContent: "center",
            alignItems: "center",
            marginX: "20px",
            marginY: "8px",
          }}
        >
          <Link
            component={RouterLink}
            to="/about"
            aria-label="about-page"
            sx={{ textDecoration: "none", color: "#9e9e9e " }}
          >
            About
          </Link>

          <Link
            sx={{ textDecoration: "none", color: "#9e9e9e " }}
            component={RouterLink}
            to="./contact"
            aria-label="contact-page"
          >
            Contact
          </Link>
        </Box>
        <Box
          sx={{
            marginY: "15px",
            display: "flex",
            justifyItems: "center",
            gap: "25px",
          }}
        >
          <Link aria-label="facebook" href="https://www.facebook.com/">
            <Facebook />
          </Link>
          <Link href="https://www.instagram.com/" aria-label="instagram">
            <Instagram />
          </Link>
          <Link href="https://www.twitter.com/" aria-label="twitter">
            <X />
          </Link>
          <Link href="https://github.com/" aria-label="GitHub">
            <GitHub />
          </Link>
        </Box>
        <Typography
          variant="body1"
          gutterBottom
          sx={{ display: "block", color: "#9e9e9e " }}
          className="text-center text-base leading-6 text-gray-400"
        >
          © 2024 Moaz Kassim: Haya Solutions Inc.
        </Typography>
      </Container>
    </Box>
  );
}
