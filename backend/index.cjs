const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// Configuring CORS to allow requests from frontend
const corsOptions = {
  origin: ['http://localhost:5173', 'https://your-frontend-app.vercel.app'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.use(express.json());

// Simple dummy JSON-Database with a test user.
const userDatabase = {
  "users": [{
      "username": "test123",
      "password": "123test"
  }]
};

// Endpoint to register a new user.
app.post('/api/register', (req, res) => {
  const newUser = req.body;
  console.log('Received registration data:', newUser);
  userDatabase.users.push(newUser);
  res.send('User registered successfully');
});

// Endpoint to authenticate an existing user.
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const userExists = userDatabase.users.find((user) => user.username === username && user.password === password);

  if (username === '' || password === '') {
    console.log('Received credentials:', username, password);
    res.status(401).send('Login failed');
  } else if (userExists) {
    res.send('Login successful');
  } else {
    console.log('Received credentials:', username, password);
    res.status(401).send('Login failed');
  }
});

// Test route for CORS
app.options('*', cors(corsOptions));
app.get('/test-cors', (req, res) => {
  res.send('CORS is configured correctly.');
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello! The server is up and running.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
