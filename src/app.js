const express = require('express');
require('./db/conn')
const productitem = require("./models/mens")
const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;

app.listen(port, () => {
    console.log("connection is established on port" +port)
})