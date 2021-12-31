const express = require('express');
const router = express.Router();
const phonebooks = require('./phonebooks.json');

// Get all the phonebooks
router.get('/', (req, res) => {
  res.json(phonebooks);
});

// Get a specific phonebook
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(phonebooks.filter((ele) => ele.id === parseInt(id)));
});

router.post('/', (req, res) => {
  const body = req.body;
  console.log(body);
  phonebooks.push(body);
  res.json({ message: 'The phonebook has been added' });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  phonebooks.forEach((phonebook, index) => {
    if (phonebook.id === parseInt(id)) {
      phonebooks[index] = body;
    }
  });
  res.json({ message: `The phonebook with ID ${id} has been updated` });
  // res.json(phonebooks);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  phonebooks.forEach((phonebook, index) => {
    if (phonebook.id === parseInt(id)) {
      phonebooks.splice(index);
    }
  });
  res.json({ message: `phonebook with id #${id} has been deleted` });
});

module.exports = router;