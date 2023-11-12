import { Typography } from "@mui/material";

// EmptyInventory component for displaying when the inventory is empty
export const EmptyInventory = () => (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <img
        src="src\assets\images\Empty.svg"
        alt="Empty Inventory"
        style={{ width: 270, height: 270, objectFit: "cover" }}
      />
      <Typography variant="h6" style={{ color: "#ADADAD" }}>
        Your inventory is empty...
      </Typography>
    </div>
  );