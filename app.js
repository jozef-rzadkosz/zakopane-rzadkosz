const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/cat', (req, res) => {
  res.send('Hello cats!');
});

app.post('/contact', (req, res) => {
  res.send(req.body);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${PORT} ...`));
