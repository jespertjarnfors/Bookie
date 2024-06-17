import { useState } from 'react';
import { Typography, TextField, Button, Paper, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiry: '',
  });

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
    // Resetting the form after submission.
    setFormData({
      name: '',
      email: '',
      enquiry: '',
    });
    // Open the dialog.
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    // Close the dialog.
    setDialogOpen(false);
  };

  return (
    <div style={{ marginTop: '2.1rem' }}>


      <Paper elevation={3} sx={{ borderRadius: '20px', padding: '20px', width: "450px", margin: "auto" }}>
      <Typography variant="h6" align="left" gutterBottom style={{ color: '#525252' }}>
        Contact Us
      </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <TextField
            label="Enquiry"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            name="enquiry"
            value={formData.enquiry}
            onChange={handleInputChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            style={{
              backgroundColor: '#4C67FF',
              marginTop: '16px',
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>

      {/* Dialog */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Message Sent</DialogTitle>
        <DialogContent>
          <Typography>
            Thanks for getting in touch. We will respond to your enquiry shortly.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactUsForm;
