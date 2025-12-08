const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to CodeB Backend!');
});

app.get('/services', (req, res) => {
  res.json({ message: 'Services endpoint' });
});

app.get('/portfolio', (req, res) => {
  res.json({ message: 'Portfolio endpoint' });
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const submissionsDir = path.join(__dirname, 'data');
  if (!fs.existsSync(submissionsDir)) fs.mkdirSync(submissionsDir);
  const filePath = path.join(submissionsDir, `${Date.now()}.json`);
  const payload = { name, email, message, receivedAt: new Date().toISOString() };
  fs.writeFile(filePath, JSON.stringify(payload, null, 2), err => {
    if (err) {
      console.error('Failed to save contact:', err);
      return res.status(500).json({ error: 'Failed to save submission' });
    }
    return res.json({ status: 'ok' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});