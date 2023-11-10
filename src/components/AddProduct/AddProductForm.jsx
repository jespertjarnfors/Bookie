import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useProduct } from '../../hooks/useProduct';

const AddProductForm = () => {
  // Defining state variables for form fields
  const [productTitle, setProductTitle] = useState(''); // New field for Product Title
  const [productImage, setProductImage] = useState(null);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');

  // state variable for image preview
  const [imagePreview, setImagePreview] = useState(null);

  // Define state variables for the dialog
  const [openDialog, setOpenDialog] = useState(false);

  // Using the productContext through the custom hook.
  const { dispatch } = useProduct();

  // Function to handle image selection
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setProductImage(selectedImage);

    // Create a URL for the selected image to display as a preview
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Generating a unique ID for the product
    const id = Date.now();

    // Create a product object with the form data and generated id, also converting quantity and price to integers.
    const newProduct = {
        id,
        productTitle,
        productImage,
        category,
        price: parseInt(price), // Ensure price is a number
        quantity: parseInt(quantity), // Ensure quantity is a number
        description,
      };      

    // Using dispatch to add the product to the productContext
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });

    // Opening the dialog to show the "Product Added" message
    setOpenDialog(true);

    // Resetting the form fields and image preview
    setProductTitle(''); 
    setProductImage(null);
    setCategory('');
    setPrice('');
    setQuantity('');
    setDescription('');
    setImagePreview(null);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <form onSubmit={handleSubmit}>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Product Preview"
                style={{ maxWidth: '250px', maxHeight: '250px' }}
              />
            )}
            <input
              type="file"
              accept="image/*"
              label="Product Image"
              onChange={handleImageChange}
            />
               <TextField
              label="Product Title"
              variant="outlined"
              fullWidth
              margin="normal"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
            />
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              margin="normal"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <TextField
              label="Price"
              variant="outlined"
              fullWidth
              margin="normal"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              label="Quantity"
              variant="outlined"
              fullWidth
              margin="normal"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              minRows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
              <Button variant="contained" color="primary" type="submit">
                Add Product
              </Button>
            </Box>
          </form>
        </Paper>
      </Grid>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Product Added</DialogTitle>
        <DialogContent>
          Your product has been added successfully!
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default AddProductForm;
