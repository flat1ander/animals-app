// Dependencies
const express = require('express');
const app = express();
const PORT = 3000
const animals = require('./models/animal')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const morgan = require('morgan'); 
require('dotenv').config()


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:true }));
app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(bodyParser.json());
app.use(morgan("tiny")) 

const animalsController = require('./controllers/animals');
app.use('/animals', animalsController)

















// listener
app.listen(PORT, () => console.log('express is listening on port 3000'));

