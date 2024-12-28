import { useState } from "react";
import { toast } from "react-toastify";
import { Product as IProduct, useAppStore } from "../../stores/app-store";
import { useShallow } from "zustand/shallow";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  ListItem,
  Rating,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { Favorite, RemoveRedEye, Grade } from "@mui/icons-material";
import ProductModal from "./ProductModal";
interface ProductProps {
  product: IProduct;
}
export default function Product(props: ProductProps) {
  const { product } = props;

  const { addCartProduct } = useAppStore(
    useShallow((state) => ({
      addCartProduct: state.addCartProduct,
      cartProducts: state.cartProducts,
    })),
  );
  function handelAddToCart(product: IProduct) {
    addCartProduct(product);
    toast.success("Added to cart");
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = useState<number | null>(2);
  return (
    <Box
      sx={{
        display: "flex",
        width: "270px",
        flexDirection: "column",
        marginTop: "50px",
      }}
    >
      <ProductModal open={open} handleClose={handleClose} product={product} />

      <Card
        sx={{
          position: "relative",
          width: "270px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            right: "0px",
            top: "0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            justifyContent: "center",
          }}
        >
          <IconButton>
            <Favorite color="primary" />
          </IconButton>
          <IconButton onClick={handleOpen}>
            <RemoveRedEye color="primary" />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "270px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            sx={{ textDecoration: "none" }}
            component={RouterLink}
            to={`/products/${product.id}`}
          >
            <CardMedia
              component="img"
              color="inherit"
              alt={product.title + "image"}
              image={product.image}
              sx={{
                marginTop: "1.25rem",
                height: "175px",
                width: "125px",
                objectFit: "scale-down",
              }}
            />
          </Link>
          <Button
            name="add-to-cart"
            variant="contained"
            sx={{
              height: "2.5rem",
              width: "270px",

              fontSize: "1rem",
            }}
            color="primary"
            onClick={() => handelAddToCart(product)}
          >
            Add To Cart
          </Button>
        </Box>
      </Card>

      <CardContent
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "5px",
          paddingX: "10px",
        }}
      >
        <Link
          sx={{ textDecoration: "none" }}
          component={RouterLink}
          to={`/products/${product.id}`}
        >
          <Typography
            color="secondary"
            gutterBottom
            variant="h5"
            component="p"
            sx={{
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "500",
            }}
          >
            {product.title.split(" ").slice(0, 4).join(" ")}
          </Typography>
        </Link>
        <Typography gutterBottom variant="body2" component="p">
          {product.price} $
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />

          <Typography
            gutterBottom
            variant="subtitle2"
            sx={{ fontSize: "14px", fontWeight: "600", opacity: "0.5" }}
          >
            ({Math.ceil(product.price + 12)})
          </Typography>
        </Box>
      </CardContent>
    </Box>
  );
}
