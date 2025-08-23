const express = require('express');
const router = express.Router();

// Example simple register route
router.post('/register', (req, res) => {
  // your register logic here
  res.json({ message: 'Register route working' });
});

router.post('/login', (req, res) => {
  // your login logic here
  res.json({ message: 'Login route working' });
});

module.exports = router;
