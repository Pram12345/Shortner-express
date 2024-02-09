
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/ramakant').then(()=>{
    console.log("MongoDb Connected")
}).catch((err)=>{
    console.log("error a gya ", err)
})