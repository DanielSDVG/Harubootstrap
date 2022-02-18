const express = require('express');

const config = require('../../config.json');



const app = express();

app.set('view engine', 'pug');
app.set('views', `.${config.folders.views}`);
app.use(express.static(`.${config.folders.public}`));

module.exports = app;