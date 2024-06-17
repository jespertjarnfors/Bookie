import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { TitleBar } from "../Misc/TitleBar";
import './Login.css'
import { CopyRight } from "../Misc/CopyRight";

function Login() {
  const navigate = useNavigate();
  const { handleChange, handleSubmit, values } = useContext(UserContext);

  const loginUser = () => {
    // Using Axios to send a post request to my server in the backend.
    axios
      .post("http://localhost:5000/api/login", values)
      .then((response) => {
        console.log(response.data); // Logging the data.
        navigate("/Home");
      })
      .catch((error) => {
        // Error-handling.
        alert("Username or password is incorrect");
        console.error("Login failed:", error);
      });
  };

  return (
    <div className="container-box">
      <TitleBar></TitleBar>
      <Grid container className="Login" justifyContent="center">
        <Grid item xs={8} sm={6} md={4}>
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
              className="icon icon-tabler icon-tabler-login"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#4C67FF"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M21 12h-13l3 -3" />
              <path d="M11 15l-3 -3" />
            </svg>
            <h2 className='box-title'>Sign in</h2>
            <form onSubmit={handleSubmit} noValidate>
              <TextField
                id="outlined-username"
                label="Username"
                variant="outlined"
                name="username"
                value={values.username}
                onChange={handleChange}
                style={{marginBottom: "8px"}}
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
                onClick={loginUser}
                style={{
                  backgroundColor: '#4C67FF'
                }}
              >
                Sign in
              </Button>
            </form>
            <p>Don't have an account?</p>
            <Link to="/Register" className="end-button">
              <Button variant="text" color="primary">
                Sign up
              </Button>
            </Link>
          </Paper>
        </Grid>

      </Grid>
      <CopyRight></CopyRight>
    </div>
  );
}

export default Login;
