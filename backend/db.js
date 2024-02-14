const mongoose = require('mongoose');

function getconnection(){
    mongoose.connect("mongodb://localhost:27017").then(
        (data)=>{
            console.log("connected to mongo successfully")
        }
        ).catch((err)=>{
            console.log(err)
        })
}
module.exports=getconnection