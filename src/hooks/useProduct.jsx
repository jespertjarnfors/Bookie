import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";

// Custom hook with error-handling to be used within components that use the ProductContext.
export const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
      throw Error("useProduct must be used within a ProductProvider");
    }
    return context;
  };