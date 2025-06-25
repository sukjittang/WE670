const express = require('express');
const app = express();
const coffeeRoutes = require('./routes/coffees');
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/coffees', coffeeRoutes);

app.listen(port, () => {
  console.log(`Coffee Shop API running at http://localhost:${port}`);
});