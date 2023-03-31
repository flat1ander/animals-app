const express = require('express');
const router = express.Router();
const animals = require('../models/animal')

// Index Route
router.get('/', (req, res) => {
    res.render('index.ejs', {animals});
})

// New Route
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// Show Route
router.get('/:id', (req, res) => {
    const animal = animals[req.params.id];
    animal.id = req.params.id
    res.render('show.ejs', {animal})
})

// Post Route
router.post('/', (req, res) => {
    req.body.extinct = req.body.extinct === 'on' ? true : false
    animals.unshift(req.body)
    res.redirect('/animals')
})

// Edit and Update Routes:
router.get('/:id/edit', (req, res) => {
    const animal = animals[req.params.id]
    res.render('edit.ejs', { animal })
})

router.put('/:id', (req, res) => {
    if (req.body.extinct === 'on') {
        req.body.extinct = true
    } else {
        req.body.extinct = false
    }
    animals[req.params.id] = req.body
    res.redirect('/animals')
})

// Delete Route
router.delete('/:id', (req, res) => {
    animals.splice(req.params.id, 1)
    res.redirect('/animals')
})















module.exports = router;


