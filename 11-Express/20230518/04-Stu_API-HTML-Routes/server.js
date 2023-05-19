// TODO: Import express
const express = require('express');
const path = require('path');
const fs = require('fs');
// TODO: Import 'terms.json' file
const PORT = 3001;
const app = express();
// TODO: Initialize app variable

app.get('/',(req,res) => {
  res.send(
    `<a href="http://localhost:${PORT}/api">http://localhost:${PORT}/api</a>`
  )
});

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/api', (req, res) => { 
  const jsonData = require('./terms.json'); 
      res.json(jsonData);
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
