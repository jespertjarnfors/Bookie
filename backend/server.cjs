const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;


app.use(express.json());
app.use(cors());

// Simple dummy JSON-Database with a test user.
const userDatabase = {
  "users": [{
      "username":"test123",
      "password": "123test"
  }]
}

// Endpoint to register a new user
app.post('/api/register', (req, res) => {
  const newUser = req.body;
  userDatabase.users.push(newUser);
  res.send('User registered successfully');
});

// Endpoint to authenticate an existing user
app.post('/api/login', (req, res) => {

  const { username, password } = req.body;
  

  const userExists = userDatabase.users.find((user) => user.username === username && user.password === password);


  if (username === '' || password === '') {
    console.log('Received credentials:', username, password); // Debugging to see if the correct data is being passed through.
    res.status(401).send('Login failed', username, password);
  }
  else if (userExists) {
    res.send('Login successful');
  } else {
    console.log('Received credentials:', username, password); // Debugging to see if the correct data is being passed through.
    res.status(401).send('Login failed', username, password);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
