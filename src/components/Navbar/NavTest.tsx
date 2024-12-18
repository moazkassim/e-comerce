import { Link } from "react-router-dom";
import Logo from "../../../public/Navbar-img/Logo.png";
import NanMenu from "./NavMenu";
import SearchBar from "./SearchBar";
import { LogOut, User } from "lucide-react";
import { useAppStore } from "../../stores/app-store";
import { useShallow } from "zustand/shallow";
import { CartViewer } from "./CartViewer";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { Button } from "@material-tailwind/react";

export default function Navbar() {
  const { userToken, logOut } = useAppStore(
    useShallow((state) => ({
      userToken: state.userToken,
      logOut: state.logOut,
    })),
  );
  const pages = [
    { page: "Home", path: "/" },
    { page: "Contact", path: "contact" },
    { page: "About", path: "about" },
  ];
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className="flex w-screen items-center justify-between gap-10 px-1 md:w-full md:px-0">
            <Link to="/">
              <img
                src={Logo}
                className="max-w-[65px]"
                alt="logo-image"
                aria-label="Home-page"
              />
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textTransform: "none",
                  }}
                  component={Link}
                  key={page.path}
                  aria-label={`${page}-page`}
                  to={page.path}
                >
                  {page.page}
                </Button>
              ))}
            </Box>

            <Box className="hidden w-full md:block lg:w-1/2">
              <SearchBar />
            </Box>

            <Box className="flex items-center justify-center gap-8">
              <CartViewer />
              <Box className="hidden lg:inline-block">
                {" "}
                {userToken == null ? (
                  <Link
                    aria-label="login-page"
                    to="/login"
                    className="cursor-pointer"
                  >
                    <User
                      color="white"
                      className="rounded-full bg-[#DB4444] p-1"
                      size={30}
                    />
                  </Link>
                ) : (
                  <>
                    <LogOut
                      onClick={() => logOut()}
                      color="white"
                      className="cursor-pointer rounded-full bg-[#DB4444] p-1"
                      size={30}
                    />
                  </>
                )}
              </Box>
              <Box className="flex justify-center lg:hidden">
                <NanMenu />
              </Box>
            </Box>
          </Box>
          <Box className="w-screen px-1 md:hidden">
            <SearchBar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
