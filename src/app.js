const express = require('express');
const { default: mongoose } = require('mongoose');
require('./db/conn')
const productitems = require("./models/mens")
const app = express();
app.use =(express.json());
// const port = process.env.PORT || 3000;
const port = 3000;

//we will handle post request
app.post("/mens", async(req,res) => {
  try{
           new addingproductitems == new productitems(req.body);
           console.log(req.body);
           addingproductitem.save();
  }catch(e){
    res.send(e);
  }
})

app.listen(port, () => {
    console.log("connection is established on port" + port);
})