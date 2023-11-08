import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function NavigationBar() {
    
  const { values } = useContext(UserContext);

  return (
    <AppBar position="static" style={{ background: "#1e1e1e" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Hi {values.username}</Typography>
        <Link to="/">
          <Button color="inherit">Logout</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
