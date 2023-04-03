const { mongoose } = require('../db/connection');

const animalSchema = new mongoose.Schema({
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
})

const Animals = mongoose.model('Animals', animalSchema)

module.exports = Animals;
