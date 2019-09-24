const express = require('express');
const app = express();
const routes = require('./routes');
const port = 3000;
const cors = require('cors');

app.use(cors({optionSuccessStatus: 200}));

app.use(express.static(__dirname + '/public'));

app.use('/', routes);
routes.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => console.log(`App listening on port ${port}!`));