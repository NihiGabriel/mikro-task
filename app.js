const express = require('express');
const port = 3000;
const phonebooks = require('./phonebooks');

const app = express();

app.use(express.json());
app.use('/api/v1/phonebooks', phonebooks);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});