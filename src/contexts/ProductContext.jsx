import { createContext, useReducer } from "react";

// Defining the initial state.
const initialState = {
  products: [],
  totalProducts: 0,
  totalStoreValue: 0,
  outOfStock: 0,
  totalCategories: 0,
};

// Creating & Exporting the product context.
export const ProductContext = createContext();

// Product reducer to handle adding, updating and deleting products.
const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      // Loads the current amount of products, and adds the new one (payload).
      const updatedProductsAdd = [...state.products, action.payload]; 
      // Checks the total quantity of products, and then adds the quantity from the newly added product. Starts at 0. 
      const updatedTotalProductsAdd = updatedProductsAdd.reduce((total, product) => total + parseInt(product.quantity), 0);
      // Parsing the string input from the form as an integer and adding it to the total.
      const updatedTotalStoreValueAdd = updatedProductsAdd.reduce((total, product) => total + parseInt(product.price), 0);
      // Checks if the product is out of stock / quantity === 0.
      const updatedOutOfStockAdd = updatedProductsAdd.filter((product) => product.quantity === 0).length;
      // Using the Array.from method on a set with unique values only from categories, and then counts the length of that array.
      const updatedCategoriesAdd = Array.from(new Set(updatedProductsAdd.map((product) => product.category))).length;

      return {
        ...state,
        products: updatedProductsAdd,
        totalProducts: updatedTotalProductsAdd,
        totalStoreValue: updatedTotalStoreValueAdd,
        outOfStock: updatedOutOfStockAdd,
        totalCategories: updatedCategoriesAdd,
      };
    }
    case "UPDATE_PRODUCT": {
      // Verifies the IDs between the payload and product and then replaces old product with the updated version.
      const updatedProductsUpdate = state.products.map((product) => product.id === action.payload.id ? action.payload : product);
      const updatedTotalProductsUpdate = updatedProductsUpdate.reduce((total, product) => total + parseInt(product.quantity), 0);
      const updatedTotalStoreValueUpdate = updatedProductsUpdate.reduce((total, product) => total + product.price, 0);
      const updatedOutOfStockUpdate = updatedProductsUpdate.filter((product) => product.quantity === 0).length;
      const updatedCategoriesUpdate = Array.from(new Set(updatedProductsUpdate.map((product) => product.category))).length;

      return {
        ...state,
        products: updatedProductsUpdate,
        totalProducts: updatedTotalProductsUpdate,
        totalStoreValue: updatedTotalStoreValueUpdate,
        outOfStock: updatedOutOfStockUpdate,
        totalCategories: updatedCategoriesUpdate,
      };
    }
    case "DELETE_PRODUCT": {
      // Updates the state to filter out the product that just got deleted.
      const updatedProductsDelete = state.products.filter((product) => product.id !== action.payload);
      const updatedTotalProductsDelete = updatedProductsDelete.reduce((total, product) => total + parseInt(product.quantity), 0);
      const updatedTotalStoreValueDelete = updatedProductsDelete.reduce((total, product) => total + product.price, 0);
      const updatedOutOfStockDelete = updatedProductsDelete.filter((product) => product.quantity === 0).length;
      const updatedCategoriesDelete = Array.from(new Set(updatedProductsDelete.map((product) => product.category))).length;

      return {
        ...state,
        products: updatedProductsDelete,
        totalProducts: updatedTotalProductsDelete,
        totalStoreValue: updatedTotalStoreValueDelete,
        outOfStock: updatedOutOfStockDelete,
        totalCategories: updatedCategoriesDelete,
      };
    }
    default:
      return state;
  }
};

// Create the ProductProvider component
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};


export {ProductProvider};
