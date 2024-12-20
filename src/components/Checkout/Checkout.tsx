import { useAppStore } from "../../stores/app-store";
import { Minus, Plus } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardMedia,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";
interface BillingData {
  firstName: string;
  companyName?: string;
  address: string;
  apartment?: string;
  city: string;
  Phone: number;
  Email: string;
  saveInformationStatus: boolean;
}

export default function Checkout() {
  const { cartProducts, decreaseProductQuantity, addCartProduct } = useAppStore(
    useShallow((state) => ({
      cartProducts: state.cartProducts,
      decreaseProductQuantity: state.decreaseProductQuantity,
      addCartProduct: state.addCartProduct,
    })),
  );
  const onInvalid = (errors) => {
    console.log(errors);
  };
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingData>({
    mode: "onChange",
    delayError: 400,
  });
  const onSubmit: SubmitHandler<BillingData> = (data) => console.log(data);

  let totalPrice: number = 0;
  cartProducts.forEach((product) => {
    totalPrice += product.price * product.quantity;
  });

  return (
    <Box>
      <Container
        maxWidth={false}
        sx={{
          padding: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Breadcrumbs aria-label="breadcrumb" sx={{ marginY: "20px" }}>
          <Link component={RouterLink} underline="hover" color="inherit" to="/">
            Account
          </Link>
          <Link component={RouterLink} underline="hover" color="inherit" to="/">
            Products
          </Link>
          <Link component={RouterLink} underline="hover" color="inherit" to="/">
            view Cart
          </Link>
          <Typography sx={{ color: "text.primary" }}>Checkout</Typography>
        </Breadcrumbs>

        <Typography variant="h4">Billing Details</Typography>

        <Box
          sx={{
            marginBottom: "5rem",
            display: "flex",
            flexDirection: "column",
            gap: "5rem",
            "@media (min-width: 768px)": {
              flexDirection: "row",
              justifyContent: "space-between",
            },
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              "@media (min-width: 768px)": {
                width: "40%",
              },
            }}
            onSubmit={handleSubmit(onSubmit, onInvalid)}
          >
            <Box sx={{ width: 600, maxWidth: "100%" }}>
              <Controller
                control={control}
                name="firstName"
                rules={{
                  minLength: {
                    value: 4,
                    message: "First name must  be more than 4 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z\s-]+$/,
                    message:
                      "Name must only contain letters, spaces, or hyphens",
                  },
                }}
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    required
                    fullWidth
                    onChange={onChange}
                    label="First Name"
                    id="firstName-input"
                    type="text"
                    autoComplete="current-firstName"
                    onBlur={onBlur}
                    value={value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Box>
            <Box sx={{ width: 600, maxWidth: "100%" }}>
              <Controller
                control={control}
                name="companyName"
                rules={{
                  maxLength: {
                    value: 12,
                    message: "Company name must not exceed 100 characters",
                  },
                }}
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    required
                    fullWidth
                    onChange={onChange}
                    label="Company Name"
                    id="companyName-input"
                    type="text"
                    onBlur={onBlur}
                    value={value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Box>

            <Box sx={{ width: 600, maxWidth: "100%" }}>
              <Controller
                control={control}
                name="address"
                rules={{
                  required: "Address is required",
                  minLength: {
                    value: 5,
                    message: "Password must not exceed 4 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z0-9\s.,-]+$/,
                    message:
                      "Input must contain only alphanumeric characters, spaces, commas, periods, or hyphens",
                  },
                }}
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    required
                    fullWidth
                    onChange={onChange}
                    label="Street Address"
                    id="address-input"
                    type="text"
                    autoComplete="current-address"
                    onBlur={onBlur}
                    value={value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Box>
            <Box sx={{ width: 600, maxWidth: "100%" }}>
              <Controller
                control={control}
                name="apartment"
                rules={{
                  pattern: {
                    value: /^[A-Za-z0-9\s.,-]+$/,
                    message:
                      "This field can only contain alphanumeric characters, spaces, commas, periods, and hyphens",
                  },
                }}
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    fullWidth
                    onChange={onChange}
                    label="Apartment, floor, etc."
                    id="apartment-input"
                    type="text"
                    autoComplete="current-apartment"
                    onBlur={onBlur}
                    value={value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Box>
            <Box sx={{ width: 600, maxWidth: "100%" }}>
              <Controller
                control={control}
                name="city"
                rules={{
                  required: " This field is required",
                  minLength: {
                    value: 2,
                    message: "Must not exceed 4 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z\s-]+$/,
                    message:
                      "City or town can only contain alphabetic characters, spaces, and hyphens",
                  },
                }}
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    required
                    fullWidth
                    onChange={onChange}
                    label="Town/City"
                    id="city-input"
                    type="text"
                    autoComplete="current-city"
                    onBlur={onBlur}
                    value={value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Box>
            <Box sx={{ width: 600, maxWidth: "100%" }}>
              <Controller
                control={control}
                name="Phone"
                rules={{
                  required: "Phone number is required",
                  pattern: {
                    value: /^(010|011|012|015)[0-9]{8}$/,
                    message: "Enter a valid Egyptian phone number",
                  },
                }}
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    required
                    fullWidth
                    onChange={onChange}
                    label="Phone Number"
                    id="Phone-input"
                    type="text"
                    autoComplete="current-Phone"
                    onBlur={onBlur}
                    value={value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Box>

            <Box sx={{ width: 600, maxWidth: "100%" }}>
              <Controller
                control={control}
                name="Email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                }}
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    required
                    fullWidth
                    onChange={onChange}
                    label="Email Address"
                    id="Email-input"
                    type="text"
                    autoComplete="current-Email"
                    onBlur={onBlur}
                    value={value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Box>
            <FormGroup
              sx={{
                display: "flex ",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox defaultChecked name="saveInformationStatus" />
                }
                label="Save this information for faster check-out next time"
              />
            </FormGroup>

            <Button
              variant="contained"
              type="submit"
              sx={{ width: "192px", height: "44px" }}
            >
              Save Data
            </Button>
          </Box>

          {/* second section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              "@media (min-width: 768px)": {
                width: "40%",
              },
            }}
          >
            {/* product container div */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              {cartProducts.map((product) => {
                return (
                  <Card
                    sx={{
                      padding: "10px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                    key={product.id}
                  >
                    <CardMedia
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                      }}
                    >
                      <Box sx={{ width: "54px", height: "54px" }}>
                        <img
                          className="max-h-[54px] max-w-[54px]"
                          src={product.image}
                          alt="checkout-product-image"
                        />
                      </Box>

                      <Typography>
                        {product.title.split(" ").slice(0, 2).join(" ")}
                      </Typography>
                    </CardMedia>

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
                      <Typography color="secondary">
                        {product.quantity} item{product.quantity > 1 ? "s" : ""}
                      </Typography>
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

                    <Typography>${product.price}</Typography>
                  </Card>
                );
              })}
            </Box>
            {/* shipping section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
                marginY: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: "1.2rem",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Subtotal:</Typography>
                <Typography>${totalPrice}</Typography>
              </Box>
              <Divider component="hr" />
              <Box
                sx={{
                  display: "flex",
                  height: "1.2rem",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Shipping:</Typography>
                <Typography>Free</Typography>
              </Box>
              <Divider component="hr" />

              <Box
                sx={{
                  display: "flex",
                  height: "1.2rem",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Total:</Typography>
                <Typography>${totalPrice}</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                sx={{ width: "192px", height: "44px" }}
              >
                Place Order
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
