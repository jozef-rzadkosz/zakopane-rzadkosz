const express = require('express');
const app = express();
const contact = require('./routes/contact');
const PORT = process.env.PORT || 8000;
const cors = require('cors');
require('dotenv').config();

app.use(cors());

app.get('/', (req, res) => {
  return res.json({ status: 200 });
});

app.use('/contact', contact);

app.listen(PORT, () => console.log(`App is listening on port: ${PORT}...`));
