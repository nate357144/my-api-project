const express = require('express');       
const app = express();                    

app.use(express.json());                  

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to my API 🚀');
});

// In-memory "database"
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// 1️⃣ GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// 2️⃣ GET a single user by ID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// 3️⃣ POST a new user
app.post('/api/users', (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// 4️⃣ PUT update user
app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (user) {
    user.name = req.body.name;
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// 5️⃣ DELETE user
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === userId);
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    res.json(deletedUser[0]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
