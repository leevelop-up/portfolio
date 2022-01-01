""
const express = require('express');
const app = express();
const home = require('./routes/home');


app.set('views','./views');
app.set('view engine','ejs');


app.use("/", home);

app.use(express.static('img'));

module.exports = app;