import { useState } from "react";
import { Star } from "lucide-react";
import { toast } from "react-toastify";
import View_Product from "./ViewProduct";
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
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { Favorite, RemoveRedEye } from "@mui/icons-material";
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

  return (
    <Card
      sx={{
        display: "flex",
        width: "270px",
        flexDirection: "column",
        marginTop: "50px",
      }}
    >
      <ProductModal open={open} handleClose={handleClose} product={product} />

      <Box
        sx={{
          position: "relative",
          width: "270px",
          backgroundColor: "#F5F5F5",
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
            <Favorite color="secondary" />
          </IconButton>
          <IconButton>
            <RemoveRedEye color="secondary" onClick={handleOpen} />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "16rem",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "transparent",
          }}
        >
          <Link
            sx={{ textDecoration: "none" }}
            component={RouterLink}
            to={`/products/${product.id}`}
          >
            <CardMedia
              component="img"
              alt={product.title + "image"}
              image={product.image}
              sx={{
                marginTop: "1.25rem",
                height: "185px",
                width: "135px",
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
              borderRadius: "3px",
              fontSize: "1rem",
            }}
            color="primary"
            onClick={() => handelAddToCart(product)}
          >
            Add To Cart
          </Button>
        </Box>
      </Box>

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
        <Typography
          gutterBottom
          variant="h6"
          component="p"
          sx={{ color: "#DB4444" }}
        >
          {product.price} $
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.75rem",
          }}
        >
          <ListItem disablePadding sx={{ gap: "5px" }}>
            <Star size={18} color="#FFAD33" className="fill-[#FFAD33]" />
            <Star size={18} color="#FFAD33" className="fill-[#FFAD33]" />
            <Star size={18} color="#FFAD33" className="fill-[#FFAD33]" />
          </ListItem>

          <Typography
            gutterBottom
            variant="subtitle2"
            sx={{ fontSize: "14px", fontWeight: "600", opacity: "0.5" }}
          >
            ({Math.ceil(product.price + 12)})
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
