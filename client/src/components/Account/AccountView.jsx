import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { TextField, Avatar, Grid, Paper } from '@mui/material';

function AccountView() {
  const { values } = useContext(UserContext);

  return (
    <div style={{ marginTop: '2.1rem' }}>

      <Grid container spacing={3} sx={{ borderRadius: '20px', padding: '20px', width: "450px", margin: "auto" }}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ borderRadius: '20px', padding: '20px' }}>
            <Avatar
              alt="User Avatar"
              src="src\assets\images\avatar.png"
              sx={{ width: 250, height: 250, margin: 'auto', marginBottom: '16px' }}
            />
            
            {/* Textfields */}
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={values.username}
              InputProps={{ readOnly: true }}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value="*****"
              InputProps={{ readOnly: true }}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default AccountView;
