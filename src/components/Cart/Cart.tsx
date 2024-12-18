import CartProduct from "./CartProduct";

import { useAppStore } from "../../stores/app-store";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/shallow";
import { Box, Button, Card, Typography } from "@mui/material";

interface CartProps {
  cartVisible: boolean;
  setCartVisible: (cartVisible: boolean) => void;
}
export default function Cart(props: CartProps) {
  const { cartProducts, userToken } = useAppStore(
    useShallow((state) => ({
      cartProducts: state.cartProducts,
      userToken: state.userToken,
    })),
  );
  const { cartVisible, setCartVisible } = props;
  let navigate = useNavigate();
  if (!cartVisible) {
    return null;
  }

  return (
    <Card
      sx={{
        position: "absolute",
        alignContent: "center",
        right: "0px",
        top: "55px",
        zIndex: 50,
        display: "block",
        width: {
          xs: "100%",
          md: "24rem",
        },
        flexDirection: "column",
        borderRadius: "0.25rem",
      }}
    >
      {cartProducts.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {cartProducts.map((product, index) => {
            return <CartProduct key={index} product={product} />;
          })}
          <Button
            sx={{
              my: "20px",

              width: "152px",
              borderRadius: "2px",
              backgroundColor: "#DB4444",
              fontSize: "1rem",

              color: "white",
              transitionDuration: "100ms",
              transitionTimingFunction: "ease-in",
              "&:hover": {
                backgroundColor: "#B71F3B",
              },
            }}
            onClick={() => {
              if (userToken) {
                navigate("/checkout");
              } else {
                navigate("/login");
              }
              setCartVisible(false);
            }}
          >
            Checkout
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            zIndex: 40,
            display: "flex",
            height: "3rem",
            width: "100%",
            minWidth: "24rem",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontSize: "1.125rem",
            }}
          >
            Your Cart is empty
          </Typography>
        </Box>
      )}
    </Card>
  );
}
