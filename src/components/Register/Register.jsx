import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { TitleBar } from '../Misc/TitleBar';
import './Register.css'


function Register() {

  const { values, handleChange, handleSubmit } = useContext(UserContext);

  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      // Send a POST request to your server for registration
      const response = await axios.post('http://localhost:5000/api/register', values);

      if (response.status === 200) {
        console.log('Registration successful');
        navigate('/Login')
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };


  return (
    <div className="container-box">
      <TitleBar></TitleBar>
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Paper
            elevation={3}
            style={{
              borderRadius: "20px",
              padding: "10px",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "400px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-checkbox"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#4C67FF"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11l3 3l8 -8" />
              <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
            </svg>
            <h2 className='box-title'>Sign up</h2>
            <form onSubmit={handleSubmit} noValidate>
              <TextField
                id="outlined-username"
                label="Username"
                variant="outlined"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
              <br />
              <TextField
                id="outlined-password"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <br />
              <br />
              <Button
                type="submit"
                size="large"
                fontSize="large"
                variant="contained"
                onClick={registerUser}
                style={{
                  backgroundColor: "#4C67FF",
                }}
              >
                Sign up
              </Button>
            </form>
            <p>Already have an account?</p>
            <Link to="/">
              <Button variant="text" color="primary">
                Sign in
              </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </div>
  );
}

export default Register;
