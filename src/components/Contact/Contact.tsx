import React from "react";
import { useNavigate } from "react-router-dom";
import authenticate from "../../services/api/login";
import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";

export default function Contact() {
  let navigate = useNavigate();
  interface Inputs {
    email: string;
    subject: string;
    message: string;
  }
  const {
    control,

    handleSubmit,
  } = useForm<Inputs>({
    mode: "onChange",
    delayError: 400,
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log("well done");

  const {
    isPending,

    mutate,
  } = useMutation({
    mutationFn: authenticate,
    onSuccess: (data) => {
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
    <Box sx={{ marginY: "30px" }}>
      <Container maxWidth="md">
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginY: "20px" }}
        >
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </Typography>
        <Card
          component="form"
          variant="outlined"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            padding: "40px",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box sx={{ width: 1000, maxWidth: "100%" }}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  required
                  fullWidth
                  onChange={onChange}
                  label="Email"
                  id="email-input"
                  type="email"
                  autoComplete="current-email"
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </Box>
          <Box sx={{ width: 1000, maxWidth: "100%" }}>
            <Controller
              control={control}
              name="subject"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  required
                  fullWidth
                  onChange={onChange}
                  label="Subject"
                  id="subject-input"
                  type="text"
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </Box>
          <Box
            sx={{
              width: 1000,
              maxWidth: "100%",
            }}
          >
            <Controller
              control={control}
              name="message"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  required
                  fullWidth
                  onChange={onChange}
                  label="Message"
                  id="message-input"
                  type="text"
                  autoComplete="current-message"
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </Box>
          <Button
            sx={{ width: 150 }}
            variant="contained"
            type="submit"
            name="submit-message"
          >
            Send message
          </Button>
        </Card>
      </Container>
    </Box>
  );
}
