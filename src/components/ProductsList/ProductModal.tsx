import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Product as IProduct, useAppStore } from "@/stores/app-store";
import { useShallow } from "zustand/shallow";
import { toast } from "react-toastify";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface IProductModal {
  handleClose: () => void;
  open: boolean;
  product: IProduct;
}

export default function ProductModal(props: IProductModal) {
  const { handleClose, open, product } = props;
  const { addCartProduct } = useAppStore(
    useShallow((state) => ({
      addCartProduct: state.addCartProduct,
    })),
  );
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box>
            <img
              alt="product img"
              src={product.image}
              className="max-h-1/2 scale-75"
            />
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "6px",
              paddingX: "8px",
            }}
          >
            <Typography color="primary" variant="h6">
              {product.title}
            </Typography>
            <Typography variant="body1">{product.category}</Typography>
            <Typography variant="body2">{product.description}</Typography>
            <Typography variant="button" sx={{ color: "#e53935 " }}>
              ${product.price}
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                color="secondary"
                onClick={() => {
                  addCartProduct(product);
                  toast.success("Added to cart");
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>

          {/* Close Button */}
        </Box>
      </Modal>
    </div>
  );
}
