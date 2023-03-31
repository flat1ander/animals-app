const express = require('express');
const router = express.Router();
const animals = require('../models/animal')

// Index Route
router.get('/', (req, res) => {
    res.render('index.ejs', {animals});
})

// Show Route
router.get('/:id', (req, res) => {
    const animal = animals[req.params.id];
    animal.id = req.params.id
    res.render('show.ejs', {animal})
})

// New Route
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// Post Route
router.post('/', (req, res) => {
    req.body.extinct = req.body.extinct === 'on' ? true : false
    animals.unshift(req.body)
    res.redirect('/animals')
})

// Edit and Update Routes:
router.get('/:id/edit', (req, res) => {
    const animal = animals[req.params.id];
    res.render('edit.ejs', {animal})
})

router.put('/:id', (req, res) => {
    const animal = animals[req.params.id]
    animals.splice(animal, 1)
    res.redirect('/animals')
})

// Delete Route
router.delete('/:id', (req, res) => {
    animals.splice(req.params.id, 1)
    res.redirect('/animals')
})















module.exports = router;


