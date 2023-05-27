const express = require('express');
const app = express();
const port =  5000;

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.get('/author', (req, res) => {
    res.send('Adham Gaber');
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
