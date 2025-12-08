const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Welcome to CodeB Backend!');
});

app.get('/services', (req, res) => {
  res.json({ message: 'Services endpoint' });
});

app.get('/portfolio', (req, res) => {
  res.json({ message: 'Portfolio endpoint' });
});

app.get('/contact', (req, res) => {
  res.json({ message: 'Contact endpoint' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});