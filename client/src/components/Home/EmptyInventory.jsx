import { Typography } from "@mui/material";
import emptyImage from "../../../public/assets/Empty.svg"

// EmptyInventory component for displaying when the inventory is empty
export const EmptyInventory = () => (
    <div style={{ textAlign: "center", marginTop: "3rem", marginBottom: "auto" }}>
      <img
        src= {emptyImage}
        alt="Empty Inventory"
        style={{ width: 270, height: 270, objectFit: "cover" }}
      />
      <Typography variant="h6" style={{ color: "#ADADAD" }}>
        Your inventory is empty...
      </Typography>
    </div>
  );