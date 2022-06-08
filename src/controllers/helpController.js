const helpDetails = (req,res)=>{
 return res.status(200).send({
     message:"successfully hiting the help api",
     success:true,
     data:{
         contact:"+91xxxxxxxxx"
     }
 })
}

module.exports ={
    helpDetails
}