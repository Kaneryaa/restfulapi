const mongoose = require('mongoose');
const itemSchema=new mongoose.Schema({
    ProductID:{
        type:Number,
        require:true,
        unique:true
    },

    ProductName:{
        type:String,
        require:true,
        
    },

    ProductQuality:{
        type:String,
        require:true,
        
    }
})

const productitem = new mongoose.model("productitem",itemSchema);
module.exports = productitem;