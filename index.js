const express = require('express');
const { connect } = require('./src/config/database');
const User = require("./src/models/user");

const app = express();
const apiRouter = require("./src/routes/index");

app.use("/api",apiRouter);

app.get('/',(req,res)=>{
    res.send({
        success:true,
        message:"Succesfully hiting the api",
        data:{}
    });
})

app.listen(3000, async ()=>{
    
    await connect();
    console.log("mongodb connected successfully");
    console.log('server strted successfully');
    // let user = await User.create({email:"abc@xyz.com",password:"678hjg",username:"abc"});
    // console.log(user);
})