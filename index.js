const express = require('express');
const auth = require('./auth');

const PORT = 3000;
const app = express();

app.use(auth);

app.get('/', (req, res) => {
  res.send('ServerWar is live');
});

app.listen(PORT, () => {
  console.log(`ServerWar is listening on port ${PORT}`);
});
