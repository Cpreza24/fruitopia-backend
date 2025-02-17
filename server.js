const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config;

const port = process.env.PORT;

const app = express();

//Middleware
app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'welcome to the backend' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running, http://localhost:${process.env.PORT}`);
});
