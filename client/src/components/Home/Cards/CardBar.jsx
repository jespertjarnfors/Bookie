import InventoryCard from "./InventoryCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CancelIcon from "@mui/icons-material/Cancel";
import AppsIcon from "@mui/icons-material/Apps";
import { Divider } from "@mui/material";
import { Paid } from "@mui/icons-material";
import { useProduct } from "../../../hooks/useProduct";

export function CardBar() {
  const { state } = useProduct();

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1.5rem",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <InventoryCard
          title="Total Products:"
          quantity={state.totalProducts}
          bgColor={"#D770BF"}
          iconSrc={
            <ShoppingCartIcon
              style={{
                color: "white",
                height: "50px",
                width: "50px",
              }}
            />
          }
        />
        <InventoryCard
          title="Total Store Value:"
          quantity={new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0
          }).format(state.totalStoreValue)}
          // Formats the raw data into a currency-format.
          bgColor={"#22C55E"}
          iconSrc={
            <Paid
              style={{
                color: "white",
                height: "50px",
                width: "50px",
              }}
            />
          }
        />

        <InventoryCard
          title="Out of Stock:"
          quantity={state.outOfStock}
          bgColor={"#FF574A"}
          iconSrc={
            <CancelIcon
              style={{
                color: "white",
                height: "50px",
                width: "50px",
              }}
            />
          }
        />
        <InventoryCard
          title="Total Categories:"
          quantity={state.totalCategories}
          bgColor={"#4C76FF"}
          iconSrc={
            <AppsIcon
              style={{
                color: "white",
                height: "50px",
                width: "50px",
              }}
            />
          }
        />
      </div>
      <Divider />
    </>
  );
}
