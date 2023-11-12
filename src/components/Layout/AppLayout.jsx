import { styled, useTheme } from "@mui/material/styles";
import { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { UserContext } from "../../contexts/UserContext";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ChatIcon from "@mui/icons-material/Chat";
import { NavigationItems } from "./NavigationItems";
import "./AppLayout.css";

// MUI-component Code starts here

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("md")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// MUI component code ends here.

export default function AppLayout({ children }) {
  // MUI-Component functionality still, used to toggle hidden items.
  const theme = useTheme();
  const [activePage, setActivePage] = useState("Home");
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // End of MUI-component functionality.
  const location = useLocation();
  const { values } = useContext(UserContext);
  // Importing the UserContext.

  useEffect(() => {
    // Get the pathname from the current location
    const currentPath = location.pathname;

    // Find the matching navigation item label based on the current route
    const matchingNavItem = NavigationItems.find((item) =>
      currentPath.startsWith(item.path)
    );

    // Update the active page based on the matching navigation item
    if (matchingNavItem) {
      setActivePage(matchingNavItem.label);
    }
  }, [location.pathname]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          style={{
            backgroundColor: "white",
            boxShadow: "0px 5px 5px -5px rgba(0,0,0,0.25)",
            outlineOffset: "50px",
          }}
        >
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                color: "#4C67FF",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                noWrap
                component="div"
                style={{
                  fontFamily: "Poppins",
                  color: "#525252",
                  fontWeight: "600",
                }}
              >
                Welcome,
              </Typography>
              <Typography
                variant="h5"
                noWrap
                component="div"
                style={{
                  fontFamily: "Poppins",
                  color: "#4C67FF",
                  fontWeight: "600",
                }}
              >
                &nbsp;{values.username}.
              </Typography>
            </span>

            <Link to="/">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#FF686B",
                }}
              >
                Logout
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader
            style={{
              backgroundColor: "#4C67FF",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-booking"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  ...(!open && {
                    display: "none",
                  }),
                }}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 18v-9.5a4.5 4.5 0 0 1 4.5 -4.5h7a4.5 4.5 0 0 1 4.5 4.5v7a4.5 4.5 0 0 1 -4.5 4.5h-9.5a2 2 0 0 1 -2 -2z" />
                <path d="M8 12h3.5a2 2 0 1 1 0 4h-3.5v-7a1 1 0 0 1 1 -1h1.5a2 2 0 1 1 0 4h-1.5" />
                <path d="M16 16l.01 0" />
              </svg>
              <Typography
                variant="h5"
                noWrap
                component="div"
                style={{
                  fontFamily: "Poppins",
                  color: "white",
                  fontWeight: "500",
                  ...(!open && {
                    display: "none",
                  }),
                }}
              >
                Bookie
              </Typography>
            </span>

            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon
                  sx={{
                    color: "white",
                    ...(!open && { display: "none" }),
                  }}
                />
              ) : (
                <ChevronLeftIcon
                  sx={{
                    color: "white",
                    ...(!open && { display: "none" }),
                  }}
                />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {NavigationItems.map((item) => (
              <Link
                to={item.path}
                key={item.label}
                style={{ textDecoration: "none" }}
              >
                <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    backgroundColor: activePage === item.label ? "#4C67FF" : "transparent",
                    borderRadius: activePage === item.label ? "0px 0 0 0px" : "0",
                    color: activePage === item.label ? "white" : "#4C67FF",
                  }}
                >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                        color: activePage === item.label ? "white" : "#4C67FF",
                      }}
                    >
                      {item.label === "Home" ? (
                        <DashboardIcon />
                      ) : item.label === "Add Product" ? (
                        <PostAddIcon />
                      ) : item.label === "Account" ? (
                        <AccountBoxIcon />
                      ) : (
                        <ChatIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
          className="main-content"
        >
          {/* Main Content Goes Here */}
          {children}
          <DrawerHeader />
        </Box>
      </Box>
    </>
  );
}
