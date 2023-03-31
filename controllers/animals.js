const express = require('express');
const router = express.Router();
const animals = require('../models/animal')

// Index Route
router.get('/', (req, res) => {
    res.render('index.ejs', {animals});
})

// Edit and Update Animal:
router.get('/:id/edit', (req, res) => {
    const animal = animals[req.params.id];
    res.render('edit.ejs', {animal})
})

// Show Route
router.get('/:id', (req, res) => {
    const animal = animals[req.params.id];
    animal.id = req.params.id
    console.log(animal)
    res.render('show.ejs', {animal})
})
















module.exports = router;


