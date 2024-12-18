import { useState } from "react";
import Cart from "../Cart/Cart";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppStore } from "@/stores/app-store";
export const CartViewer = () => {
  const [cartVisible, setCartVisible] = useState<boolean>(false);
  function toggleCartVisible() {
    setCartVisible((prev) => !prev);
  }
  const cartProducts = useAppStore((state) => state.cartProducts);
  return (
    <Badge
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      badgeContent={cartProducts.length}
      color="primary"
      showZero
      max={999}
    >
      <Cart cartVisible={cartVisible} setCartVisible={setCartVisible} />
      <IconButton onClick={toggleCartVisible}>
        <ShoppingCartIcon sx={{ color: "white" }} />
      </IconButton>
    </Badge>
  );
};
