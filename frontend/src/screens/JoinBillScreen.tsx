import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

const JoinBillScreen: React.FC = () => {
  const [billCode, setBillCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleJoinBill = async () => {
    if (!billCode) {
      setError("Please enter a valid bill code.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Replace with your backend API endpoint
      const response = await axios.post("/api/join-bill", { billCode });

      if (response.status === 200) {
        // Assuming the response contains bill details or next navigation steps
        const { billDetails } = response.data;
        navigate("/bill-details", { state: { billDetails } });
      } else {
        setError("Failed to join the bill. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while joining the bill. Please check the code and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Join a Bill
      </Typography>
      <Typography variant="body1" gutterBottom>
        Enter the bill code shared by your friends to contribute and split the bill.
      </Typography>
      <Box
        component="form"
        sx={{ width: "100%", maxWidth: 400, marginTop: 3 }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          handleJoinBill();
        }}
      >
        <TextField
          label="Bill Code"
          variant="outlined"
          fullWidth
          value={billCode}
          onChange={(e) => setBillCode(e.target.value)}
          error={!!error}
          helperText={error}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
          onClick={handleJoinBill}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Join Bill"}
        </Button>
      </Box>
      {error && (
        <Alert severity="error" sx={{ marginTop: 2, maxWidth: 400 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default JoinBillScreen;