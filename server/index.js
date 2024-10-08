const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const SERVICE_NAME = '[GITHUB_USER_SERVICE]';

const app = express();
const publicPath = path.join(__dirname, '../client/dist');
dotenv.config();

const port = process.env.PORT || 8000;

app.set('json spaces', 2);
app.use('/', express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(publicPath, 'index.html'));
});

app.listen(port, () =>
  console.log(`${SERVICE_NAME} is running on port ${port}`)
);
