const express = require('express');
const bodyParser = require("body-parser");
const passport = require("passport");
const { connect } = require('./src/config/database');
const authRouter = require("./src/routes/authRoute");
require('./src/util/auth');
const User = require("./src/models/user");

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
const apiRouter = require("./src/routes/index");

app.use("/",authRouter);
app.use("/api",passport.authenticate('jwt',{session:false}),apiRouter);

// app.use(function(err,req,res,next){
//     res.status(err.status || 500);
//     res.json({
//         success: false,
//         error:err
//     });
    
// })

app.listen(3000, async ()=>{
    
    await connect();
    console.log("mongodb connected successfully");
    console.log('server strted successfully');
   
})