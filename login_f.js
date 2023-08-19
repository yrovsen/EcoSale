const express = require('express');
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// Dummy user data for demonstration purposes
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  
  if (user) {
    // Successful login
    res.status(200).json({ message: 'Login successful' });
  } else {
    // Invalid credentials
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

// Sign-in endpoint
app.post('/sign-in', (req, res) => {
  const { username, password } = req.body;
  
  // Check if the username is already taken
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    res.status(409).json({ error: 'Username already exists' });
    return;
  }
  
  // Create a new user
  const newUser = { username, password };
  users.push(newUser);
  
  res.status(200).json({ message: 'Sign-in successful' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
