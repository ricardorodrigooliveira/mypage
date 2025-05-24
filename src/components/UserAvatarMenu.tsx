import React, { useState } from "react";
import {
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { useAuth } from "../hooks/useAuth";

export default function UserAvatarMenu() {
  const { isAuthenticated, login, logout, user } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCredentials({ email: "", password: "" });
    setError("");
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) throw new Error("Login inválido");

      const data = await response.json();
      login(data.user, data.token);
      handleClose();
    } catch (err: any) {
      setError(err.message || "Erro ao fazer login");
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {isAuthenticated && user?.name && (
          <Typography variant="body1" color="inherit">
            {user.name}
          </Typography>
        )}
        <IconButton onClick={handleOpen} color="inherit">
          <Avatar />
        </IconButton>
      </Box>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {!isAuthenticated ? (
          <Box sx={{ px: 2, py: 1, width: 250 }}>
            <Typography variant="subtitle1">Login</Typography>
            <TextField
              fullWidth
              margin="dense"
              label="Usuário"
              variant="outlined"
              size="small"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
            <TextField
              fullWidth
              margin="dense"
              label="Senha"
              type="password"
              variant="outlined"
              size="small"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            {error && (
              <Typography color="error" variant="body2" mt={1}>
                {error}
              </Typography>
            )}
            <Box sx={{ mt: 1, display: "flex", justifyContent: "flex-end" }}>
              <Button size="small" variant="contained" onClick={handleLogin}>
                OK
              </Button>
            </Box>
          </Box>
        ) : (
          <MenuItem onClick={() => { logout(); handleClose(); }}>Logout</MenuItem>
        )}
      </Menu>
    </>
  );
}
