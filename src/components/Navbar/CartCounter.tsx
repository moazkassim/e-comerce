import { useAppStore } from "@/stores/app-store";
import { Badge } from "@mui/material";

export const CartCounter = () => {
  const cartProducts = useAppStore((state) => state.cartProducts);
  return <Badge badgeContent={cartProducts.length} />;
};
