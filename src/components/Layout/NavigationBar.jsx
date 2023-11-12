// import { styled } from "@mui/material/styles";
// import { useState, useContext } from "react";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import { UserContext } from "../../contexts/UserContext";
// import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";
// import "./AppLayout.css";



// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== "open",
//   })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//       marginLeft: drawerWidth,
//       width: `calc(100% - ${drawerWidth}px)`,
//       transition: theme.transitions.create(["width", "margin"], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     }),
//   }));
   
//    export function NavigationBar () {
    
//     const { values } = useContext(UserContext);
//     // Importing the UserContext to display Username in the Navigation bar.

//     const [open, setOpen] = useState(true);
//     // MUI-component state to toggle opened and

//     const handleDrawerOpen = () => {
//         setOpen(true);
//       };
    
//     return (
//         <>
//             <AppBar
//           position="fixed"
//           open={open}
//           style={{
//             backgroundColor: "white",
//             boxShadow: "0px 5px 5px -5px rgba(0,0,0,0.25)",
//             outlineOffset: "50px",
//           }}
//         >
//           <Toolbar
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//             }}
//           >
//             <IconButton
//               aria-label="open drawer"
//               onClick={handleDrawerOpen}
//               edge="start"
//               sx={{
//                 marginRight: 5,
//                 color: "#4C67FF",
//                 ...(open && { display: "none" }),
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//             <span
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Typography
//                 variant="h5"
//                 noWrap
//                 component="div"
//                 style={{
//                   fontFamily: "Poppins",
//                   color: "#525252",
//                   fontWeight: "600",
//                 }}
//               >
//                 Welcome,
//               </Typography>
//               <Typography
//                 variant="h5"
//                 noWrap
//                 component="div"
//                 style={{
//                   fontFamily: "Poppins",
//                   color: "#4C67FF",
//                   fontWeight: "600",
//                 }}
//               >
//                 &nbsp;{values.username}.
//               </Typography>
//             </span>

//             <Link to="/">
//               <Button
//                 variant="contained"
//                 style={{
//                   backgroundColor: "#FF686B",
//                 }}
//               >
//                 Logout
//               </Button>
//             </Link>
//           </Toolbar>
//         </AppBar>
//         </>
//     )
// }