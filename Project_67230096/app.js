const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const coffeeRoutes = require('./routes/coffees');
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', coffeeRoutes);

mongoose.connect('mongodb://localhost:27017/coffee_shop', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});