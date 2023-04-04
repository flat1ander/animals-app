const express = require('express');
const router = express.Router();
const starterAnimals = require('../db/animalSeedData.js');
const Animals = require('../models/animal');

// Index Route
router.get('/', async (req, res) => {
	const animals = await Animals.find({});
	res.render('index.ejs', {animals})
});

// New Route
router.get('/new', (req, res) => {
    res.render('new.ejs')
})

// Seed Route
router.get('/seed', async (req, res) => {
	await Animals.deleteMany({});
	await Animals.create(starterAnimals);
	res.redirect('/animals');
});

// Show Route
router.get('/:id', async (req, res) => {
	const animals = await Animals.findById(req.params.id);
    console.log(animals._id)
	res.render('show.ejs', {animals})
});

// Post Route
router.post('/', async (req, res) => {
    req.body.extinct = req.body.extinct === 'on' ? true: false;
    const animals = await Animals.create(req.body)
    res.redirect('/animals')
})

// Edit and Update Routes:
router.get('/:id/edit', async (req, res) => {
    const animals = await Animals.findById(req.params.id)
    res.render('edit.ejs', {animals})
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    req.body.extinct = req.body.extinct === 'on' ? true : false;
    const animals = await Animals.findByIdAndUpdate(id, req.body, {new: true,})
    res.redirect('/animals')
})

// Delete Route
router.delete('/:id', async (req, res) => {
    const animals = await Animals.findByIdAndDelete(req.params.id)
    res.redirect('/animals')
})

module.exports = router;