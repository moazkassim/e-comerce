import axios from "axios";
import { Heart, RefreshCcw, Star, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import ErrorViewer from "../ErrorViewer";
import { Product as IProduct, useAppStore } from "../../stores/app-store";
import { toast } from "react-toastify";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardHeader,
  Container,
  Divider,
  IconButton,
  Link,
  ListItem,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  FavoriteBorder,
  Grade,
  LocalShipping,
  RestartAlt,
} from "@mui/icons-material";

export default function ProductDetails() {
  const addCartProduct = useAppStore((state) => state.addCartProduct);
  const params = useParams();
  console.log("params", params);
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  function handelAddToCart(product: IProduct) {
    addCartProduct(product);

    toast.success("Added to cart");
  }

  if (isLoading) {
    return (
      <div className="my-20 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (error || !product) {
    return <ErrorViewer errorMessage={error} />;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "40px",
      }}
    >
      <Container maxWidth={false}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" component={RouterLink} underline="hover" color="inherit">
            {product.category}
          </Link>

          <Typography>{product.title}</Typography>
        </Breadcrumbs>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "1.5rem",
            "@media (min-width: 768px)": {
              flexDirection: "row",
              gap: 0,
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              my: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "@media (min-width: 768px)": {
                width: "50%",
              },
            }}
          >
            <img
              className="max-w-[300px]"
              src={product.image}
              alt="product-image"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "15px",
              "@media (min-width: 768px)": {
                width: "40%",
              },
            }}
          >
            <Typography variant="h6">{product.title}</Typography>
            <ListItem
              disablePadding
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "4px",
              }}
            >
              <Grade sx={{ color: "#FFAD33" }} />
              <Grade sx={{ color: "#FFAD33" }} />
              <Grade sx={{ color: "#FFAD33" }} />
            </ListItem>
            <Typography variant="h6">$ {product.price}</Typography>
            <Typography variant="body1" sx={{ textWrap: "" }}>
              {product.description}
            </Typography>
            <Box className="h-[1px] w-full bg-gray-500"></Box>
            <Divider component="hr" />
            <Box
              sx={{
                display: "flex",
                gap: "0.75rem",
              }}
            >
              <Typography>Colours :</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    height: "1.25rem",
                    width: "1.25rem",
                    borderRadius: "50%",
                    backgroundColor: "#E07575",
                  }}
                />
                <Box
                  component="span"
                  sx={{
                    height: "1.25rem",
                    width: "1.25rem",
                    borderRadius: "50%",
                    backgroundColor: "#A0BCE0",
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "12px" }}>
              <Button
                sx={{ width: "160px", height: "40px" }}
                variant="contained"
                onClick={() => handelAddToCart(product)}
              >
                Buy Now
              </Button>
              <Box sx={{ border: "1px solid", borderRadius: "7px" }}>
                <IconButton sx={{ scale: "1.4" }}>
                  <FavoriteBorder />
                </IconButton>
              </Box>
            </Box>
            <Card variant="outlined">
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "transparent" }} aria-label="recipe">
                    <LocalShipping color="secondary" />
                  </Avatar>
                }
                title={
                  <Typography
                    sx={{
                      fontWeight: "500",
                    }}
                  >
                    Free Delivery
                  </Typography>
                }
                subheader={
                  <Typography
                    variant="body2"
                    sx={{
                      textDecoration: "underline",
                    }}
                  >
                    Enter your postal code for Delivery Availability
                  </Typography>
                }
              />
              <Divider component="hr" />
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "transparent" }} aria-label="recipe">
                    <RestartAlt color="secondary" />
                  </Avatar>
                }
                title={
                  <Typography
                    sx={{
                      fontWeight: "500",
                    }}
                  >
                    Return Delivery
                  </Typography>
                }
                subheader={
                  <Typography variant="body2">
                    Free 30 Days Delivery Returns. Details
                  </Typography>
                }
              />
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
