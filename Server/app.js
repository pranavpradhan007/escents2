const http = require('http');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 5000

dotenv.config({ path: './.env' });
require('./db/connection');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./Routes/fetch'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});