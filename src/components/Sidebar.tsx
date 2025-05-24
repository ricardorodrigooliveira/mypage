import {
  Box,
  Drawer,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Home as HomeIcon,
  Add as AddIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const drawerWidth = 240;

export default function Sidebar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    handleCloseMenu();
  };

  const navItems = [
    { label: "Home", icon: <HomeIcon />, path: "/home" },
    ...(isAuthenticated
      ? [{ label: "Nova Postagem", icon: <AddIcon />, path: "/nova-postagem" }]
      : []),
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/home")}
        >
          Home
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              selected={location.pathname === item.path}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      {isAuthenticated && (
        <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
          <IconButton onClick={handleAvatarClick}>
            <Avatar>{user?.name.charAt(0)}</Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem disabled>{user?.name}</MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
              Sair
            </MenuItem>
          </Menu>
        </Box>
      )}
    </Drawer>
  );
}
