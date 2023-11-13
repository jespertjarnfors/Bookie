import { createContext, useReducer } from "react";

// Defining the initial state.
const initialState = {
  products: [],
  totalProducts: 0,
  totalStoreValue: 0,
  outOfStock: 0,
  totalCategories: 0,
  editing: false,            // Tracking editing status.
  editableProduct: null,     // This stores the product being edited.
};

// Creating & Exporting the product context.
export const ProductContext = createContext();

// Product reducer to handle adding, updating, and deleting products.
const productReducer = (state, action) => {

  // Debugging statement.
  console.log("Action received:", action);

  switch (action.type) {
    case "ADD_PRODUCT": {
      // Loads the current amount of products, and adds the new one (payload).
      const updatedProductsAdd = [...state.products, action.payload];

      // Checks the total quantity of products, and then adds the quantity from the newly added product. Starts at 0. 
      const updatedTotalProductsAdd = updatedProductsAdd.reduce((total, product) => total + parseInt(product.quantity), 0);

      // Only include the value if the product is in stock, and add the price * quantity to the total store value.
      const updatedTotalStoreValueAdd = updatedProductsAdd.reduce((total, product) =>
       (product.quantity > 0 ? total + (parseInt(product.price) * product.quantity) : total), 0);

      // Checks if the product is out of stock / quantity === 0.
      const updatedOutOfStockAdd = updatedProductsAdd.filter((product) => product.quantity === 0).length;

      // Using the Array.from method on a set with unique values only from categories, and then counts the length of that array.
      const updatedCategoriesAdd = Array.from(new Set(updatedProductsAdd.map((product) => product.category))).length;

      // Updating the state after all the logic has been handled.
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
      // Maps over the existing products and replaces the one with the matching ID with the updated payload.
      const updatedProductsUpdate = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product);
    
      // Counts the number of products with a quantity of 0.
      const updatedOutOfStockUpdate = updatedProductsUpdate.filter((product) => parseInt(product.quantity) === 0).length;
    
      // Calculates the total quantity of all products.
      const updatedTotalProductsUpdate = updatedProductsUpdate.reduce((total, product) => total + parseInt(product.quantity), 0);
    
      // Calculates the total store value, only including products that are in stock.
      const updatedTotalStoreValueUpdate = updatedProductsUpdate.reduce(
        (total, product) =>
          product.quantity > 0 ? total + parseInt(product.price) * product.quantity : total, 0);
    
      // Counts the number of unique categories in the updated product list.
      const updatedCategoriesUpdate = Array.from( new Set(updatedProductsUpdate.map((product) => product.category))).length;
    
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
      const updatedTotalProductsDelete = updatedProductsDelete.reduce((total, product) => total + (parseInt(product.quantity)), 0);
      // Only include the value if the deleted product was in stock.
      const updatedTotalStoreValueDelete = updatedProductsDelete.reduce(
        (total, product) => (product.quantity > 0 ? total + (parseInt(product.price) * product.quantity) : total), 0);
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

// Creating the ProductProvider component that makes use of the reducer.
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
