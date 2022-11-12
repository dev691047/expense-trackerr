// dev dev123

const express=require('express');
const cors=require('cors');
const app=express();
  
require('dotenv').config({path:'./config.env'});
const port= process.env.PORT ||5000;

//middlewares

app.use(cors())
app.use(express.json());

///mongodb connection
const con=require('./db/connection.js');


//using routes
app.use(require('./routes/route'));
con.then(db=>{
    if(!db)return process.exit(1);
    //listen to the http server only when we have a valid connection;
    app.listen(port,()=>{
        console.log(`server is running on port:http://localhost:${port}`);
    })
    app.on('error',err=>{
        console.log('failed to connect http server')
    })
}).catch(err=>{
    console.log(`connection failed from mongodb ${err} `)
})



