import { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { EmptyInventory } from "./EmptyInventory";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/system";


const ProductList = () => {
  // Removing the focus outline from the Save and Delete buttons.
  const StyledIconButton = styled(IconButton)({
    "&:focus": {
      outline: "none",
    },
  });

  // Using the ProductContext through the custom hook.
  const { state, dispatch } = useContext(ProductContext);

  // State to manage the editing status and the product being edited
  const [editableProduct, setEditableProduct] = useState(null);

  // State to hold the edited values
  const [editedValues, setEditedValues] = useState({
    productTitle: "",
    category: "",
    price: "",
    quantity: "",
  });

  const handleEdit = (product) => {
    console.log("Editing product:", product);
    // Set the editable product
    setEditableProduct(() => {
      // Set the edited values to the current product values
      setEditedValues({
        productTitle: product.productTitle,
        category: product.category,
        price: product.price,
        quantity: product.quantity,
      });
  
      return product; // Return the updated value
    });
  };
  

  const handleUpdate = () => {

    console.log("editedValues:", editedValues);
    console.log("editableProduct:", editableProduct);
  
    // If the quantity is updated to 0, increment the out of stock count
    const isQuantityZero =
      editedValues.quantity === "0" || parseInt(editedValues.quantity) === 0;
    const outOfStockIncrement =
      isQuantityZero && editableProduct && editableProduct.quantity > 0 ? 1 : 0;

      console.log("isQuantityZero:", isQuantityZero);
      console.log("outOfStockIncrement:", outOfStockIncrement);
  
    // Dispatch the update action to the product reducer with the edited values
    dispatch({
      type: "UPDATE_PRODUCT",
      payload: {
        ...editableProduct,
        productTitle: editedValues.productTitle,
        category: editedValues.category,
        price: editedValues.price,
        quantity: editedValues.quantity,
      },
      outOfStockIncrement, // Include the out of stock count increment
    });
  
    // Reset the editable product and edited values
    setEditableProduct(null);
    setEditedValues({
      productTitle: "",
      category: "",
      price: "",
      quantity: "",
    });
  };
   
  // Function to handle deleting a product
  const handleDelete = (productId) => {
    // Dispatching the delete action to the product reducer
    dispatch({ type: "DELETE_PRODUCT", payload: productId });
  };

  // Function to handle field changes during editing
  const handleFieldChange = (field, value) => {
    // Update the edited values state
    setEditedValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  // Function to prevent event propagation to avoid closing the editing state
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div style={{ marginTop: "2.1rem" }}>
      <Typography
        variant="h6"
        align="left"
        gutterBottom
        style={{ color: "#525252" }}
      >
        Product List
      </Typography>

      {state.products.length === 0 ? (
        <EmptyInventory />
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>{" "}
                {/* New column for delete button */}
              </TableRow>
            </TableHead>
            <TableBody>
              {state.products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    {product.productImage && (
                      <img
                        src={URL.createObjectURL(product.productImage)}
                        alt="Thumbnail"
                        style={{ width: 50, height: 50, objectFit: "cover" }}
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    {editableProduct === product ? (
                      <TextField
                        value={editedValues.productTitle}
                        onChange={(e) =>
                          handleFieldChange("productTitle", e.target.value)
                        }
                        onClick={stopPropagation}
                      />
                    ) : (
                      product.productTitle
                    )}
                  </TableCell>
                  <TableCell>
                    {editableProduct === product ? (
                      <TextField
                        value={editedValues.category}
                        onChange={(e) =>
                          handleFieldChange("category", e.target.value)
                        }
                        onClick={stopPropagation}
                      />
                    ) : (
                      product.category
                    )}
                  </TableCell>
                  <TableCell>
                    {editableProduct === product ? (
                      <TextField
                        value={editedValues.price}
                        onChange={(e) =>
                          handleFieldChange("price", e.target.value)
                        }
                        onClick={stopPropagation}
                      />
                    ) : (
                      `$${product.price}`
                    )}
                  </TableCell>
                  <TableCell>
                    {editableProduct === product ? (
                      <TextField
                        value={editedValues.quantity}
                        onChange={(e) =>
                          handleFieldChange("quantity", e.target.value)
                        }
                        onClick={stopPropagation}
                      />
                    ) : (
                      product.quantity
                    )}
                  </TableCell>
                  <TableCell>
                    {editableProduct === product ? (
                      <StyledIconButton
                        aria-label="save"
                        onClick={(e) => {
                          handleUpdate();
                          stopPropagation(e);
                        }}
                      >
                        <SaveIcon />
                      </StyledIconButton>
                    ) : (
                      <StyledIconButton
                        aria-label="edit"
                        onClick={() => handleEdit(product)}
                      >
                        <EditIcon />
                      </StyledIconButton>
                    )}
                  </TableCell>
                  <TableCell>
                    <StyledIconButton
                      aria-label="delete"
                      onClick={() => handleDelete(product.id)}
                    >
                      <DeleteIcon />
                    </StyledIconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default ProductList;
