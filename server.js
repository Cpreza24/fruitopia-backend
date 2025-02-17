const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config;

const app = express();
const BASE_URL = 'https://www.fruityvice.com/api/fruit/all';

//Middleware
app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'welcome to the backend' });
});

app.get('/fruits', async (req, res) => {
  try {
    const response = await axios.get(BASE_URL);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running, http://localhost:${process.env.PORT}`);
});
