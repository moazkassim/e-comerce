import { toast } from "react-toastify";
import { useShallow } from "zustand/shallow";
import {
  useAppStore,
  CartProduct as ICartProduct,
} from "../../stores/app-store";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import { Add, Remove } from "@mui/icons-material";

interface CartProductProps {
  product: ICartProduct;
}
export default function CartProduct(props: CartProductProps) {
  console.log("iam from cart product");
  const { removeCartProduct, addCartProduct, decreaseProductQuantity } =
    useAppStore(
      useShallow((state) => ({
        removeCartProduct: state.removeCartProduct,
        addCartProduct: state.addCartProduct,
        decreaseProductQuantity: state.decreaseProductQuantity,
      })),
    );
  const { product } = props;

  return (
    <Card
      key={product.id}
      sx={{
        position: "relative",
        zIndex: 40,
        display: "flex",
        width: "100%",
        minWidth: "24rem",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        borderStyle: "solid",
      }}
    >
      <CardMedia
        sx={{
          padding: "10px",
          maxWidth: "85px",
        }}
      >
        <Box
          sx={{
            maxWidth: "85px",
          }}
        >
          <img
            className="max-h-[95px] max-w-[85px] object-scale-down"
            src={product.image}
            alt="cart-image"
          />
        </Box>
      </CardMedia>
      <CardContent
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "0.5rem",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "0.875rem",
                fontWeight: 500,
                opacity: 0.8,
              }}
            >
              {product.title.split(" ").slice(0, 2).join(" ")}
            </Typography>
            <Typography variant="body2" sx={{ opacity: "0.6" }}>
              Salmon
            </Typography>
          </Box>
          <Typography sx={{ padding: "0px" }}>${product.price}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CardActions>
              <IconButton
                size="small"
                onClick={() => {
                  decreaseProductQuantity(product);
                }}
              >
                <Remove />
              </IconButton>
            </CardActions>
            <Typography>{product.quantity}</Typography>
            <CardActions>
              <IconButton
                onClick={() => {
                  addCartProduct(product);
                }}
              >
                <Add />
              </IconButton>
            </CardActions>
          </Box>
          <CardActions>
            <Button
              name="remove-button"
              onClick={() => {
                removeCartProduct(product);
                toast.success("Item removed");
              }}
            >
              Remove
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
}
