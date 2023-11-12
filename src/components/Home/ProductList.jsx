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
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel"; // Import CancelIcon

const ProductList = () => {
  const { state, dispatch } = useContext(ProductContext);
  const [editableProduct, setEditableProduct] = useState(null);
  const [editedValues, setEditedValues] = useState({
    productTitle: "",
    category: "",
    price: "",
    quantity: "",
  });

  const handleEdit = (product) => {
    setEditableProduct(() => {
      setEditedValues({
        productTitle: product.productTitle,
        category: product.category,
        price: product.price,
        quantity: product.quantity,
      });
      return product;
    });
  };

  const handleUpdate = () => {
    const isQuantityZero =
      editedValues.quantity === "0" || parseInt(editedValues.quantity) === 0;
    const outOfStockIncrement =
      isQuantityZero && editableProduct && editableProduct.quantity > 0 ? 1 : 0;

    dispatch({
      type: "UPDATE_PRODUCT",
      payload: {
        ...editableProduct,
        productTitle: editedValues.productTitle,
        category: editedValues.category,
        price: editedValues.price,
        quantity: editedValues.quantity,
      },
      outOfStockIncrement,
    });

    setEditableProduct(null);
    setEditedValues({
      productTitle: "",
      category: "",
      price: "",
      quantity: "",
    });
  };

  const handleDelete = (productId) => {
    dispatch({ type: "DELETE_PRODUCT", payload: productId });
  };

  const handleFieldChange = (field, value) => {
    setEditedValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

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
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{
                    backgroundColor:
                      editableProduct === product ? "#D6DCFF" : "inherit",
                  }}
                >
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
                        InputProps={{
                          style: { background: "#ffffff" },
                        }}
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
                        InputProps={{
                          style: { background: "#ffffff" },
                        }}
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
                        InputProps={{
                          style: { background: "#ffffff" },
                        }}
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
                        InputProps={{
                          style: { background: "#ffffff" },
                        }}
                      />
                    ) : (
                      product.quantity
                    )}
                  </TableCell>
                  <TableCell>
                    {editableProduct === product ? (
                      <div>
                        <IconButton
                          aria-label="save"
                          onClick={(e) => {
                            handleUpdate();
                            stopPropagation(e);
                          }}
                          sx={{ backgroundColor: "#22C55E" , "&:hover": {} }}
                        >
                          <CheckIcon style={{ color: "#ffffff",  }} />
                        </IconButton>
                        <IconButton
                          aria-label="cancel"
                          onClick={() => setEditableProduct(null)}
                          sx={{  backgroundColor: "#FF574A", marginLeft: "5px", "&:hover": {} }}
                        >
                          <CancelIcon style={{ color: "#ffffff" }} />
                        </IconButton>
                      </div>
                    ) : (
                      <IconButton
                        aria-label="edit"
                        onClick={() => handleEdit(product)}
                      >
                        <EditIcon />
                      </IconButton>
                    )}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDelete(product.id)}
                      style={{
                        color:
                          editableProduct === product ? "#ffffff" : undefined,
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
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
