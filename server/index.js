const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.listen(port, err => {
  err
    ? console.err(`Error launching server ${err}`)
    : console.log(`Server is listening on port ${port}`);
});
