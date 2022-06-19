const mongoose=require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/productDB",{
    useNewUrlParser:true,
    useUnifiedTopology:true    
}).then ( () => console.log("connection is successful"))
.catch ( (err) => console.log(err));