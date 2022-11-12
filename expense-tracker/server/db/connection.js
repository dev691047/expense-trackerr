
const mongoose=require('mongoose');
// using mongoose we can connect with the clustors
const conn=mongoose.connect(process.env.ATLAS_URI)
.then(db=>{
    console.log("database connected");
    return db;
}).catch(err=>{
    console.log("connection error");
})
module.exports=conn;
