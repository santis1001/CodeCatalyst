const express = require('express');
const db = require('./config/connection');
// Require model
const { Genre } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creates a new document
app.post('/new-genre/:genre', (req, res) => {
  const newGenre = new Genre({ name: req.params.genre });
  newGenre.save();
  if (newGenre) {
    res.status(200).json(newGenre);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

// Finds all documents
app.get('/all-genres', async (req, res) => {
  try {
    // Using model in route to find all documents that are instances of that model
    const result = await Genre.find({});
    res.status(200).json(result);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

// Find first document with name equal to "Kids"
app.get('/find-kids-genre', async (req, res) => {
  try {
    const result = await Genre.findOne({ name: 'Kids' });
    res.status(200).json(result);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

// Finds first document that matches and deletes
app.delete('/find-one-delete/:genre', async (req, res) => {
  try {
    const result = await Genre.findOneAndDelete({ name: req.params.genre });
    res.status(200).json(result);
    console.log(`Deleted: ${result}`);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

app.put('/find-one-update/:genre', async (req, res) => {
  try {
    const filter = { name: req.params.genre };
    const newGenre = { name: req.body.name };

    const result = await Genre.findOneAndUpdate(filter, newGenre, {new:true});

    console.log(`Update: ${result}`);
    res.status(200).json(result);
  } catch (err) {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ message: 'something went wrong' });
  }
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
