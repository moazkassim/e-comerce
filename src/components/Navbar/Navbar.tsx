import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../../public/Navbar-img/Logo.png";
import SearchBar from "./SearchBar";
import { CartViewer } from "./CartViewer";
import { useShallow } from "zustand/shallow";
import { useAppStore } from "@/stores/app-store";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link as RouterLink } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {
  Collapse,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/api/categories";
import { useNavigate } from "react-router-dom";
import { InboxIcon } from "lucide-react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

function Navbar() {
  const { userToken, logOut, setSelectedCategory } = useAppStore(
    useShallow((state) => ({
      userToken: state.userToken,
      logOut: state.logOut,
      setSelectedCategory: state.setSelectedCategory,
    })),
  );

  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  const pages = [
    { component: "Home", path: "/", icon: <HomeOutlinedIcon /> },
    { component: "Contact", path: "contact", icon: <MailOutlineIcon /> },
    { component: "About", path: "about", icon: <InfoSharpIcon /> },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="static">
      <Container maxWidth={false}>
        <Box
          flex={3}
          sx={{
            display: "flex",
            alignItems: "center",
            "@media (max-width: 768px)": {
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <Box>
            <Link component={RouterLink} to="/" sx={{ p: 0, maxWidth: "65px" }}>
              <img
                src={Logo}
                alt="logo-image"
                aria-label="Home-page"
                className="max-w-[65px]"
              />
            </Link>
          </Box>

          <Box
            flex={2}
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: {
                xs: "none",
                md: "flex",
                gap: "30px",
              },
            }}
          >
            {pages.map((page) => (
              <Link
                component={RouterLink}
                to={page.path}
                key={page.component}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  display: "block",
                  marginX: "10px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                {page.component}
              </Link>
            ))}
          </Box>
          <Box
            flex={2}
            sx={{
              px: "0.25rem",
              display: { md: "flex", xs: "none" },
            }}
          >
            <SearchBar />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "0px",
              gap: "30px",
            }}
            flex={1}
          >
            <CartViewer />
            <Box sx={{ gap: "1rem" }}>
              {userToken == null ? (
                <Link
                  component={RouterLink}
                  aria-label="login-page"
                  to="/login"
                  sx={{
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  <PersonIcon />
                </Link>
              ) : (
                <LogoutIcon onClick={() => logOut()} />
              )}
            </Box>
            <DarkModeIcon
              onClick={() => {
                console.log("first");
                let darkMode = localStorage.getItem("darkMode");
                let data = darkMode == "true" ? "false" : "true";
                localStorage.setItem("darkMode", data);
              }}
              sx={{ cursor: "pointer" }}
            />
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((page) => (
                  <Link
                    key={page.component}
                    component={RouterLink}
                    to={page.path}
                    sx={{ textDecoration: "none" }}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      {page.icon}

                      <Typography
                        sx={{ pl: 4, textAlign: "center", maxWidth: 360 }}
                      >
                        {page.component}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}

                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Categories " />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {data?.map((category, index) => {
                        return (
                          <ListItemButton sx={{ pl: 4 }} key={index}>
                            <Link
                              component={RouterLink}
                              to="/"
                              sx={{ textDecoration: "none" }}
                              onClick={() => {
                                setSelectedCategory(category);
                              }}
                            >
                              <ListItemText primary={category} />
                            </Link>
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </Collapse>
                </List>
              </Menu>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <SearchBar />
        </Box>
      </Container>
    </AppBar>
  );
}
export default Navbar;
