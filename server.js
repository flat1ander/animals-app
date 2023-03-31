// Dependencies
const express = require('express');
const app = express();
const PORT = 3000
const animals = require('./models/animal')
// const methodOverride = require('method-override')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:false }));
app.use(express.static('public'));
// app.use(methodOverride('_method'))

const animalsController = require('./controllers/animals');
app.use('/animals', animalsController)

















// listener
app.listen(PORT, () => console.log('express is listening on port 3000'));

