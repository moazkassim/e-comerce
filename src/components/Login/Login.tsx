import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../stores/app-store";
import authenticate from "../../services/api/login";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Card,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  FormGroup,
  Link,
  TextField,
  Typography,
} from "@mui/material";

interface Inputs {
  username: string;
  password: string;
}
export default function Login() {
  const setUserToken = useAppStore((state) => state.setUserToken);
  let navigate = useNavigate();

  const {
    control,

    handleSubmit,
  } = useForm<Inputs>({
    mode: "onChange",
    delayError: 400,
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => mutate(data);

  const {
    isPending,
    error: queryError,
    mutate,
  } = useMutation({
    mutationFn: authenticate,
    onSuccess: (data) => {
      setUserToken(data.token);
      navigate("/");
    },
  });

  if (isPending) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box component="section">
      <Container maxWidth="xs">
        <Card
          variant="outlined"
          sx={{
            marginY: "50px",
            padding: "1.5rem",
            "@media (min-width: 640px)": {
              padding: "2rem",
            },
            "& > :not(:last-child)": {
              marginBottom: "1rem",
              "@media (min-width: 768px)": {
                marginBottom: "1.5rem",
              },
            },
          }}
        >
          <Typography variant="h6">Sign in to your account</Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              "& > :not(:last-child)": {
                marginBottom: "1rem",
                "@media (min-width: 768px)": {
                  marginBottom: "1.5rem",
                },
              },
            }}
          >
            <Box sx={{ width: 500, maxWidth: "100%" }}>
              <Controller
                control={control}
                name="username"
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    required
                    fullWidth
                    color="secondary"
                    onChange={onChange}
                    label="Username"
                    id="username-input"
                    type="text"
                    autoComplete="current-password"
                    onBlur={onBlur}
                    value={value}
                    error={invalid}
                    helperText={error?.message}
                  />
                )}
              />
            </Box>
            <Box sx={{ width: 500, maxWidth: "100%" }}>
              <Controller
                control={control}
                rules={{
                  required: true,
                  minLength: {
                    value: 4,
                    message: "Password must not exceed 4 characters",
                  },
                }}
                name="password"
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { invalid, error },
                }) => (
                  <TextField
                    color="secondary"
                    fullWidth
                    label="Password"
                    id="outlined-password-input"
                    type="password"
                    autoComplete="current-password"
                    onChange={onChange}
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
                color="secondary"
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />
              <Link
                component={RouterLink}
                to="/"
                aria-label="Home-page"
                color="secondary"
              >
                Forgot password?
              </Link>
            </FormGroup>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              name="submit"
            >
              Sign in
            </Button>
            {queryError ? (
              <Alert severity="error">{queryError.message}</Alert>
            ) : (
              ""
            )}

            <Typography variant="body2">
              Don’t have an account yet?
              <Link
                color="secondary"
                component={RouterLink}
                to="/register"
                aria-label="register-page"
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
